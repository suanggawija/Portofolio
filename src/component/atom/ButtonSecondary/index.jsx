import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSecondary = (props) => {
  return (
    <Link to={props.link} className='transition duration-200 ease-in-out px-4 lg:px-10 py-2 lg:py-4 bg-white border-solid border-2 border-main-color  font-semibold text-lg text-main-color rounded-md hover:text-white hover:bg-main-color' >{props.title}</Link>
  )
}

export default ButtonSecondary