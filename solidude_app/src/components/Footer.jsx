import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 bg-[#D8DAD3]'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#41b6e6]'>Solidude</h1>
            <p className='text-black py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad laborum inventore necessitatibus hic excepturi dolor mollitia iure reprehenderit saepe quam iste, iusto obcaecati odit, ut nihil asperiores? Iste, unde aliquam!</p>
            <div className='flex md-[75%] my-6'>
                <FaFacebookSquare color='black' className='ml-2'size={30}/>
                <FaInstagram color='black' className='ml-2' size={30}/>
                <FaTwitter color='black' className='ml-2' size={30}/>
            </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <img 
            src={logo}
            className='rounded-full max-w-[200px] h-auto'
            />
            <p className='pt-2 text-[#272838]'>Anilao, Batangas</p>
            <p className='pb-2 text-[#272838]'>Somewhere beside Philip Anne</p>
        </div>
    </div>
  )
}

export default Footer