import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/finalLogo.webp'
import CustBtn from './CustBtn.jsx'

const Nav = (val) => {
  return (
    <>
    <div className="nav w-full bg-white-600 h-[5rem] flex p-5 justify-between px-6 text-[#000] shadow-lg shadow-[#000]-500/50">
        <div className='flex gap-[0.7rem] items-center '>
        <div className="logo w-[3rem] h-[3rem] flex items-center">
            <img src={Logo} alt="logo" className='h-full w-full ' />
        </div>
        <div className='h-full flex flex-col justify-center'>
        <h1 className='leading-6 text-[1.5rem] font-semibold'>Pretrail Booster</h1>
        <h1 className='leading-3 text-sm'>District Court of India</h1>
        </div>
        </div>
        <div className='flex gap-8 items-center font-semibold'>
            <Link className='hover:text-[#1F357F] hover:underline' >Home</Link>
            <Link className='hover:text-[#1F357F] hover:underline' >e-Committee</Link>
            <Link className='hover:text-[#1F357F] hover:underline' >NJDG</Link>
            <Link className='hover:text-[#1F357F] hover:underline' >District Court</Link>
            <Link className='hover:text-[#1F357F] hover:underline' >Contact Us</Link>
            <div className='flex gap-2'>
            <CustBtn val="Login" />
            <CustBtn val="Register" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav