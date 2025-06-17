import React from 'react'
import banana from '../assets/banana.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Banner = ({banana,heading,subheading,btn1,btn2}) => {
  return (
    <div>
         <div className='gradientBy rounded-xl rounded-br-[80px] px-5 py-6 mt-5 mb-0 '>
                <div className='flex justify-between items-center gap-6 '>
                     <motion.div variants={fadeIn("right",0.1)} initial="hidden" whileInView={"show"}
                    viewport={{once:false,amount:0.5}}>
                    <img src={banana} alt="" className='lg:h-[386px]'/>
                    </motion.div>
                     <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"}
                    viewport={{once:false,amount:0.5}} className='md:w-3/5 '>
                       <h2 className='md:text-5xl font-bold text-white mb-4 '>{heading}</h2>
                        <p className='text-amber-50 text-2xl mb-8'>{subheading}</p>
                        <div>
                          <button className='ml-3 px-7 py-4 bg-indigo-800 font-semibold text-white rounded hover:bg-black transition-all duration-300'>{btn1}</button>
                          <button className=' py-4 px-7 bg-indigo-800 font-semibold text-white rounded hover:bg-black transition-all duration-300'>{btn2}</button>
                       </div> 
                     </motion.div>
                    
                </div>
            </div>
    </div>
  )
}
export default Banner