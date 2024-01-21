import React, { useContext, useRef } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import Card from '../components/Card';
import { useHook } from '../../context';
import Switch from '../components/Switch';
import Dropdown from '../components/Dropdown';
import { fetchByColor,fetchByOrder ,fetchByImageType } from '../utils/categoryConstant';

export default function SearchPage() {

  const {setColor,setImageType,setByOrder, color, imageType, byOrder,searchQuery  } = useContext(useHook); 

  return (
    <>
      <div className="h-96 bg-mobal bg-no-repeat bg-center bg-cover relative">
        
        <header className='py-10 px-4 md:px-10'>
          <Header/>
        </header>

        
        <section className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center gap-5'>
            <SearchBar/>
            <Switch/>
          </div>

          <h1 className='font-roboto font-semibold text-4xl text-white mt-16'>Results : <span>{searchQuery || "All"}</span></h1>
        </section>
      
      </div>

      {/* Render search button */}
      <div className='no-scrollbar md:flex-wrap relative overflow-x-scroll my-6 md:mb-2 md:mx-4 ' >
        <Categories/>  
      </div>

      {/* Dropdown => fetchByColor,fetchByOrder ,fetchByImageType*/}

      <div className='flex items-center justify-evenly md:justify-end md:gap-4 md:mr-11 md:mt-4 '>     
        <Dropdown options={fetchByColor} value={color} setValue={setColor} />

        <Dropdown options={fetchByImageType} value={imageType}  setValue={setImageType} />
        
        <Dropdown options={fetchByOrder} selectedValue={byOrder}  setValue={setByOrder} />
      </div>
      

      <div className='masonry sm:masonry-sm md:masonry-md m-[1.5rem]'>
        <Card/>
      </div>
    </>
  )
}
