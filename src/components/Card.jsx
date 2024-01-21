import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHook } from '../../context'
import DetailModal from './DetailModal';
import Spinner from './Spinner';

export default function Card() {

  const {data,media, setPage} = useContext(useHook)
  const loaderRef = useRef(null);
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [singleData, setSingleData] = useState(null)

  const handleClick = (item) => {    
    setSingleData(item)
    setShowDetailPage(true);
  }

  let myHits = 0;
  const handleObserver = (entries) => {
      const target = entries[0];      
      if (target.isIntersecting) {
        if(myHits>0){
        setPage(prev => prev + 1);
        }  
        myHits+=1;           
      }
    };

  useEffect(() => {
      const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
      };

      const observer = new IntersectionObserver(handleObserver, { threshold: 0.5 });

      if (loaderRef.current) {
      observer.observe(loaderRef.current);
      }

      return () => {
      if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
      }
      };
  }, [loaderRef]);

  return (
    <>    
     {showDetailPage && <DetailModal setShowDetailPage={setShowDetailPage} item={singleData}/>}
      {data && data?.map((item) => (
        <div key={item.id} className="rounded-lg break-inside cursor-pointer" onClick={()=>handleClick(item)}> 
         {media === "images" ? 
          <img
            className="rounded-lg object-cover mb-[1.5rem]"
            // src={item?.largeImageURL}
            src={item?.webformatURL}
            alt="thumbnail"
            loading="lazy"
          /> : 
          <>
          <video  controls className="w-full rounded-lg mb-[1.5rem]">
            <source src={item?.videos?.small?.url} type="video/mp4" />               
            Your browser does not support the video tag.
            </video>
          </>
          }         
      </div>
      ))}      
      <div ref={loaderRef}>  
        <Spinner/>
      </div>
    </>
  )
}

