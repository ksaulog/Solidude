// Fix picture fitting

import React, { Component } from 'react';
import Slider from 'react-slick';
import { carousel1, carousel2, carousel3 } from '../assets'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'transparent' }}
        onClick={onClick}
      />
    );
}

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

  return (
    <div className='max-w-[1140px] container mx-auto px-4'>
        <div className='bg-[#272838]'>
            <Slider {...settings}>
              <div className='w-full max-h-[400px]'>
                  <img src={carousel1} alt='carousel1' className='object-contain w-full h-auto'/>
              </div>
              <div className='w-full max-h-[400px]'>
                  <img src={carousel2} alt='carousel2' className='object-contain w-full h-auto'/>
              </div>
              <div className='w-full max-h-[520px]'>
                  <img src={carousel3} alt='carousel3' className='object-contain w-full h-auto'/>
              </div>
            </Slider>
        </div>
    </div>
  )
}

export default Carousel