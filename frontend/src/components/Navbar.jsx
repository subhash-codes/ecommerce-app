<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { NavLink, Link} from 'react-router-dom'
const Navbar = () => {
  
  const [visible, setVisible] = useState(false)


  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo} className='w-30' alt="" /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-grey-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'> 
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> 

            <NavLink to='/collection' className='flex flex-col items-center gap-1'> 
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> 

            <NavLink to='/about' className='flex flex-col items-center gap-1'> 
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> 

            <NavLink to='/contact' className='flex flex-col items-center gap-1'> 
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink> 
        </ul>

        <div className=" flex item-center gap-6">
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

          <div className="group relative">
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className="relative ">
          <img src={assets.cart_icon} className='w-5 min-w-5' />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
          </Link>

          <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

          {/* ------ SIDEBAR MENU FOR SMALL SCREEN ------- */}

          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
              <div onClick={()=> setVisible(false)} className="flex item-center gap-4 p-3 cursor-pointer">
                <img src={assets.dropdown_icon} onClick={()=> setVisible(false)} className='h-4 rotate-180' alt="" />
                <p>Back</p>
              </div>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/'}>HOME</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/collection'}>COLLECTION</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/about'}>ABOUT</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/contact'}>CONTACT</NavLink>
            </div>
          </div>
        </div>
>>>>>>> 22643e8afa940b60f29613b014417e2ac6e2c3c7
    </div>
  )
}

export default Navbar