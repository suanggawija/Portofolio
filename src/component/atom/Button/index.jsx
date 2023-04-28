import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title, link}) => {
  return (
    <Link to={link} className='transition duration-200 ease-in-out px-4 lg:px-10 py-2 lg:py-4 bg-main-color font-semibold text-lg text-white rounded-md hover:bg-opacity-80' >{title}</Link>
  )
}

export default Button