import Header from '../components/Header'
import React, { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer'
import Canvas from './canvas.jsx'
import Shelly from '../components/Shelly.jsx'
import { useAuth } from '../contexts/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import { saveToGallery } from '../utils/api.js';

import uploadImage from '../assets/uploadImage.svg'
import spark from '../assets/Spark.svg'
import squiggle from '../assets/Squiggle.svg'
import pictureGuy from '../assets/lookingAtPhoto.png'
import bird1 from '../assets/bird1.png'
import bird2 from '../assets/bird2.png'
import star from '../assets/star.png'
import heart from '../assets/heart.png'
import { Commet } from 'react-loading-indicators';


function Start()
{
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [uploadedImage, setUploadedImage] = useState(null); // raw image preview
  const [referenceData, setReferenceData] = useState(null); // response from API containing all image URLs
  const [currentImageType, setCurrentImageType] = useState('original'); // 'original', 'shapes', 'outlines'
  const [isLoading, checkIsLoading] = useState(false);

  // Live feedback state
  const [shellyFeedback, setShellyFeedback] = useState('');
  const [showShelly, setShowShelly] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);

  // Helper function to get current image URL based on selected type
  const getCurrentImageUrl = () => {
    if (!referenceData) return null;
    switch (currentImageType) {
      case 'original':
        return referenceData.originalImageUrl;
      case 'shapes':
        return referenceData.shapeImageUrl;
      case 'outlines':
        return referenceData.outlineImageUrl;
      default:
        return referenceData.originalImageUrl;
    }
  };

  // Live feedback functions
  const handlePeriodicCanvasCheck = async (canvasData) => {
    if (!referenceData || isLoadingFeedback) {
      return;
    }

    setIsLoadingFeedback(true);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

      const requestBody = {
        canvasData,
        referenceId: referenceData.referenceId,
        conversationHistory
      };

      const response = await fetch(`${API_BASE_URL}/live_feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to get live feedback: ${response.status} ${errorText}`);
      }

      const data = await response.json();

      if (data.shouldSpeak && data.feedback) {
        setShellyFeedback(data.feedback);
        setShowShelly(true);

        // Add to conversation history (keep last 5 messages)
        setConversationHistory(prev => [...prev.slice(-4), data.feedback]);
      }
    } catch (error) {
      console.error('Live feedback error:', error);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  const handleCanvasActivity = () => {
    // Reset Shelly when user is actively drawing
    if (showShelly) {
      setShowShelly(false);
    }
  };

  const handleShellyFeedbackComplete = () => {
    setShellyFeedback('');
  };

  // Show Shelly when we have reference data and user is authenticated
  const shouldShowShelly = isAuthenticated && referenceData && !isLoading;

  const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const localPreview = URL.createObjectURL(file);
    setUploadedImage(localPreview);
    checkIsLoading(true);

  try {
    checkIsLoading(true);
    const formData = new FormData();
    formData.append('image', file); // name must match backend expectations

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(`${API_BASE_URL}/upload_ref`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to upload and process image');
    }

    const data = await response.json();
    setReferenceData(data);
    setCurrentImageType('original');

  } catch (error) {
    console.error('Upload error:', error);
  } finally {
    checkIsLoading(false);
  }
};

