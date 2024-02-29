import React from 'react'
import avatorImg from "../../public/avataaars.svg"
import HeroImage from "../../public/Code typing-bro.svg"

function HeroSection() {
  return (
    <div>
        <div className='text-4xl font-bold text-center mt-56'>
            <h1>FullStack Developer & Open Source Developer</h1>
        </div>
        <div className='text-xl font-semibold text-center mt-10 mb-10'>
            <p>I design and code beautifully simple things, and I love what I do.</p>
        </div>
        <div className='flex flex-1 items-center justify-center'>
            <img src={avatorImg} alt="" />
        </div>
        <div className='flex flex-1 items-center justify-center mt-10'>
            <img src={HeroImage} alt="" width={700} height={700} />
        </div>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-40 mt-[-90px]'>
            <div className='text-center text-4xl font-bold text-white'>
                <h1>Hi, I’m Shubham. Nice to meet you.</h1>
            </div>
            <div className='text-center mt-10 text-white '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio magni numquam expedita!
            </div>
        </div>
    </div>
  )
}

export default HeroSection