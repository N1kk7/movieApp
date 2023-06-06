import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard';
import { API_URL } from '../constants/constants';
import { IFilms } from '../models/filmModel';

export default function Films() {
const [filmList, setFilmList] = useState([])

async function fetchFilms() {
    const response: any = await axios.get(`${API_URL}`);
    setFilmList(response.data)
}

useEffect(() => {
    fetchFilms()
},[])

  return (
    <>
{/* <!-- Card List Section --> */}
        <section  className="bg-gradient-to-r from-custom-dark-blue to-gray-800 pb-10 pt-20 px-12">
            {/* <!-- Card Grid --> */}
            <div
                className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {/* <!-- Card Item --> */}
                
                            {filmList.map((film: IFilms) => <FilmCard film={film} key={film.id}/>)}   
            </div>
        </section>
    </>
  )
}






