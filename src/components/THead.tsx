import React from 'react'
import { IEpisodes } from '../models/episodesModel';
import FilmEpisodes from './FilmEpisodes';


export default function THead(array: any) {
  return (
    <div className="bg-gradient-to-r from-custom-dark-blue to-gray-800 border border-white p-8 rounded-md w-full mt-5">
    <div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto opacity-80">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Episodes
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  DESCRIPTION
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Created
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  QRT
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  RATE
                </th>
              </tr>
            </thead>
            <tbody>
                {array.array.map((episodes: IEpisodes) => <FilmEpisodes episodes={episodes} key={episodes.id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}
