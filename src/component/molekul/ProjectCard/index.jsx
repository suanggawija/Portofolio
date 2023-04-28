import React from 'react'
import { ImageCard , HeadingCard } from '../../atom'
import { Github} from '../../../assets'

const ProjectCard = (props) => {
  return (
    <div className='w-full  grid lg:grid-cols-2 gap-3  bg-white p-3 drop-shadow-md rounded-md '>
          <ImageCard image={props.imageCard}/>
          <div className='w-full flex flex-col py-5'>
            <HeadingCard heading={props.heading}/>
            <p className='py-3 text-gray-600'>{props.text}</p>
            <p>Tools :</p>
            <div className='pt-2 pb-9 lg:pb-0 flex gap-4'>
              <div className='w-8 h-8'><img src={props.toolImage} alt="tool-image" /></div>
              <div className='w-8 h-8'><img src={props.toolImage} alt="tool-image" /></div>
              <div className='w-8 h-8'><img src={props.toolImage} alt="tool-image" /></div>
            </div>
            <a href={props.githubLink} target="_blank" className='mt-auto flex gap-2 border-t-2 border-blue-500 p-3 justify-center'>
              <img src={Github} alt="github" />Github
            </a>
          </div>
        </div>
  )
}

export default ProjectCard