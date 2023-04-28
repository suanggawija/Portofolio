import React from 'react'

const HeadingCard = (props) => {
  return (
    <h4 className='text-lg font-semibold text-main-color uppercase'>{props.heading}</h4>
  )
}

export default HeadingCard