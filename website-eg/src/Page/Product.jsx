import React from 'react'

const Product = () => {
  return (
    <div><div className='px-3 lg:px-14 max-w-screen-2xl mx-auto my-8'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
            <div>
              <img src={about} alt='About illustration' className='w-90 h-90' />
            </div>
            <div className='md:w-3/5 mx-auto'>
              <h2 className='text-4xl font-bold mb-4 md:w-4/5'>
                How to design your site footer like we did
              </h2>
              <p className='md:w-3/4 text-base mb-8'>
               Done a eros justo.Fusce egestas trustuque ultruces.Nam tempor ,augue nec tincidunt molestie,massa nunc varius arcu,at scelerisqus slit erat a magna.Donec quis erat at scelerisqu elit erat a magna.Donec quis erat at libero ultrices mollis.In the habitasse platea sictums.Vivaum vehicle leo dui,at porta nisi facilities finibue.
              </p>
              <button className='bg-emerald-600 text-white cursor-pointer p-4 rounded-2xl'>
                Learn More
              </button>
            </div>
          </div>
          <div className='px-3 lg:px-14 max-w-screen-2xl mx-auto bg-neutral-100 py-16 mt-15'>

            <div className=' md:w-1/3'>
            </div>
              <div className='space-y-4 flex items-center gap-3'>
                <img src={com1} alt='' className=' cursor-pointer'/>
                <img src={com2} alt='' className=' cursor-pointer'/>
                <img src={com3} alt='' className=' cursor-pointer'/>
                <img src={com4} alt='' className=' cursor-pointer'/>
                <img src={com5} alt='' className=' cursor-pointer'/>
                <img src={com6} alt='' className=' cursor-pointer'/>
                <div className='flex items-center gap-8'>
                  <a href='/' className='font-bold text-green-400 hover:text-white'>Meet all customers</a>
                </div>
              </div>
          </div>
        </div>
        </div>
  )
}

export default Product