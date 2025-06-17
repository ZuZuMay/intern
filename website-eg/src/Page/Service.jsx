import React from 'react'
import com1 from '../assets/company1.png'
import com2 from '../assets/company2.png'
import com3 from '../assets/company3.png'
import com4 from '../assets/company4.png'
import com5 from '../assets/company5.png'

const Service = () => {
  const services=[
    {id:1,title:"Membership Organisation" ,description:"Our membership menagement software prvides full automation of membersjip and payments",image:'/src/assets/member.png'},
    {id:2,title:"National associations" ,description:"Our membership menagement software prvides full automation of membersjip and payments",image:'/src/assets/associate.png'},
    {id:3,title:"Clubs and Groups" ,description:"Our membership menagement software prvides full automation of membersjip and payments",image:'/src/assets/group.png'}
  ]
  return (
    <div>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-black font-bold  mb-2'>Our Clients</h2>
        <p className='text-black mt-7 text-2xl'>We have been working wotj some Fprtune 500+ clients</p>
        <div className='flex flex-row gap-16 pt-15'>
          <img src={com1} alt="" className=''/>
          <img src={com2} alt="" className=''/>
          <img src={com3} alt=""/>
          <img src={com4} alt=""/>
          <img src={com5} alt=""/>
        </div>
        <div className='mt-20 md:w- justify text-center'>
          <h2 className='text-4xl text-neutral-600 font-bold mb-3'>Manage your entire community in a single system</h2>
          <p className='text-neutral-400'>Who is Nextcent suitable for?</p>
        </div>
        <div className='mt-14 grid md:grid-cols-3 gap-10'>
          {
            services.map(service=><div key={service.id} className='px-4p py-8 text-center max-auto md:h-80 rounded-md shadow cursor-pointer hover:-translation-y-5 hover:border-b-4 hover:border-indigo-700
              transition-all duration-300 flex flex-col items-center justify-center '>
                <div>
                  <div className=' mb-4 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='w-100 h-50'/></div>
                  <h4 className='text-2xl font-bold text-neutral-600 mb-2 px-2'>{service.title}</h4>
                  <p className='text-sm text-neutral-500'>{service.description}</p>
                </div>
              </div>)
          }
        </div>
      </div>
    </div>
  )
}
export default Service