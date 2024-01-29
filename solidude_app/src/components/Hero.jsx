import React from 'react'
import { ReactTyped } from "react-typed"


const Hero = () => {


  return (
    <div className='hero-container'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
          <p className='font-bold p-2'>Welcome to Paradise</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>This is your getaway</h1>
          <div className='flex justify-center items-center '>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>A weekend for</p>
              <ReactTyped
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['fun', 'diving', 'even more fun']} 
              typeSpeed={40} 
              backSpeed={50}
              loop
              />
          </div>
          <p className='md:text-2xl text-xl font-bold'>
              The best diving spot in Anilao, Batangas
          </p>
        </div>
    </div>
  )
}

export default Hero