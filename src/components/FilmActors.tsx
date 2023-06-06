import React from 'react'
import { IPerson } from '../models/personModel'

interface actorProps {
    actors: IPerson
}

export default function FilmActors({actors}: actorProps) {

  return (
    <div className="lg:flex border border-white rounded-3xl" >
        <img className="object-cover w-full h-56 rounded-3xl lg:w-64 p-3" src={actors.person.image?.medium}alt="" />

        <div className="flex flex-col justify-between py-6 lg:mx-6">
            <span className="text-xl font-semibold text-white hover:underline dark:text-white ">
                {actors.person.name}
            </span>
            <span className='text-slate-300'>{actors.person.country?.name || " "}</span>
            <span className='text-slate-300 '>{actors.person.gender}</span>
            <span className="text-sm text-zinc-200 dark:text-gray-300">{actors.person.birthday}</span>
        </div>
    </div>
  )
}




