import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.link} className='transition duration-200 ease-in-out px-4 md:px-10 py-2 md:py-4 bg-main-color font-semibold text-md text-white rounded-md hover:bg-opacity-80' >{props.title}</Link>
  )
}

export default Button