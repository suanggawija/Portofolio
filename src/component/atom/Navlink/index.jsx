import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = (props) => {
  return (
    <Link className='transition duration-75 ease-in-out hover:text-main-color hover:before:block hover:before:absolute hover:before:w-6 hover:before:h-1 hover:before:rounded-full hover:before:-bottom-2 flex justify-center hover:before:bg-main-color relative' to={props.link}>{props.title}</Link>
  )
}

export default NavLink