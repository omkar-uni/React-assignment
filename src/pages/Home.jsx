import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-end gap-7 h-screen w-full px-7'>
        <div className='flex flex-col gap-2'>

        <h1 className='text-2xl text-gray-800 font-bold'>Welcome to PopX</h1>
        <p className='text-gray-600 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form className='flex flex-col gap-4 pb-7'>
            <Link to={"/signup"} className='bg-[#6C25FF] py-3  rounded-lg text-white font-bold flex justify-center items-center'>Create Account</Link>
            <Link to={"/login"}  className='bg-[#CEBAFB] py-3 rounded-lg text-gray-950 font-bold flex justify-center items-center'>Already Register? Login</Link>
        </form>
    </div>
  )
}

export default Home