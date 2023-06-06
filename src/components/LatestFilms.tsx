// import React, { useState } from 'react'
import { IFilms } from '../models/filmModel'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link} from 'react-router-dom';
import { regex } from '../constants/constants';

interface filmProps {
  films: IFilms
}

export default function LatestFilms ({films}: filmProps) {

  const description = films.summary.replaceAll(regex, " ")

  return (
    <>
          <div className="slideItem flex justify-between relative my-8">
            <div className="poster relative left-10">
              <img src={films.image.medium} alt="" className='w-96'/>
            </div>
            <div className="infoPoster w-2/5 relative right-32 h-60 top-8">
              <div className="tittle text-white text-2xl font-bold tracking-custom-l-s">
                <span>{films.name}</span>
              </div>
              <div className="description text-white pt-3.5 max-h-64 overflow-auto">
                {description}
              </div>
              <div className="readMoreBtn absolute top-96 right-12">
                <div className="w-full">
                  <Link to={`/Film/${films.id}`}><div
                    className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-yellow-400 to-gray-200 rounded-2xl hover:translate-y-px "
                  >
                          <span className="font-bold">
                    Read More</span>
                  </div></Link>
                </div>
              </div>
            </div>
        </div> 
    </>
  )
}
