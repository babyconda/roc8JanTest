import React, { useContext, useState } from 'react'
import { useHook } from '../../context';

export default function Switch() {

    const [isChecked, setIsChecked] = useState(false);
    const {setMedia} = useContext(useHook)
    
  

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked)
    if(!e.target.checked){
        setMedia("images")
    }
    else{
        setMedia("videos")
    }
  }

  return (    
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
      
        <div className='shadow-card flex  h-[46px]  px-2 items-center justify-between  bg-gradient-to-br from-white-10 via-white to-transparent backdrop-blur-md border border-white-50 rounded-lg shadow-2xl text-white'>
          <span
            className={`flex items-center justify-center rounded px-2 py-1  font-roboto ${
              !isChecked ? 'bg-gray-800 text-white' : 'text-body-color'
            }`}
          >
           Images
          </span>
          <span
            className={`flex items-center justify-center rounded px-2 py-1 font-roboto ${
              isChecked ? 'bg-gray-800 text-white' : 'text-body-color'
            }`}
          >
           Videos
          </span>
        </div>
      </label>
    </>

  )
}