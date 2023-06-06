import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LatestFilms from '../components/LatestFilms';
import { IFilms } from '../models/filmModel';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { API_URL } from '../constants/constants';

export default function Home() {
  const [films, setFilms] = useState([])
  const topFilms: any= [];
  SwiperCore.use([Autoplay])

  async function fetchMovies() {
    
  const response: any = await axios.get(`${API_URL}`);
 
      response.data.map((elem: IFilms) => {

        if (elem.id < 20) {
          
          topFilms.push(elem)
        }  
      })
      setFilms(topFilms)
      
}

  useEffect(() => {
    fetchMovies()
  },[])

  return (
    <>
     <div className='bg-gradient-to-r from-custom-dark-blue to-gray-800 h-screen' >
        <div className="wrapper h-screen flex items-center pt-20">
        <div className="sliderWrapper my-0 mx-auto relative h-custom-height-90 w-10/12 border border-white rounded-3xl bg-gradient-to-r from-custom-start-red via-custom-center-red to-black" >

              <Swiper 
              cssMode={true}
              navigation={false}
              pagination={true}
              mousewheel={true}
              autoplay={{ delay: 3000 }}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper h-full"
              >
              {films.map((e: any) => <SwiperSlide key={e.id}><LatestFilms films={e} key={Date.now()}/></SwiperSlide>)}
    
            </Swiper>
          </div>
        </div>
    </div>
  </>
  )
}