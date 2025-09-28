// src/pages/Canvas.jsx (same folder as Start.jsx)
import React, { useRef, useState, useEffect } from 'react';

export default function Canvas() 
{
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);

  const colors = ['#000000','#FFFFFF','#FF0000','#00FF00','#0000FF','#FFFF00','#FF00FF','#00FFFF','#FFA500','#800080','#A52A2A','#808080'];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set size explicitly so drawing is crisp
    canvas.width = 800;
    canvas.height = 500;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = currentColor;

    fabricCanvasRef.current = { canvas, ctx };
  }, []);

  // Update brush properties
  useEffect(() => {
    if (fabricCanvasRef.current) {
      const { ctx } = fabricCanvasRef.current;
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = brushSize;
    }
  }, [currentColor, brushSize]);

  const startDrawing = (e) => {
    if (!fabricCanvasRef.current) return;
    setIsDrawing(true);
    const { canvas, ctx } = fabricCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing || !fabricCanvasRef.current) return;
    const { canvas, ctx } = fabricCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    if (!fabricCanvasRef.current) return;
    const { canvas, ctx } = fabricCanvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    // Keep this wrapper small and above any absolute decorations
    <div className="relative z-10 mx-auto w-full max-w-[900px] px-4">
      {/* Toolbar */}
      <div className="rounded-xl border border-gray-200 bg-white/90 p-4 shadow-sm mb-3">
        <div className="flex items-center gap-6 flex-wrap">
          {/* Color Palette */}
          <div>
            <span className="text-sm font-medium text-gray-600 mb-2 block">Colors:</span>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className={`w-6 h-6 rounded border-2 ${currentColor === color ? 'border-gray-800' : 'border-gray-300 hover:border-gray-500'}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Pick ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Brush Size */}
          <div>
            <span className="text-sm font-medium text-gray-600 mb-2 block">Brush Size:</span>
            <div className="flex items-center gap-2">
              <input type="range" min="1" max="30" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} className="w-24" />
              <span className="text-sm text-gray-500 w-10">{brushSize}px</span>
            </div>
          </div>

          {/* Current Color */}
          <div>
            <span className="text-sm font-medium text-gray-600 mb-2 block">Current:</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: currentColor }} />
              <span className="text-sm text-gray-500">{currentColor}</span>
            </div>
          </div>

          {/* Clear */}
          <div className="ml-auto">
            <span className="text-sm font-medium text-gray-600 mb-2 block">&nbsp;</span>
            <button onClick={clearCanvas} className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="block w-full h-auto cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      <p className="text-xs text-gray-500 mt-2 text-center">Select a color and brush size, then draw on the canvas.</p>
    </div>
  );
}
