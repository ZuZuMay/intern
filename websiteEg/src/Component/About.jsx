import React from 'react'
import about from '../assets/about.png'
import schedule from '../assets/schedule.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () => {
  return (
    <div className='md:x-14 p-4 space-y-10 ' id='about'>
        <div className='flex flex-rol justify-between items-center gap-10 mt-18'>
            <motion.div 
            variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"}
                                viewport={{once:false,amount:0.5}} >
            <img src={about} alt="" className='w-130 h-80'/>
            </motion.div>
          <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"}
                                viewport={{once:false,amount:0.5}} >
            <h2 className='text-4xl font-bold text-black mb-5 leading-normal'>We have improving our product You can practice at my time convenient for ypo<span className='text-shadow-fuchsia-500'>for many years.</span></h2>
            <p className='text-gray-500 text-xl mb-7'>A good example of a paragraph contains a topic conclusion.There are many different kinds of animals that live in china.</p>
            <button className='ml-3 px-7 py-4 bg-indigo-800 font-semibold text-white rounded hover:bg-black transition-all duration-300'>Get Started</button>
          </motion.div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 mt-10'>
            <motion.div 
            variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"}
                                viewport={{once:false,amount:0.5}} >
            <img src={schedule} alt="" className='w-80 h-70'/>
            </motion.div>
          <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"}
                                viewport={{once:false,amount:0.5}} >
            <h2 className='text-4xl  font-bold text-black leading-normal'>You can practice at my <span className='text-shadow-fuchsia-500'>time convenient for you.</span></h2>
            <p className='text-gray-500 text-xl mb-7'>A good example of a paragraph contains a topic conclusion.There are many different kinds of animals that live in china.</p>
            <button className='ml-3 px-7 py-4 bg-indigo-800 font-semibold text-white rounded hover:bg-black transition-all duration-300'>Get Started</button>
         </motion.div>
       </div>
    </div>
  )
}

export default About