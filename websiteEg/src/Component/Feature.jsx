import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import feature from '../assets/feature.png';

const features = [
  { title: "Convenient Schedule", image: feature },
  { title: "Expert Instructors", image: feature },
  { title: "Affordable Plans", image: feature },
];

const Feature = () => {
  return (
    <div className=' md:px-10' id='feature'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-8 mt-24'>
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className='lg:w-1/4'
        >
          <h3 className='text-4xl text-black font-bold mb-3 '>
            Why we are better than others
          </h3>
          <p className=' text-xl'>
            A sample paragraph is comprised of these major components. The first sentence, which is often a declarative.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className='w-full lg:w-3/4'
        >
          <div className='grid md:grid-cols-3 items-start md:gap-10'>
            {features.map((item, index) => (
              <div
                key={index}
                className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-xl p-5 items-center flex justify-center hover:-translate-y-10 transition-all duration-200 cursor-pointer'
              >
                <div>
                  <img src={item.image} alt="" />
                  <h5 className='text-2xl font-semibold text-black px-5 text-center mt-5'>
                    {item.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
