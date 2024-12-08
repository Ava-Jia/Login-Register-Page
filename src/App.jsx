import React, { useState } from 'react'
import email_icon from'./assets/email.png'
import password_icon from'./assets/password.png'
import person_icon from'./assets/person.png'



const App = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const togglePanel = () => {
    setIsLoginVisible(!isLoginVisible);
  }

  return (
    <div className='relative w-full min-h-screen'>
    <div className='absolute inset-0 bg-slate-200'>
    <div className='relative w-[30rem] mx-auto min-h-[40rem] my-20 p-8 bg-white rounded flex overflow-hidden'>
      <div className={`relative w-[60rem] transition-transform duration-500 ease-in-out ${isLoginVisible?  '-translate-x-[35rem]' : 'translate-x-0'}`}>
      <div className='absolute w-[26rem] flex flex-1 flex-col sign-up-container '>
      <div className="w-full h-12 text-center font-mono text-4xl text-slate-500">Sign Up</div>
      <div className='w-12 h-1 mx-auto mt-4 mb-12 bg-slate-500'></div>

      <div className=' space-y-12'>
      <div className=' w-full h-12 bg-gray-200 rounded-md p-4 text-black flex items-center'>
        <img src={person_icon} className='w-4 m-3' />
        <input className='flex flex-1 placeholder: black bg-transparent text-left outline-none' type="text" placeholder='Enter your name'/> </div>
      <div className='w-full h-12 bg-gray-200 rounded-md p-4 text-black flex items-center'>
        <img src={email_icon} className='w-4 m-3' />
        <input className='placeholder: black bg-transparent text-left outline-none' type="text" placeholder='Enter your email'/> </div>
      <div className='w-full h-12 bg-gray-200 rounded-md p-4 text-black flex items-center'>
        <img src={password_icon} className='w-4 m-3' />
        <input className='placeholder: black bg-transparent text-left outline-none' type="text" placeholder='Enter your password'/> </div>
      </div>

      <div className='flex justify-between'>
      <button type='submit' className='border hover:bg-orange-100 transition:.5s border:1 w-32 h-12 rounded-full flex mx-auto items-center justify-center shadow-sm bg-orange-200 mt-12'>Submit</button>
      </div>

      <button type='button' onClick={togglePanel} className='border border:1 w-32 h-12 rounded-full flex mx-auto items-center justify-center shadow-sm bg-orange-200 mt-12'>Login In</button>
      </div>

      <div className='absolute w-[26rem] left-[35rem] flex flex-col login-in-container'>
      <div className="w-full h-12 text-center font-mono text-4xl text-slate-500">Login In</div>
      <div className='w-12 h-1 mx-auto mt-4 mb-12 bg-slate-500'></div>

      <div className='flex flex-col w-f space-y-12'>
      <div className='w-full h-12 bg-gray-200 rounded-md p-4 text-black flex items-center'>
        <img src={person_icon} className='w-4 m-3' />
        <input className='placeholder: black bg-transparent text-left outline-none' type="text" placeholder='Enter your name'/> </div>
      <div className='w-full h-12 bg-gray-200 rounded-md p-4 text-black flex items-center'>
        <img src={password_icon} className='w-4 m-3' />
        <input className='placeholder: black bg-transparent text-left outline-none' type="text" placeholder='Enter your password'/> </div>
      <span className='text-left text-gray-300'>Lost password? <a href="#" className='text-orange-300'>Click here!</a></span>
      </div>

      <div className='flex justify-between'>
      <button type='submit' className='border border:1 w-32 h-12 rounded-full flex mx-auto items-center justify-center shadow-sm bg-orange-200 mt-12'>Submit</button>
      </div>

      <button type='button' onClick={togglePanel} className='border border:1 w-32 h-12 rounded-full flex mx-auto items-center justify-center shadow-sm bg-orange-200 mt-12'>Sign Up</button>
      </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default App
