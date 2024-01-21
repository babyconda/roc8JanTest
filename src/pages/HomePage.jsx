import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Switch from '../components/Switch';

export default function HomePage() {
  return (
    <div className="h-screen bg-mobal bg-no-repeat bg-center bg-cover ">
      <header className='py-10 px-4 md:px-10'>
        <Header/>
      </header>

      <main className='flex flex-col items-center justify-center'>      
        <h1 className='font-roboto font-semibold text-5xl leading-tight text-white text-center mt-16 md:px-8 lg:text-6xl lg:px-80 lg:leading-tight md:mt-6'>
          Discover over 2,000,000 free Stock Images
        </h1>

        <div className='my-16 mx-4 flex flex-col items-center gap-5'>
          <SearchBar/>
          <Switch/>
        </div>

        <h2 className='g-gradient-to-br from-white-10 via-white to-transparent backdrop-blur-md border border-white-50 rounded-lg shadow-xl text-white text-lg text-center mx-14 px-4 -mt-10'>Trending :  <span className='font-thin'>flower, birds, river</span>
        </h2>
        
      </main>
    </div>
  )
}

