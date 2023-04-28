import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center flex-col gap-3'>
        <span className='text-gray-400 text-4xl'>404 | Pages Not Found</span>
        <p className='text-lg text-gray-400'> Kembali ke halaman
          <Link to={'/'} className='text-main-color font-semibold'>Beranda</Link>
        </p>
    </div>
  )
}

export default NotFound