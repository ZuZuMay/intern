import React, { useEffect, useState } from 'react'
import banana from '../assets/banana.png'
import Banner from '../Pages/Banner'
import { getUserService } from '../services/user.service'
const Home = () => {
  const [users, setUser] = useState([])
  const getUser = async ( ) => {
    const result = await getUserService()
    console.log(result)
    setUser(result)
    
  }
  useEffect(()=> {
    getUser()
  }, [])

  return (
    <div className='p-10' id='home'>
        {/* <Banner banana={banana} heading="Develop your skills without diligence" subheading="A good examples of a paragraph contains a topic sentence,details and a conclusion."
        btn1={"Get Started"} btn2={"Discount"}/> */}
        {
          users.map(user => (
           <div className="">{user.name}</div>
          )) 
        }
    </div>
  )
}

export default Home