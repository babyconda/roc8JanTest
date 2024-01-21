import React, { useContext, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useHook } from '../../context';
export default function DetailModal({setShowDetailPage, item}) {
  const {media} = useContext(useHook)
  
  const [selectedOption, setSelectedOption] = useState('small');

  const handleClick = () => {
    setShowDetailPage(false);   
  }

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDownload = (imageUrl, fileName) => {
     const link = document.createElement('a');     
      link.href = imageUrl;
      link.download = fileName || 'image';
      link.click();
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md'>
      <div className='bg-white pt-4 md:mt-6'>

        <div className='flex justify-between items-center mx-2 ' >
          <h1 className='font-roboto text-lg text-gray-600'>Preview ID : {item.id}</h1>
          <IoMdClose onClick={handleClick} className='text-2xl text-gray-500' />
        </div>

       <div className='p-1 my-1 flex flex-col md:flex-row mx-2 justify-center md:justify-between md:mx-14 md:mt-8'>
       {media === 'images' ? <img src={item.webformatURL} alt='Image' className='rounded-lg max-h-96 md:max-h-[450px] md:max-w-[750px] '/>:
       <>
        <video  controls className="w-[50%] rounded-lg mb-[1.5rem]">
          <source src={item?.videos?.small?.url} type="video/mp4" />               
            Your browser does not support the video tag.
        </video>
        </>}
        <div className=' md:w-full md:ml-4'>

          <div  className=''>
          <h1 className='font-roboto text-2xl text-gray-800 font-semibold p-2 mt-4 '>Download</h1>

          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <div className='flex justify-between items-center w-full '>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Small</label>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right mr-2 ">640x960</label>
                  </div>          
                    <input 
                    id="list-radio-license" 
                    type="radio" 
                    value="small" 
                    name="list-radio" 
                    onChange={handleRadioChange}
                    checked
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <div className='flex justify-between items-center w-full '>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium </label>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right mr-2 ">1920x2660</label>
                  </div>          
                    <input 
                    id="list-radio-license" 
                    type="radio" 
                    value="medium" 
                    name="list-radio" 
                    onChange={handleRadioChange}
                   
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <div className='flex justify-between items-center w-full '>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Big</label>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right mr-2 ">2400x3600</label>
                  </div>          
                    <input 
                    id="list-radio-license" 
                    type="radio" 
                    value="big" 
                    name="list-radio" 
                    onChange={handleRadioChange}
                    
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <div className='flex justify-between items-center w-full '>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Original</label>
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right mr-2 ">3850x5640</label>
                  </div>          
                    <input 
                    id="list-radio-license" 
                    type="radio" 
                    value="original" 
                    name="list-radio" 
                    onChange={handleRadioChange}
                    
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    
                </div>
            </li>
          </ul>
        </div>

        <div>
          <button 
            className='w-full bg-green-500 text-white font-roboto font-semibold text-2xl py-2 rounded-lg my-4'
            onClick={() => handleDownload(item.webformatURL, item.id)}
            >Download for free</button>
        </div>
        <div>
          <h1 className='font-roboto text-2xl text-gray-800 font-semibold p-2 mt-2 '>Information</h1>
        </div>

        <div className='flex justify-between mx-2'>
          <div>
            <p>User</p>
            <p className='font-semibold'>{item?.user}</p>
          </div>
          <div>
            <p>UserID</p>
            <p className='font-semibold'>{item?.user_id}</p>
          </div>
          <div>
            <p>Type</p>
            <p className='font-semibold'>{item?.type}</p>
          </div>
        </div>
        <div className='flex justify-between mx-2 mt-4'>
          <div>
            <p>Views</p>
            <p className='font-semibold'>{item?.views}</p>
          </div>
          <div>
            <p>Downloads</p>
            <p className='font-semibold'>{item?.downloads}</p>
          </div>
          <div>
            <p>Likes</p>
            <p className='font-semibold'>{item?.likes}</p>
          </div>
        </div>

        </div>
       </div>

       {/* Extra information tags */}
        <div className='flex gap-6 mx-6 py-2 items-center'>
          <h1 className='font-roboto font-semibold text-xl'>Tags:</h1>
         <div>
          <p className='font-roboto text-lg text-gray-600 '>{item.tags}</p>
         </div>
        </div>
      </div>
    </div>
  )
}
