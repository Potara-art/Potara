import Header from '../components/Header'
import React, { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer'
import Canvas from './canvas.jsx' // <-- Capitalize to match the file on case-sensitive systems

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
  const [uploadedImage, setUploadedImage] = useState(null); // raw image preview
  const [processedImage, setProcessedImage] = useState(null); // response from API

  const [isLoading, checkIsLoading] = useState(false);
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

    const response = await fetch('processedImageUrl', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload and process image');
    }

    const data = await response.json();
    setProcessedImage(data.processedImageUrl);

  } catch (error) {
    console.error('Upload error:', error);
  }
};


  return (
    <>
      <Header />
      <main className="">
        <div className="min-h-screen flex justify-center bg-beige mt-20">
          <div className="text-center relative">
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
              <div className="flex flex-row gap-15">
                <div className="flex flex-col !justify-start gap-5">
                  {isLoading ? (
                    <div className="w-[520px] h-[520px] flex flex-col justify-center items-center">
                      <Commet color="#FFFFFF" size="medium" text="" textColor="" />
                      <p className='text-4xl mt-10'>Processing Image...</p>
                    </div>
                  ) : (
                    processedImage && (
                      <img
                        className="w-[520px] h-auto block ml-0"
                        src={processedImage}
                        alt="Processed Image"
                      />
                    )
                  )}
                </div>
                <Canvas></Canvas>
              </div>
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