import React from 'react';
import logo from '../assets/logo.png';
import fb from '../assets/fb.png';
import instrgram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
//import LinkedIn from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div className='bg-black text-white md:px-14 px-4 py-10 max-w-screen-2xl mx-auto mt-10'>
      <div className='my-5 flex flex-col lg:flex-row justify-between gap-10'>
        {/* Left Side */}
        <div className='lg:w-1/3 space-y-8'>
            <img src={logo} alt="Logo" className='w-30' />
          <p className='line-clamp-3'>
            A paragraph is composed of three major components. The first sentence, which is often a declarative sentence, is called the topic sentence.
          </p>
          <div>
            <input
              type="email"
              placeholder='Your email'
              className='bg-fuchsia-900 py-2 px-4 rounded-md focus:outline-none'
            />
            <input
              type='submit'
              value='Subscribe'
              className='px-4 py-2 bg-fuchsia-600 rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300'
            />
          </div>
        </div>

        {/* Right Side */}
        <div className='lg:w-2/3 grid md:grid-cols-3 gap-8'>
          <div className='space-y-4'>
            <h4 className='text-xl font-semibold'>Platform</h4>
            <ul>
              <li><a href="/" className='block hover:text-gray-300'>Overview</a></li>
              <li><a href="/" className='block hover:text-gray-300'>Feature</a></li>
              <li><a href="/" className='block hover:text-gray-300'>About</a></li>
              <li><a href="/" className='block hover:text-gray-300'>Pricing</a></li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='text-xl font-semibold'>Help</h4>
            <ul>
              <li><a href="/" className='block hover:text-gray-300'>How does it work?</a></li>
              <li><a href="/" className='block hover:text-gray-300'>Where to ask questions?</a></li>
              <li><a href="/" className='block hover:text-gray-300'>How to play?</a></li>
              <li><a href="/" className='block hover:text-gray-300'>What is needed for this?</a></li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='text-xl font-semibold'>Contact</h4>
            <p className='hover:text-gray-300'>(021) 1234-567-890</p>
            <p className='hover:text-gray-300'>(021) 9876-543-210</p>
          </div>
        </div>
      </div>

      <hr className='border-gray-700' />

      {/* Bottom */}
      <div className='flex flex-col md:flex-row gap-8 justify-between items-center mt-8'>
        <p>© XYZ 2024–2025. All rights reserved.</p>
        <div className='flex items-center space-x-5'>
          <img src={fb} alt="Facebook" className='w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300' />
          <img src={instrgram} alt="Instagram" className='w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300' />
          <img src={Twitter} alt="Twitter" className='w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300' />
          {/*<img src={LinkedIn} alt="LinkedIn" className='w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300' /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
