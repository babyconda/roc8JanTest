import React, { useContext, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useHook } from '../../context';

export default function Header() {
    const {signOutUser, currentUserData,user} = useContext(useHook);
    const [showDrop, setShowDrop] = useState(false);
    
  return (
    <>
    <div className='flex items-center justify-between bg-gradient-to-br from-white-10 via-white to-transparent backdrop-blur-md border border-white-50 rounded-lg shadow-2xl text-white px-5 text-3xl py-2'>
      <Link to='/' className='md:hidden'>
        <FaHome />
      </Link>

      <p className='font-roboto text-3xl md:hidden'>Pixel Palace</p>

      <div className='md:hidden cursor-pointer' onClick={()=>{setShowDrop(prev => !prev)}}>
          {user ? <>
            <p className='h-10 w-10 border text-center rounded-full'>
              {currentUserData?.name?.charAt(0)}</p> 
            </>:
            <FaBars />}
      </div>

        {/* Navigation Links for Larger Screen */}

      <div className='hidden px-4 md:flex w-full justify-between items-center font-roboto text-base'>
        <Link to='/' className='text-white hover:underline cursor-pointer'>Homepage</Link>
          <div className='flex items-center gap-2'>
            {!user?<>
            <Link
               to='/login' 
               className='text-white hover:underline cursor-pointer'
               >
                Login
              </Link>

            <Link
             to='/create-account' 
             className='text-white border px-4 py-1 rounded-lg hover:bg-gray-500 hover:border-black-900 cursor-pointer'
             >
              Create Account
              </Link>
            </>:
            <div className='flex items-center gap-4'>
              <h1>{currentUserData?.name}</h1>
              <button 
              className='text-white border px-4 py-1 rounded-lg hover:bg-gray-500 hover:border-black-900 cursor-pointer'
              onClick={signOutUser}
              >
              Logout
              </button>
            </div>
            }
          </div>            
      </div>      
    </div>
    
    {/* Dropdown for Login and Logout in mobile view  */}
    {showDrop &&
      <div className=' w-[90%] md:hidden mx-2 py-2 px-2 border rounded-lg flex justify-center text-white absolute text-lg'>
        {user ?<button className='text-xl py-1 ' onClick={signOutUser}>Logout</button>:
        <div className='flex w-full justify-between text-lg'>
          <Link to='/login' 
            className='cursor-pointer hover:underline hover:text-gray-500 '
            >
              Login</Link>
          <Link to='/create-account' className='cursor-pointer hover:underline hover:text-gray-500 '>Create Account</Link>
        </div>}
      </div>}
    </>
  )
}
