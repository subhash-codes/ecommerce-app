import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-30' alt="" />
        <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
            <NavLink className='flex flex-col items-center gap-1'> 
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-grey-700'/>
            </NavLink> 
        </ul>
    </div>
  )
}

export default Navbar