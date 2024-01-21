import React from 'react'

export default function Dropdown({options,selectedValue ,setValue }) {

  const handleSelect = (option) => {
    setValue(option);
  };

  return (
    <div className='border border-gray-800 text-gray-700 rounded-lg text-sm md:text-base px-1 py-2 font-roboto font-semibold '>      
      <select onChange={(e) => handleSelect(e.target.value)} value={selectedValue} className='cursor-pointer border-none outline-none' >
       
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
