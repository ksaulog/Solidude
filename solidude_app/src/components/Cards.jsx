// Put global styles pls...

import React from 'react'
import dive from '../assets/dive.jpg'
import dine from '../assets/dine.jpg'
import bed from '../assets/bed.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <img 
                 src={bed}
                 className='w-20 mx-auto mt-[-3rem] bg-white'
                 alt='bed'
                />
                <h2 className='text-2xl font-bold text-center py-8'>Rooms</h2>
                <p className='text-center text-3xl font-bold'>P1998/night</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Included:</p>
                    <p className='py-2 border-b mx-8'>Meals</p>
                    <p className='py-2 border-b mx-8'>Drinks</p>
                    <p className='py-2 border-b mx-8'>Entertainment</p>
                </div>
                <button className='bg-[#41b6e6] text-white rounded-md font-medium w-[200px] my-6 px-6 py-3'>Book</button>
            </div>

            <div className='w-full items-center shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-100'>
                <img 
                 src={dive}
                 className='w-24 mx-auto mt-[-3rem] bg-white'
                 alt='dive'
                />
                <h2 className='text-2xl font-bold text-center py-8'>Dive Plan</h2>
                <p className='text-center text-3xl font-bold'>P6000/dive</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Included:</p>
                    <p className='py-2 border-b mx-8'>Boat</p>
                    <p className='py-2 border-b mx-8'>Tanks</p>
                    <p className='py-2 border-b mx-8'>DM Fee</p>
                </div>
                <button className='text-white bg-[#272838] rounded-md font-medium w-[200px] my-6 px-6 py-3'>View Packages</button>
            </div>

            <div className='w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <img 
                 src={dine}
                 className='w-20 mx-auto mt-[-3rem] bg-white'
                 alt='dine'
                />
                <h2 className='text-2xl font-bold text-center py-8'>Dine</h2>
                <p className='text-center text-3xl font-bold'>P500/head</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>3 Course Meal:</p>
                    <p className='py-2 border-b mx-8'>Rice</p>
                    <p className='py-2 border-b mx-8'>Ulam</p>
                    <p className='py-2 border-b mx-8'>Unli-drinks</p>
                </div>
                <button className='bg-[#41b6e6] text-white rounded-md font-medium w-[200px] my-6 px-6 py-3'>Check Menu</button>
            </div>
        </div>
    </div>
  )
}

export default Cards