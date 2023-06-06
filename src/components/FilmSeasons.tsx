import React from 'react'
import { regex } from '../constants/constants';
import { ISeasons } from '../models/seasonModel'

interface seasonProps {
    season: ISeasons
}

export default function FilmSeasons({ season }: seasonProps) {
    
const poster = season.image?.medium;
const text = season.summary?.replaceAll(regex, " ")
   
  return (
    <>
        <div className="seasonsWrapper flex justify-between m-8 border rounded-3xl min-w-custom-w-832">
            <div className="img ">
                <img src={poster || 'Image is not exist yet'} alt=""  className='min-w-max rounded-3xl p-4'/>
            </div>
            <div className="description max-w-custom-mw-70   p-6 text-white">
                <div className="tittle">
                    <span>Episode {season.number}</span>
                </div>
                <div className="network">
                    <div className="year">
                        {season.endDate}
                    </div>
                    <div className="country">
                        {season.network.country?.name || 'Country is not exist'}
                    </div>
                </div>
                <div className="description-text max-h-52 overflow-auto pt-2">
                    {text || 'Description is not exist yet'}
                </div>
            </div>
        </div>
    </>
  )
}
