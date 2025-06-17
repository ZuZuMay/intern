import React from 'react'

const Blog = () => {
    const blogs=[
        {id:1,title:"Creating Streamlined Safeguarding Processes with OneRen",image:""},
        {id:2,title:"What are your safeguarding responding and how can you manage them?",image:""},
        {id:3,title:"Revamping the Membership model with triathlon Autstealia",image:""},
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl my-12'>
        <div className='text-center md:w-1/2 max-auto'>
            <h2 className='text-4xl text-black font-bold mb-4 '>Caring is the marketing</h2>
            <p className='text-base text-black mb-8 md:w-3/4 max-auto'>the Nexcent blog is the best place to read about the latest membership insights,trends and more.See who is joining the community,read about how our community are increasing their membership income and lots more</p>
        </div>
    </div>
  )
}

export default Blog