import React from 'react'

const SkillBox = (props) => {
  return (
    <div className='w-full flex justify-center'>
      <img src={props.image} alt="" className='lg:p-10 p-3 bg-white drop-shadow-md rounded-md ' />
    </div>
  )
}

export default SkillBox