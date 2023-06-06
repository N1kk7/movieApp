import React from 'react'
import { Link } from 'react-router-dom'
import { IFilms } from '../models/filmModel'

interface filmProp {
    film: IFilms
}

export default function FilmCard({ film }: filmProp) {

const genres = `${film.genres}' '`;

  return (
    // {/* <!-- Card Item --> */}
    <div
        className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
        >
            {/* <!-- Clickable Area --> */}
            <Link to={`/Film/${film.id}`}><div className="cursor-pointer">
                <figure>
                    {/* <!-- Image --> */}
                    <img className='mx-auto' src={film.image.medium} />
                    <figcaption className="p-4">
                        {/* <!-- Title --> */}
                        <p
                            className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                            >
                            {film.name}
                        </p>

                        {/* <!-- Description --> */}
                        <small
                            className="leading-5 text-gray-500 dark:text-gray-400"
                        >
                            {genres}
                        </small>
                    </figcaption>
                </figure>
            </div></Link>
    </div>
  )
}