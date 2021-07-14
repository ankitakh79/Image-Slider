import React, { useState } from 'react'
import SliderData from './SliderData'
import * as FaIcons from 'react-icons/fa'


function Slider({slides}) {
    const [current,setCurrent]=useState(0)
    const length = slides.length;


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)
    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
        <FaIcons.FaArrowCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaIcons.FaArrowCircleRight className='right-arrow' onClick={nextSlide}/>
        
           {SliderData.map((slide, index)=>{
               return (
                   <div 
                   className={index === current ? 'slide active' : 'slide'} key={index}>
                   {index === current && (<img className='img' src={slide.img} key={index} alt='images'></img>)}</div>
               )
               
                   
           })}
        </section>
    )
}

export default Slider
