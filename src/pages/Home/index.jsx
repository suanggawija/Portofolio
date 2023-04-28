import React from 'react'
import { Button, CV, Paragraf } from '../../component'
import { Profile } from '../../assets'

const Home = () => {
  return (
    <div className='w-full h-screen flex items-center gap-16 px-12 lg:px-44' id='home' >
        <div className='grid lg:grid-cols-3'>
            <div className='lg:col-span-2 text-center lg:text-left lg:mt-0 mt-24'>
                <span className='text-xl'>Hai, Perkenalkan Saya</span>
                <h1 className='text-4xl font-bold text-main-color mt-2'>Suangga Wijanatha</h1>
                <div className='my-8'>
                    <Paragraf paragraf={'Hallo semuanya, saya I Putu Gede Suangga Wijanatha , saya tertarik terhadap perkembangan aplikasi website terutama pada bidang fronted dengan menggunakan React JS'}/>
                </div>
                <div className='flex gap-3'>
                    <Button title={'Tentang Saya'} link={'/about'}/>
                    <CV/>
                </div>
            </div>
            <div className='flex w-full justify-center items-center lg:mt-0 mt-24'>
                <img src={Profile} alt="" className='w-60 '/>
            </div>
        </div>
    </div>
  )
}

export default Home