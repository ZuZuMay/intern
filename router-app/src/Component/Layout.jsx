import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 h-[50px] bg-red-200 ">
            <Link to="/">
               <button className='bg-blue-300 rounded-2xl p-2 px-6 font-serif'>
                 HomePage
               </button>
            </Link>
            <Link to="/contact">
            <button className='bg-blue-300 rounded-2xl p-2 px-6 font-serif'>
                 ContactPage
               </button>
            </Link>
            <Link to="/todo">
            <button className='bg-blue-300 rounded-2xl p-2 px-6 font-serif'>
                 ToDoPage
               </button></Link>
      </div>
      <div className="pt-70 pb-70 bg-cyan-200 font-serif font-bold">
          <Outlet/>
      </div>
    </>
  )
}

export default Layout