import React, { useState } from 'react';
import green from "../assets/green.png";
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: 'Start',
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      green:{green}
    },
    {
      name: 'Pro',
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Premium',
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];
  return (
    <div className="md:px-14 p-4 mt-15" id='pricing'>
      <motion.div variants={fadeIn("up",0.1)} initial="hidden" whileInView={"show"}
                                viewport={{once:false,amount:0.5}}  className="text-center">
       
        <h2 className="md:text-5xl font-extrabold text-black mb-2">Here are all our plans</h2>
        <p className="text-gray-500 px-4">
          A simple paragraph is comprised of three major components. The topic sentence, which is often a declarative
          sentence.
        </p>
   
      <div className="flex justify-center my-10">
        <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
          <span className="mr-4 text-xl font-semibold">Monthly</span>
          <div className="relative w-14 h-6 bg-amber-50 rounded-full transition duration-200 ease-in-out">
            <div
              className={`absolute top-0 left-0 w-6 h-6 rounded-full transform transition duration-200 ease-in-out ${
                isYearly ? 'translate-x-8 bg-black' : 'translate-x-0 bg-black'
              }`}
            ></div>
          </div>
          <span className="ml-4 text-xl font-semibold">Yearly</span>
        </label>
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={isYearly}
          onChange={() => setIsYearly(!isYearly)}
        />
     </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
      
        {packages.map((pkg, index) => (
          <motion.div variants={fadeIn("up",0.1)} initial="hidden" whileInView={"show"}
                                viewport={{once:false,amount:0.5}} key={index} className="p-6 border rounded-xl shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-4xl font-extrabold text-black mb-4">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span className="text-sm font-normal text-gray-500">
                /{isYearly ? 'year' : 'month'}
              </span>
            </p>
            <p className="text-gray-500">{pkg.description}</p>
            <ul className=''>
              <li className='flex gap-4 items-center mt-5'>
              <div className=' w-9 rounded-full'>
                <img src={green} alt="" classname=" "/>
             </div>
               Videos of lessons 
              </li>
              <li className='flex gap-4 items-center  mt-3'>
                 <div className=' w-9 rounded-full'>
                <img src={green} alt="" classname="" /></div>
                Homework check 
              </li>
              <li className='flex gap-4 items-center mt-3'>
                <div className=' w-9 rounded-full'>
                <img src={green} alt="" classname="" /></div>
                Additional practition task
              </li>
              <li className='flex gap-3 items-center mt-3'>
                <div className=' w-9 rounded-full'>
                <img src={green} alt="" classname="" /></div> 
               Monthly conferences
              </li>
              <li className='flex gap-3 items-center mt-3'>
                <div className=' w-9 rounded-full'>
                <img src={green} alt="" classname="" /></div>
                Personal advice frm teachers
              </li>
            </ul>
            <div className='w-full max-auto mt-8 flec items-center'>
              <button className='ml-3 px-7 py-4 bg-indigo-800 font-semibold text-white rounded hover:bg-black transition-all duration-300'>Get started</button>
            </div>
           </motion.div>
        ))}
       
      </div>
     
    </div>
  );
};

export default Pricing;
