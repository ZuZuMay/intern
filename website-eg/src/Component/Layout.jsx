import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
const Layout = () => {
  return (
    <div className=''>
      <div className='flex flex-row items-center gap-20 font-bold text-2xl'>
        <img src={logo} alt="" className='w-30'/>
        <Link to='/'>Home</Link>
        <Link to='/service'>Service</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/test'>Testimonial</Link>
         <div className='space-x-12 hidden lg:flex items-center'>
              <a href='/' className=' hidden lg:flex items-center text-emerald-500 hover:text-g'>Login</a>
              <button className='bg-emerald-500 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-600'>Sign up</button>
          </div>
      </div>
        <div> <Outlet/></div>
    </div>
  )
}

export default Layout