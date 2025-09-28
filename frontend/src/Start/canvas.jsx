// src/pages/Canvas.jsx
import React, { useRef, useState, useEffect } from 'react';
import potaraLogo from '../assets/potara-symbol.png'; // adjust if your path differs

export default function Canvas({ referenceData, currentImageType, onActivityUpdate, onInactivityTimeout }) {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen'); // 'pen' | 'eraser'

  // Activity tracking
  const activityTimerRef = useRef(null);
  const lastActivityRef = useRef(Date.now());
  const hasTriggeredTimeoutRef = useRef(false);

  const CURSOR_MAX_PX = 32;        // smaller cursor (try 24–40)
  const HOTSPOT_X_PCT = 0.18;      // 0 = far left, 1 = far right   (smaller -> image moves RIGHT)
  const HOTSPOT_Y_PCT = 0.58;      // 0 = top,     1 = bottom       (larger  -> image moves UP)

  const colors = [
    '#000000', // Black
    '#FFFFFF', // White
    '#808080', // Gray
    '#FF0000', // Red
    '#FFA500', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#A020F0', // Purple
    '#FF8DA1', // Pink
    '#895129', // Brown
  ];

  // Activity tracking functions
  const resetActivityTimer = () => {
    lastActivityRef.current = Date.now();
    hasTriggeredTimeoutRef.current = false;

    // Clear existing timer
    if (activityTimerRef.current) {
      clearTimeout(activityTimerRef.current);
    }

    // Set new timer for 7 seconds
    activityTimerRef.current = setTimeout(() => {
      if (!hasTriggeredTimeoutRef.current && onInactivityTimeout) {
        hasTriggeredTimeoutRef.current = true;
        // Get current canvas state for feedback
        const canvas = canvasRef.current;
        if (canvas && referenceData) {
          const canvasData = canvas.toDataURL('image/png', 0.8);
          onInactivityTimeout(canvasData);
        }
      }
    }, 7000); // 7 seconds

    // Notify parent of activity
    if (onActivityUpdate) {
      onActivityUpdate();
    }
  };

  const recordActivity = () => {
    resetActivityTimer();
  };

  // Initialize activity timer when component mounts
  useEffect(() => {
    resetActivityTimer();

    // Cleanup timer on unmount
    return () => {
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
    };
  }, [onInactivityTimeout, referenceData]);

  // Reset timer when reference data changes (new drawing session)
  useEffect(() => {
    if (referenceData) {
      resetActivityTimer();
    }
  }, [referenceData, onInactivityTimeout]);

  // Initialize canvas/context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 500;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = currentColor;

    fabricCanvasRef.current = { canvas, ctx };
  }, []);

  // Set custom cursor (scaled + hotspot)
