import React from 'react'

const Newsletter = () => {

  return (
    <div className='w-full py-16 px-4 bg-[#272838]'>
        <div className='text-white max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want updates on availability or discounts?</h1>
                <p>Sign up to our newsletter and get the best deals</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-column sm:flex-row items-center justify-between w-full'>
                    <input 
                    type='email'
                    placeholder='Enter Email'
                    className='p-3 flex w-full rounded-md text-black'
                    />
                    <button className='bg-[#41b6e6] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p>We respect your privacy.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter