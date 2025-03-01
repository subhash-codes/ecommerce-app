import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className="">
            <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
            <p className="font-semibold">Esy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
    </div>
  )
}

export default OurPolicy