useEffect(() => {
  const el = canvasRef.current;
  if (!el) return;

  const img = new Image();
  img.src = potaraLogo; // make sure this import is correct
  img.onload = () => {
    // scale down to keep browsers happy
    const scale = Math.min(CURSOR_MAX_PX / img.width, CURSOR_MAX_PX / img.height, 1);
    const w = Math.max(1, Math.round(img.width * scale));
    const h = Math.max(1, Math.round(img.height * scale));

    const off = document.createElement('canvas');
    off.width = w;
    off.height = h;
    off.getContext('2d').drawImage(img, 0, 0, w, h);

    const url = off.toDataURL('image/png');

    // hotspot inside the image (in pixels)
    const hotspotX = Math.round(w * HOTSPOT_X_PCT);
    const hotspotY = Math.round(h * HOTSPOT_Y_PCT);

    el.style.cursor = `url(${url}) ${hotspotX} ${hotspotY}, crosshair`;
  };
}, []);

  // Update brush properties when color/size changes
  useEffect(() => {
    if (!fabricCanvasRef.current) return;
    const { ctx } = fabricCanvasRef.current;
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;
  }, [currentColor, brushSize]);

  // Recalibrate canvas when layout changes (referenceData or currentImageType)
  useEffect(() => {
    // Force a brief recalculation to ensure proper coordinate alignment after layout shifts
    const timer = setTimeout(() => {
      if (canvasRef.current) {
        // Trigger a reflow to ensure getBoundingClientRect() returns updated values
        canvasRef.current.getBoundingClientRect();
      }
    }, 100); // Small delay to allow layout to settle

    return () => clearTimeout(timer);
  }, [referenceData, currentImageType]);

  // Handle window resize events that could affect canvas positioning
  useEffect(() => {
    const handleResize = () => {
      // Debounce resize events to avoid excessive recalculations
      if (canvasRef.current) {
        canvasRef.current.getBoundingClientRect();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCanvasCoordinates = (e) => {
    const { canvas } = fabricCanvasRef.current;
    // Always get fresh bounding rectangle to account for layout changes
    const rect = canvas.getBoundingClientRect();

    // Calculate the scale factor between displayed canvas and actual canvas
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    // Get coordinates relative to the displayed canvas
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    return { x, y };
  };

  const startDrawing = (e) => {
    if (!fabricCanvasRef.current) return;
    setIsDrawing(true);
    recordActivity(); // Record activity when starting to draw

    const { canvas, ctx } = fabricCanvasRef.current;
    const { x, y } = getCanvasCoordinates(e);

    // Set composite mode at the start of each stroke
    ctx.globalCompositeOperation =
      tool === 'eraser' ? 'destination-out' : 'source-over';

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing || !fabricCanvasRef.current) return;
    recordActivity(); // Record activity while drawing
    const { ctx } = fabricCanvasRef.current;
    const { x, y } = getCanvasCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    if (!fabricCanvasRef.current) return;
    recordActivity(); // Record activity when clearing canvas
    const { canvas, ctx } = fabricCanvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const toggleEraser = () => {
    setTool((t) => (t === 'eraser' ? 'pen' : 'eraser'));
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-[900px] px-4">
      {/* Toolbar */}
      <div className="rounded-xl border border-gray-200 bg-white/90 p-4 shadow-sm mb-3">
        <div className="flex items-center gap-6 flex-wrap">
          {/* Color Palette */}
          <div>
            <span className="text-sm font-medium text-gray-600 mb-2 block font-unkempt">
              Colors:
            </span>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setCurrentColor(color);
                    setTool('pen');
                  }}
                  className={`w-6 h-6 rounded border-2 ${
                    currentColor === color && tool === 'pen'
                      ? 'border-gray-800'
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Pick ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Brush Size */}
          <div>
            <span className="text-sm font-medium text-gray-600 mb-2 block font-unkempt">
              Brush Size:
            </span>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1"
                max="30"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-24"
              />
              <span className="text-sm text-gray-500 w-10 font-unkempt">
                {brushSize}px
              </span>
            </div>
          </div>

          {/* Buttons: Eraser, Clear, Download */}
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={toggleEraser}
              className={`px-3 py-2 rounded-lg border ${
                tool === 'eraser'
                  ? 'bg-[#EB9191] text-white border-gray-900 font-unkempt'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50 font-unkempt'
              }`}
              title="Toggle Eraser"
            >
              Eraser
            </button>

            <button
              onClick={clearCanvas}
              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-unkempt"
              title="Clear"
            >
              Clear
            </button>

            <button
              onClick={downloadPNG}
              className="px-3 py-2 rounded-lg border bg-black text-white border-gray-300 hover:bg-gray-700 font-unkempt"
              title="Download PNG"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Canvas Container with stable positioning */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            className="block max-w-full h-auto" // Changed from w-full to max-w-full for better stability
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={(e) => {
              e.preventDefault();
              const touch = e.touches[0];
              const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
              });
              startDrawing(mouseEvent);
            }}
            onTouchMove={(e) => {
              e.preventDefault();
              const touch = e.touches[0];
              const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
              });
              draw(mouseEvent);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              stopDrawing();
            }}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2 mb-8 text-center">
        Pick a color to draw. Toggle Eraser to remove mistakes. Clear to restart.
        Download to save your masterpiece!
      </p>
    </div>
  );
}
