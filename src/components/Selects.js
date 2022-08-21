import React from 'react'
import pic1 from '../assets/image.jpg';
import pic2 from '../assets/img2.jpg';
import pic3 from '../assets/img3.jpg';
import pic4 from '../assets/img4.jpg';
import pic5 from '../assets/img5.jpg';
import pics from "../assets/beach.jpg";
import SelectCards from './SelectCards'

function Selects() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
  
   <SelectCards bg={pic1} text="bora bora"/>
   <SelectCards bg={pic2} text="Maldives"/>
   <SelectCards bg={pic3} text="Antigua"/>
   <SelectCards bg={pic4} text="Cozumel"/>
   <SelectCards bg={pic5} text="Jamaica"/>
   <SelectCards bg={pics} text="Key West"/>
    </div>
  )
}

export default Selects