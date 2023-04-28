import React from 'react'

const SkillBox = ({image}) => {
  return (
    <div className='w-full flex justify-center'>
      <img src={image} alt="" className='lg:p-10 p-3 bg-white drop-shadow-md rounded-md ' />
    </div>
  )
}

export default SkillBox