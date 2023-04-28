import React from 'react'
import { Heading, ProjectCard } from '../../component'
import { Laravel, Load } from '../../assets'

const Project = () => {
  return (
    <div className='py-32 flex flex-col items-center' id='project'>
      <Heading heading={'Proyek Saya'}/>
      <div className='grid lg:grid-cols-2 gap-8 px-4 lg:px-52 w-full pt-12'>
        <ProjectCard 
          imageCard={Load} 
          heading={'Crud proram laravel'} 
          text={'aplikasi CRUD sederhana dengan menggunakan Laravel'}
          toolImage={Laravel}
          githubLink={'https://fonts.google.com/'}>
        </ProjectCard>
        <ProjectCard 
          imageCard={Load} 
          heading={'Crud proram laravel'} 
          text={'aplikasi CRUD sederhana dengan menggunakan Laravel'}
          toolImage={Laravel}
          githubLink={'https://fonts.google.com/'}>
        </ProjectCard>
      </div>
    </div>
  )
}

export default Project