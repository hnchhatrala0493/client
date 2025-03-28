import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
        <img src={assets.header_img} alt='' className='w-36 h-36 rounded-full mb-6'/>
        <h1 className='flex items-center gap-2 text-xl sm:text-3xl'>Hey, Developer <img className="w-8 aspect-square" src={assets.hand_wave} alt="" /></h1>
        <h2>Welcome to the App</h2>
    </div>
  )
}

export default Header