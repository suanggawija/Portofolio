import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSecondary = ({title, link}) => {
  return (
    <Link to={link} className='transition duration-200 ease-in-out px-10 py-4 bg-white border-solid border-2 border-main-color  font-semibold text-lg text-main-color rounded-md hover:text-white hover:bg-main-color' >{title}</Link>
  )
}

export default ButtonSecondary