import React from 'react'
import blog from '../assets/images.png'
const Home = () => {
  return (
    <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8'>
 
      <div>
        <img src={blog} alt='' className='w-150 h-80'/>
      </div>
        <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold mb-4 text-gray-600 md:w-3/4 leading-snug line-clamp-1 ' >Lessons and insights <span className='text-emerald-500 line-clamp-1
             leading-snug'>from 8 years</span></h1>
             <p className='text-gray-700 text-xl'>Where to grow your business as a photographer:site or social media?</p>
            <button className='px-7 py-2 bg-emerald-500 text-white rounded hover:bg-gray-500 transition-all duration-300 hover:translate-y-3 mt-7 '>Register</button>
        </div>
    </div>
  )
}

export default Home