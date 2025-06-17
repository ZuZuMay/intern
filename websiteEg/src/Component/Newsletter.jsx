import React from 'react'
import Banner from '../Pages/Banner'
import skill from '../assets/skill.png'
const Newsletter = () => {
  return (
    <div className='mt-18 '>
        <Banner banana={skill} heading="Each student an share their discount code for friends" subheading={"A paragraph is completed of three major components.The first sentence ,which is often a declarative sentence,is called the topic sentence."}
        btn1={"I have a code"} btn2={""}/>
    </div>
  )
}

export default Newsletter