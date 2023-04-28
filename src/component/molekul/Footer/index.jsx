import React from 'react'
import { Github, Logo } from '../../../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex w-full justify-center'>
         <div className='flex flex-col items-center text-gray-400 pt-8 pb-28 md:py-8 border-t-2 w-11/12 text-center md:w-2/3'>
            <div className="flex gap-5 items-center mb-3 ">
              <Link to={'/'}><img src={Logo} alt="" className=' hidden md:block h-6' /></Link>
              <Link to={'/'}>Home</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/project'}>Project</Link>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'https://github.com/suanggawija'}><img src={Github} alt="" className='h-5'/></Link>
            </div>
            <span className='text-sm md:text-md'>@2023 Suangga Wijanatha | Dibuat menggunakan React Js + Vite</span>
        </div>
    </div>
   
  )
}

export default Footer