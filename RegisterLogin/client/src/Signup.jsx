import { useState } from 'react';
import { Link, useNavigate,Outlet } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const SubmitForm = async (e) => {
  e.preventDefault();

  const user = { name, email, password };

  try {
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const text = await response.text(); // fetch raw text first

    try {
      const resData = JSON.parse(text); // try parsing JSON manually

      if (resData.message === 'Success') {
        navigate('/home');
      } else {
        console.log("Registration failed:", resData.message || resData);
      }
    } catch (parseError) {
      console.error("Invalid JSON response:", text);
    }

  } catch (err) {
    console.error("Fetch error:", err.message);
  }
};

  return (
    <div className='w-full flex h-[600px] justify-center  '>
      <div className='bg-pink-200 min-w-[450px] min-h-[240px] p-8 rounded-[10px] shadow-[3px_6px_40px_#000000]   '>
        <h2 className='font-bold text-2xl'>Register</h2>
        <form className='' >
          <div className='mb-3 flex flex-col '>
            <label htmlFor='name' className='font-bold text-xl p-5 '><strong>Name:</strong>
            <input
              type='text'
              placeholder='Enter Name'
              autoComplete='off'
              name='name'
              value={name}
              className='form-control rounded-0  border-1 ml-10 '
              onChange={(e) => setName(e.target.value)}
            /></label>
            <label htmlFor='email' className='font-bold text-xl p-5'><strong>Email</strong>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              value={email}
              className='form-control rounded-0 border-1 ml-10'
              onChange={(e) => setEmail(e.target.value)}
            /></label>
            <label htmlFor='password' className='font-bold text-xl p-5'><strong>Password</strong>
            <input
              type='password'
              placeholder='Enter Password'
              autoComplete='off'
              name='password'
              value={password}
              className='form-control rounded-0 border-1 ml-10'
              onChange={(e) => setPassword(e.target.value)}
            /></label>
            <button
              type='submit'
              className=" border ml-20 w-50 rounded-0 bg-fuchsia-500 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600"
              onClick={SubmitForm}
            >
              Register
            </button>
            <label className='mt-4 mb-4 font-bold'>Already Have an Account</label>
            <Link
              to='/login'
              className='border ml-20 w-50 rounded-0 bg-fuchsia-500 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'
            >
              Login
            </Link>
          </div>
        </form>
      </div>
      <Outlet/>
    </div>
  );
}
