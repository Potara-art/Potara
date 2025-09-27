// import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'

import uploadImage from '../assets/uploadImage.svg'
import spark from '../assets/Spark.svg'
import squiggle from '../assets/Squiggle.svg'
import pictureGuy from '../assets/lookingAtPhoto.png'
import bird1 from '../assets/bird1.png'
import bird2 from '../assets/bird2.png'
// import testBg from '../assets/testBg.svg'
import star from '../assets/star.png'
import heart from '../assets/heart.png'

function Start() 
{
  return (
    <>
      <Header />

      {/* Push content below fixed header height (match your header h-20) */}
      <main className="pt-2">
        {/* hero */}
        <div className="min-h-screen flex justify-center items-center bg-beige">
          {/* anchor spark to this box */}
          <div className="text-center relative">
            <img className="absolute left-[60px] animate-tilt-snap-2" src={spark} alt="" />
            <p className="font-unkempt text-5xl almost-black max-w-xl mx-auto mb-12 mt-20">
              Learn to draw any image by breaking it down into its{" "}
              <span className="awesome-blue">simplest</span> shapes!
            </p>
            <a href="https://youtu.be/U3HGfwDjX0g?si=IX3h3JMtmM0-tcZ0">
              <img className="w-[900px] h-auto" src={uploadImage} alt="Tutorial" />
            </a>
          </div>
        </div>

        {/* instructions bar */}
        <div className="flex flex-col h-40 mt-20 bg-sillyyellow text-center justify-center items-center w-full relative">
          <h1 className="font-kavivanar almost-black text-6xl">I N S T R U C T I O N S</h1>

          {/* now these anchor to the yellow bar */}
          <img className="absolute bottom-[20px]" src={squiggle} alt="" />

          {/* nudge star/heart where you want; these are just examples */}
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