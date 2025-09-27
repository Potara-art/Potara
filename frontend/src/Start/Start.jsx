import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import uploadImage from '../assets/uploadImage.svg'
import spark from '../assets/Spark.svg'
import squiggle from '../assets/Squiggle.svg'
import pictureGuy from '../assets/lookingAtPhoto.png'
import bird1 from '../assets/bird1.png'
import bird2 from '../assets/bird2.png'
import testBg from '../assets/testBg.svg'

function Start() {

    return(
        <>
            <Header></Header>
            <div className="min-h-screen flex justify-center items-center bg-beige">
                <div className="text-center">
                    <img className="absolute left-[350px]" src={spark} />
                    <p className="font-unkempt text-5xl almost-black max-w-xl mx-auto mb-12 mt-20">
                    Learn to draw any image by breaking it down into its <a className="awesome-blue">simplest</a> shapes!
                    </p>
                    <a href="https://youtu.be/U3HGfwDjX0g?si=IX3h3JMtmM0-tcZ0">
                        <img className="w-[900px] h-auto" src={uploadImage}></img>
                    </a>
                </div>
            </div>
            <div className='flex flex-col h-40 mt-20 bg-sillyyellow text-center justify-center items-center place-content-center w-full'>
                <h1 className='font-kavivanar almost-black text-6xl'>INSTRUCTIONS</h1>
                <img className="absolute -bottom-55" src={squiggle} />
            </div>
            <div className="flex flex-col min-h-screen flex justify-center items-center gap-15 mt-20 mb-40">
                <div className="bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center justify-center items-center" >
                    <h1 className="almost-black font-unkempt text-4xl mb-5">1. Upload <a className="awesome-blue">an image</a> of what you want to draw</h1>
                    <img className="max-w-1/4 place-self-center" src={pictureGuy} />
                </div>
                <div className="bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center justify-center items-center" >
                    <h1 className="almost-black font-unkempt text-4xl mb-5">2. Potara's AI will trace over the <a className="awesome-blue">basic shapes</a> </h1>
                    <img className="max-w-1/4 place-self-center" src={bird1} />
                </div>
                <div className="bg-white h-[400px] w-2/3 rounded-4xl p-8 text-center justify-center items-center" >
                    <h1 className="almost-black font-unkempt text-4xl mb-5">3. Draw those shapes, and upload the finished result to receive <a className="awesome-blue">valuable feedback</a> to improve your drawings!</h1>
                    <img className="max-w-1/4 place-self-center" src={bird2} />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Start