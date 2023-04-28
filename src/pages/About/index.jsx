import React from 'react'
import { Button, CV, Heading, Paragraf, SkillBox } from '../../component'
import { Bootstrap, Figma, Html, Javascript, Php, Profile, Css, Tailwind, ReactIcon, Laravel} from '../../assets'

const About = () => {
  return (
    <>
        <div className='lg:h-screen flex flex-col pt-32 items-center' id='about'>
            <Heading heading={'Teantang Saya'}/>
            <div className='py-8'><img src={Profile} alt="" className='w-48' /></div>
            <div className='lg:w-7/12 w-10/12 pt-6 pb-12 text-center'>
                <Paragraf paragraf={'Hallo semuanya, saya I Putu Gede Suangga Wijanatha, orang orang memanggil saya Suangga.  Saya berumur 20 tahun dan kini tinggal di Denpasar Bali. Saya merupakan mahasiswa dari Instutut Bisnis Dan Teknologi Indonesia. Saya suka dalam melakukan eksplorasi terhadap perkembangan aplikasi website terutama pada bidang fronted dengan menggunakan React JS dan sampai sekarang terus belajar untuk mendalami ilmu saya.'}/>
            </div>
            <div className='flex gap-3'>
                <Button title={'Hubungi Saya'}/>
                <CV/>
            </div>
        </div>
        <div className='lg:h-screen text-center flex flex-col items-center justify-center pt-32 pb-24 lg:pb-0 lg:pt-0'>
            <Heading heading={'Keahlian Saya'}/>
            <div className='grid lg:grid-cols-5 grid-cols-3 gap-3 lg:gap-8 px-12 lg:px-52 pt-12'>
                <SkillBox image={Html}/>
                <SkillBox image={Css}/>
                <SkillBox image={Javascript}/>
                <SkillBox image={Php}/>
                <SkillBox image={Figma}/>
                <SkillBox image={Bootstrap}/>
                <SkillBox image={Tailwind}/>
                <SkillBox image={ReactIcon}/>
                <SkillBox image={Laravel}/>
            </div>
        </div>
    </>
  )
}

export default About