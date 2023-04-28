import React from 'react'
import { Logo, Translite, Github, Moon } from '../../../assets'
import { NavLink } from '../../atom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='z-50 flex px-6 md:px-32 py-6 justify-between items-center fixed top-0 right-0 left-0 bg-white'>
          <Link to={'/'}><img src={Logo} alt="logo" /></Link>
              <div className='grid grid-flow-col gap-10 justify-center items-center'>
                  <div className='hidden md:block'> <NavLink title={'Home'} link={"/"}/> </div>
                  <div className='hidden md:block'><NavLink title={'About'} link={"/about"}/></div>
                  <div className='hidden md:block'><NavLink title={'Project'} link={"/project"}/></div>
                  <div className="grid grid-flow-col gap-4 md:gap-6 justify-center items-center">
                      <NavLink title={<img src={Translite} alt="" />}  link={'/'}/>
                      <NavLink title={<img src={Moon} alt="" />}  link={'/'}/>
                      <NavLink title={<img src={Github} alt="" />}  link={'https://github.com/suanggawija'}/>
                  </div>
              </div>
      </div>
      <div className='z-50 md:hidden  flex justify-center items-center w-full gap-6 bottom-0 pb-12 pt-2 bg-white fixed shadow-md border-t-2'>
          <div className='py-2 px-4  flex justify-center items-center'> <NavLink title={'Home'} link={"/"}/> </div>
          <div className='py-2 px-4'><NavLink title={'About'} link={"/about"}/></div>
          <div className='py-2 px-4'><NavLink title={'Project'} link={"/project"}/></div>
      </div>
    </>
  )
}

export default Navbar