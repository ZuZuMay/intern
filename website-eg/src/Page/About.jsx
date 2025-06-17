import React from 'react';
import about from '../assets/about.png';
import member from '../assets/member.png';
import group from '../assets/group1.png';
import booking from '../assets/booking.png';
import payment from '../assets/pay.png';

const About = () => (
  <div>
    <div className='px-3 lg:px-14 max-w-screen-2xl mx-auto my-8'>
      <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
        <div>
          <img src={about} alt='About illustration' className='w-90 h-90' />
        </div>
        <div className='md:w-3/5 mx-auto'>
          <h2 className='text-4xl font-bold mb-4 md:w-4/5'>
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className='md:w-3/4 text-base mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem, sed porta nulla.
            Nullam mattis tristique iaculis.
          </p>
          <button className='bg-emerald-600 text-white cursor-pointer p-4 rounded-2xl'>
            Learn More
          </button>
        </div>
      </div>

      <div className='px-3 lg:px-14 max-w-screen-2xl mx-auto bg-neutral-100 py-16 mt-15'>
      <div>
        <div className=' flex flex-row justify-center'>
          <h2 className='text-4xl font-bold mb-4 line-clamp-1'>
            Helping a local<br /><span className='text-green-500 line-clamp-1'>business reinvent itself</span>
          </h2>
        </div>
        <div className='flex flex-row justify-center text-2xl'>
          <p className='  mt-7 line-clamp-1'>We reached here with our hard work and dedication.</p>
        </div>
      </div>

        <div className='flex flex-row justify-around gap-8 mt-12'>
 
          <div className='space-y-4 flex items-center '>
            <img src={member} alt='Member icon' className='w-25' />
            <div>
              <h4 className='text-2xl font-bold'>2,234,455</h4>
              <p>Members</p>
            </div>
          </div>
          <div className='space-y-4 flex items-center gap-3'>
            <img src={group} alt='Group icon' className='w-32'/>
            <div>
              <h4 className='text-2xl font-bold'>4,555,455</h4>
              <p>Clubs</p>
            </div>
          </div>

          <div className='space-y-4 flex items-center  '>
            <img src={booking} alt='Booking icon' className='w-35' />
            <div>
              <h4 className='text-2xl font-bold'>8,995,455</h4>
              <p>Bookings</p>
            </div>
          </div>

          <div className='space-y-4 flex items-center '>
            <img src={payment} alt='Payment icon' className='w-35 h-25'/>
            <div>
              <h4 className='text-2xl font-bold'>1,555,455</h4>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
