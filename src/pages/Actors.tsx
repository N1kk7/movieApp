import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ActorsCard from '../components/ActorsCard';
import { PEOPLE_URL } from '../constants/constants';
import { IActor } from '../models/actorModel';

export default function Actors() {
const [actorsList, setActorsList] = useState([])
const [spinnerStatus, setSpinnerStatus] = useState(false) 

async function fetchActors() {
    setSpinnerStatus(true)

    const response: any = await axios.get(`${PEOPLE_URL}`);

    setActorsList(response.data)
    setSpinnerStatus(false)

}

useEffect(() => {
    fetchActors()
},[])

  return (
    <>
    {/* <!-- Card List Section --> */}
    <section  className="bg-gradient-to-r from-custom-dark-blue to-gray-800 pb-10 pt-20 px-12">
        {/* <!-- Card Grid --> */}
        <div
            className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {/* <!-- Card Item --> */}
                        {actorsList.map((actor: IActor) => <ActorsCard actor={actor} key={actor.id}/>)}  
        </div>
    </section>
    { spinnerStatus && <div className="spinner absolute top-0 w-full h-full bg-black opacity-80">
                        <div className="spinner-inside flex items-center justify-center space-x-2 absolute top-2/4">
                          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                            <span className="visually-hidden text-sky-500 text-base text-custom-fz-100 relative left-4 bottom-6">.</span>
                          </div>
                          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                            <span className="visually-hidden text-sky-500 text-base text-custom-fz-100 relative left-4 bottom-6">.</span>
                          </div>
                        </div>
                      </div>}
        </>
  )
}
