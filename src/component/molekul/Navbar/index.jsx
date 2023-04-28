import React from 'react'
import { Logo, Translite, Github, Moon } from '../../../assets'
import { NavLink } from '../../atom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-32 py-6 justify-between items-center fixed top-0 right-0 left-0 bg-white'>
        <Link to={'/'}><img src={Logo} alt="logo" /></Link>
            <div className='grid grid-flow-col gap-10 justify-center items-center'>
                <NavLink title={'Home'} link={"/"}/>
                <NavLink title={'About'} link={"/about"}/>
                <NavLink title={'Project'} link={"/project"}/>
                <div className="grid grid-flow-col gap-6 justify-center items-center">
                    <NavLink title={<img src={Translite} alt="" />}  link={'/'}/>
                    <NavLink title={<img src={Moon} alt="" />}  link={'/'}/>
                    <a target="_blank" href="https://github.com/suanggawija">
                      <NavLink title={<img src={Github} alt="" />} />
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Navbar