import React from 'react'
import { Github, Logo } from '../../../assets'

const Footer = () => {
  return (
    <div className='flex w-full justify-center'>
         <div className='flex flex-col items-center text-gray-400 py-8 border-t-2 w-2/3'>
            <div className="flex gap-5 items-center mb-3 ">
                <a href=""><img src={Logo} alt="" className='h-6' /></a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Project</a>
                <a href="">Contact</a>
                <a href=""><img src={Github} alt="" className='h-5' /></a>
            </div>
            <span className='text-lg'>@2023 Suangga Wijanatha | Dibuat menggunakan React Js + Vite</span>
        </div>
    </div>
   
  )
}

export default Footer