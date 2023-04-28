import React from 'react'

const ImageCard = (props) => {
  return (
    <div className='w-full h-72 bg-white overflow-hidden object-cover rounded-md '>
        <img src={props.image} alt="" className='w-full' />
    </div>
  )
}

export default ImageCard