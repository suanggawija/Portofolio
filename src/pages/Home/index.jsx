import React from 'react'
import { Button, CV, Paragraf } from '../../component'
import { Profile } from '../../assets'

const Home = () => {
  return (
    <div className='w-full md:h-screen flex items-center gap-16 px-6 md:px-44 mb-24 md:mb-0' id='home' >
        <div className='md:grid md:grid-cols-3 flex flex-col-reverse'>
            <div className='md:col-span-2 text-center md:text-left md:mt-0 mt-12'>
                <span className='text-xl'>Hai, Perkenalkan Saya</span>
                <h1 className='text-4xl font-bold text-main-color mt-2'>Suangga Wijanatha</h1>
                <div className='my-8'>
                    <Paragraf paragraf={'Hallo semuanya, saya I Putu Gede Suangga Wijanatha , saya tertarik terhadap perkembangan aplikasi website terutama pada bidang fronted dengan menggunakan React JS'}/>
                </div>
                <div className='flex gap-3 md:justify-start justify-center'>
                    <Button title={'Tentang Saya'} link={'/about'}/>
                    <CV/>
                </div>
            </div>
            <div className='flex w-full justify-center items-center md:mt-0 mt-24'>
                <img src={Profile} alt="" className='md:w-60  w-44'/>
            </div>
        </div>
    </div>
  )
}

export default Home