const handleSaveToGallery = async (imageData) => {
  try {
    const response = await saveToGallery(imageData, "My Drawing");
    console.log('Image saved to gallery:', response);
    // Optionally, show a success message to the user
  } catch (error) {
    console.error('Failed to save image to gallery:', error);
    // Optionally, show an error message to the user
  }
};


  return (
    <>
      <Header />
      <main className="">
        <div className="min-h-screen flex justify-center bg-beige mt-20">
          <div className="text-center relative">
            {!isAuthenticated ? (
              // Authentication required content
              <>
                <img className="absolute left-[60px] animate-tilt-snap-2 -top-24" src={spark} alt="" />
                <p className="font-unkempt text-5xl almost-black max-w-xl mx-auto mb-12 mt-0">
                  Learn to draw any image by breaking it down into its{" "}
                  <span className="awesome-blue">simplest</span> shapes!
                </p>

                <div className="bg-white rounded-4xl p-12 max-w-2xl mx-auto shadow-lg">
                  <h2 className="font-unkempt text-4xl almost-black mb-6">
                    Create an account to get started!
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 font-medium">
                    Sign up to upload images, get AI-powered drawing guides, and track your progress.
                  </p>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => navigate('/sign-up')}
                      className="bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => navigate('/log-in')}
                      className="bg-[#EB9191] hover:bg-awesomeblue text-white font-unkempt text-xl px-6 py-2 rounded-2xl shadow-md transition transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Authenticated user content (existing functionality)
              <>
                {!uploadedImage && (
                  <>
                    <img className="absolute left-[60px] animate-tilt-snap-2 -top-24" src={spark} alt="" />
                    <p className="font-unkempt text-5xl almost-black max-w-xl mx-auto mb-12 mt-0">
                      Learn to draw any image by breaking it down into its{" "}
                      <span className="awesome-blue">simplest</span> shapes!
                    </p>
                  </>
                )}

                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  id="uploadInput"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {!uploadedImage ? (
                  <label htmlFor="uploadInput" className="cursor-pointer inline-block">
                    <img className="w-[900px] h-auto" src={uploadImage} alt="Upload an image" />
                  </label>
                ) : (
                  <div className="flex flex-row gap-8 max-w-[1400px] mx-auto">
                    {/* Reference Image Column */}
                    <div className="flex flex-col !justify-start gap-5 min-w-[400px]">
                      {isLoading ? (
                        <div className="w-[400px] h-[400px] flex flex-col justify-center items-center">
                          <Commet color="#FFFFFF" size="medium" text="" textColor="" />
                          <p className='text-3xl mt-10'>Processing Image...</p>
                        </div>
                      ) : (
                        referenceData && (
                          <>
                            <img
                              className="w-[400px] h-auto block mx-auto"
                              src={getCurrentImageUrl()}
                              alt={`${currentImageType} Image`}
                            />
                            {/* Image cycling controls */}
                            <div className="flex justify-center gap-3 mt-4">
                              <button
                                onClick={() => setCurrentImageType('original')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors font-unkempt ${
                                  currentImageType === 'original'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                Original
                              </button>
                              <button
                                onClick={() => setCurrentImageType('shapes')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors font-unkempt ${
                                  currentImageType === 'shapes'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                Shapes Guide
                              </button>
                              <button
                                onClick={() => setCurrentImageType('outlines')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors font-unkempt ${
                                  currentImageType === 'outlines'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                Outlines Guide
                              </button>
                            </div>
                          </>
                        )
                      )}
                    </div>

                    {/* Canvas Column */}
                    <div className="flex-1">
                      <Canvas
                        referenceData={referenceData}
                        currentImageType={currentImageType}
                        onActivityUpdate={handleCanvasActivity}
                        onPeriodicCheck={handlePeriodicCanvasCheck}
                        onSaveToGallery={handleSaveToGallery}
                        isShellyTalking={showShelly && shellyFeedback !== ''}
                      />
                    </div>

                    {/* Shelly Column */}
                    {shouldShowShelly && (
                      <div className="w-[300px] h-[600px] flex flex-col">
                        <Shelly
                          feedback={shellyFeedback}
                          isVisible={shouldShowShelly}
                          onFeedbackComplete={handleShellyFeedbackComplete}
                        />
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* instructions bar */}
        <div className="flex flex-col h-40 mt-0 bg-sillyyellow text-center justify-center items-center w-full relative">
          <h1 className="font-kavivanar almost-black text-6xl">I N S T R U C T I O N S</h1>
          <img className="absolute bottom-[20px]" src={squiggle} alt="" />
          <img src={star} alt="Star" className="absolute left-[300px] w-24 h-24 animate-tilt-snap-2" />
          <img src={heart} alt="Heart" className="absolute right-[310px] w-24 h-24 animate-tilt-snap-2" />
        </div>

        {/* steps */}
        <div className="flex flex-col min-h-screen justify-center items-center gap-15 mt-20 mb-40">
          <div className="bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center flex flex-col justify-center items-center">
            <h1 className="almost-black font-unkempt text-4xl mb-5">
              1. Upload <span className="awesome-blue">an image</span> of what you want to draw.
            </h1>
            <img className="max-w-1/4 place-self-center" src={pictureGuy} alt="Upload step" />
          </div>

          <div className="bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center flex flex-col justify-center items-center">
            <h1 className="almost-black font-unkempt text-4xl mb-5">
              2. Potara&apos;s AI will trace over the <span className="awesome-blue">basic shapes.</span>
            </h1>
            <img className="max-w-1/4 place-self-center" src={bird1} alt="Tracing step" />
          </div>

          <div className="bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center flex flex-col justify-center items-center">
            <h1 className="almost-black font-unkempt text-4xl mb-5">
              3. Draw those shapes, and upload the finished result to receive{" "}
              <span className="awesome-blue">valuable feedback</span> to improve your drawings!
            </h1>
            <img className="max-w-1/4 place-self-center" src={bird2} alt="Feedback step" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Start;