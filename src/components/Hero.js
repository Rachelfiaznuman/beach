import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import pic from '../assets/img.jpg'

function Hero() {
  return (
    <>
    <div className='w-full h-screen relative'>
     <img className='w-full h-screen' src={pic} alt=''/>
     <div className='absolute w-full h-screen top-0 left-0 bg-gray-900/30 '></div>
     <div className='absolute w-full h-full top-0 flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations WorldWide</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto border p-1
        rounded-md text-black bg-gray-100/90'>
            <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder="Search Destination"/>
            </div>
            <div>
                <button><AiOutlineSearch size={20} className="icon" style={{color:'#ffffff'}}/></button>
            </div>
        </form>
     </div>
    </div>
    </>
  )
}

export default Hero