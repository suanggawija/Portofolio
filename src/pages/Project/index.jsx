import React from 'react'
import { Heading, ProjectCard } from '../../component'
import { Laravel, Load } from '../../assets'

const Project = () => {
  return (
    <div className='pt-20 md:py-32 flex flex-col items-center' id='project'>
      <Heading heading={'Proyek Saya'}/>
      <div className='grid md:grid-cols-2 gap-8 px-4 md:px-52 w-full pt-6 md:pt-12'>
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