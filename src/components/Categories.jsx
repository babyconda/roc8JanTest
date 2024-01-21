import React, { useContext } from 'react'
import { allCategories } from '../utils/categoryConstant' 
import { useHook } from '../../context';

export default function Categories() {
    const {setSearchQuery } = useContext(useHook); 
    
  return (   

      <div  className='flex gap-2 mx-4 '>
        {allCategories && allCategories.map((item) => (
        <div key={item} onClick={()=> setSearchQuery(item)}>
          <button className='border rounded-lg border-gray-700 text-xl text-gray-700 px-4 py-2 font-roboto md:text-sm md:px-2 md:py-1'>{item}</button>
        </div>
      ))}
      </div>
   
  )
}
