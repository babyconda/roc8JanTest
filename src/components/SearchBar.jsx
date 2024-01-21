import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useHook } from '../../context';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const {setSearchQuery} = useContext(useHook)
  const [myq, setMyq] = useState('')
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();    
    setSearchQuery(myq);
    navigate('/search');
  }

  return (
    <div>
      <div className='bg-gradient-to-br from-white-10 via-white to-transparent backdrop-blur-md border border-white-50 rounded-lg shadow-2xl flex'>      

        <div className='flex items-center gap-1 px-4  font-roboto'>
            <CiSearch className='hidden md:flex border-r-2 pr-2 text-white text-3xl'/>
            
            <input 
            type='text' 
            className='outline-none border-none bg-transparent font-semibold text-white        text-xl placeholder:text-white md:w-[500px] pl-2'
            placeholder='Search'
            onChange={(e) => setMyq(e.target.value)}
            />
        </div>

        <button 
          className='font-roboto border px-2 py-1 rounded-lg font-semibold text-2xl text-white m-2 md:px-4'
          onClick={handleSubmit}
          >
          GO!
        </button> 
      </div>
    </div>
  )
}
