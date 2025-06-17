import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  //const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const SubmitForm = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password, // ✅ use lowercase and match backend
      }),
    });

    const result = await response.json();

    if (result.message === "Success") {
      console.log("Login successful");
      navigate('/Home');
    } else {
      console.log("Your email or password is incorrect");
    }
  } catch (err) {
    console.error("Login request failed:", err.message);
  }
};


  return (
    <div className='w-full flex h-[600px] justify-center '>
      <div className='bg-pink-200 min-w-[450px] min-h-[240px] p-8 rounded-[10px] shadow-[3px_6px_40px_#000000] '>
        <h2 className='font-bold text-2xl'>Login Form</h2>
        <form onSubmit={SubmitForm}>
          <div className='mb-3 flex flex-col ml-5'>
            <label htmlFor='email' className='font-bold text-xl p-5 '><strong>Email</strong>
            <input
              type='email'
              value={email}
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0  border-1 ml-10 '
              onChange={(e) => setEmail(e.target.value)}
            /></label>
            <label htmlFor='password' className='font-bold text-xl p-5  '><strong>Password</strong>
            <input
              type='password'
              value={password}
              placeholder='Enter Password'
              autoComplete='off'
              name='password'
              className='form-control rounded-0  border-1 ml-10 '
              onChange={(e) => setPassword(e.target.value)}
            /></label>
            <button
              type='submit'
              className=" border ml-20 mt-5 w-50 rounded-0 bg-fuchsia-500 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600"

             
            >
              Login
            </button>
            <Link to="/" className=" border ml-20 mt-5 w-50 rounded-0 bg-fuchsia-500 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600"
>Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
