import React from 'react'

const FeedbackCard = ({ content, name, title, img }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 hover:scale-105 duration-100 bg-[#D8DAD3] shadow-md'>
        <p className='font-normal italic text-[18px] leading-[32px] my-10'>{`"${content}"`}</p>
        <div className='flex flex-row'>
            <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
            <div className='flex flex-col ml-4'>
                <h4 className='font-semibold text-[20px] leading-[32px]'>{name}</h4>
                <p className='font-normal text-[16px] leading-[24px] text-[#272838]'>{title}</p>
            </div>
        </div>
    </div>
)

export default FeedbackCard