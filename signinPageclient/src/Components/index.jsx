import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Signup=()=>{
    const [error,setError]=useState("")
    const [data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const handleChange=({currentTaget:input})=>{
        setData({...data,[input.name]:input.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const url='http://localhost:8080/api/users'
            const {data:res}=await axios.post(url,data)
            navigate("/login")
            console.log(res.message)
        }
        catch(error){
            if(error.response && error.response.status>=400 && error.response.status<=500 )
            {
                setError(error.response.data.message)
            }
        }
    }
    return(
     <div className="w-full min-h-screen bg-[#f5f5f5] flex items-center justify-center">
            <div className="w-[900px] h-[500px] flex rounded-[10px] shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)]">
               <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-tr-[10px] rounded-br-[10px]">
                     <h1>Welcome Back</h1>
                     <Link to='/login'>
                     <button type="button" className="border-none outline-none py-3 w-[180px] rounded-[20px] bg-white text-[14px] font-bold cursor-pointer">
                        Sign up
                     </button>
                     </Link>
                     </div>
                     <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-tr-[10px] rounded-br-[10px]">
                        <form className="w-[900px] h-[500px] flex rounded-[10px] shadow-[0px_3px_3px_-2px_rgba(0,0,0,0.2),0px_3px_4px_0px_rgba(0,0,0,0.14),0px_1px_8px_0px_rgba(0,0,0,0.12)]" onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <input 
                            type="text" 
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className= "w-full p-2 rounded border border-gray-300 text-sm" />
                             <input 
                            type="text" 
                            placeholder='last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className="w-full p-2 rounded border border-gray-300 text-sm" />
                             <input 
                            type="email" 
                            placeholder='email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="w-full p-2 rounded border border-gray-300 text-sm" />
                            <input 
                            type="password" 
                            placeholder='password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                             className="w-full p-2 rounded border border-gray-300 text-sm" />
                            {error && <div className={styles.error_msg}>{error}</div>}
                            <button type='submit' className='bg-green-500 text-white'>
                                Sign up
                            </button>
                        </form>
                     </div>
                </div>
            </div>
        
    )
}