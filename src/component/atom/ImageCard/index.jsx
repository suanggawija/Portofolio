import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className='w-full h-72 bg-white overflow-hidden object-cover rounded-md '>
        <img src={image} alt="" className='w-full' />
    </div>
  )
}

export default ImageCard