import React, { useState } from 'react'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs'

function Slider() {
    const sliderData=[
        {
            url:"https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            url:"https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            url:"https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ];
  const [slide, setslide]=useState(0) 
  const lenght =sliderData.length

  const preSlide=()=>{
    setslide(slide === lenght -1 ? 0 :slide+1 )
  }
    
  const nextSlide=()=>{
    setslide(slide === 0 ? lenght -1 :slide -1)
  }
  return (
    <div className='max-w-[1240px] mx-auto px-4 relative py-16 flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={preSlide} className='absolute top-[50%] text-3xl text-black cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-black cursor-pointer right-8'/>
      {sliderData.map((item,index) => {
        return(
          <div className={index === slide ? 'opacity-100':'opacity-0' }>
          {index === slide && (<img className='w-screen h-screen  rounded-md ' src={item.url} alt="/"/>)}
          </div>
        )
       
      })}

    </div>

 )
    }
  
export default Slider
