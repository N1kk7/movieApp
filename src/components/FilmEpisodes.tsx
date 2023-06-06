import React, { useState } from 'react'
import { regex } from '../constants/constants'
import { IEpisodes } from '../models/episodesModel'

interface episodesProps{
    episodes: IEpisodes
}

export default function FilmEpisodes({ episodes }: episodesProps) {
	const text = episodes.summary?.replaceAll(regex, " ")
    
  return (
    <tr>
		<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
			<div className="flex items-center">
				<div className="flex-shrink-0 w-10 h-10">
					<img className="w-full h-full rounded-full"
						src={episodes.image?.medium || 'image not found'}
						alt="" />
				</div>
					<div className="ml-3">
						<p className="text-gray-900 whitespace-no-wrap">
							{episodes.name}
						</p>
					</div>
				</div>
		</td>
		<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
			<p className="text-gray-900 whitespace-no-wrap max-h-28 overflow-auto">{text}</p>
		</td>
		<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
			<p className="text-gray-900 whitespace-no-wrap">
				{episodes.airdate}
			</p>
		</td>
		<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
			<p className="text-gray-900 whitespace-no-wrap">
				{episodes.airtime}
			</p>
		</td>
		<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
			<span
				className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
				<span aria-hidden
					className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
			<span className="relative">{episodes.rating.average}</span>
			</span>
		</td>
	</tr>
  )
}




