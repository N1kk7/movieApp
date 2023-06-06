import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FilmActors from '../components/FilmActors';
import FilmSeasons from '../components/FilmSeasons';
import THead from '../components/THead';
import { API_URL, regex, SEARCH_URL } from '../constants/constants';

import { IFind } from '../models/findModel';
import { IPerson } from '../models/personModel';
import { ISeasons } from '../models/seasonModel';

export default function Find() {
  const params = useParams()
  const linkElement: any= params.valueInput;
  const [value, setValue] = useState('')
  const [showName, setShowName] = useState('');
  const [poster, setPoster] = useState('');
  const [genr, setGenr] = useState([]);
  const [des, setDes] = useState('');
  const [status, setStatus] = useState('');
  const [actors, setActors] = useState(false);
  const [seasons, setSeasons] = useState(false)
  const [episodes, setEpisodes] = useState(false)
  const [listActors, setListActors] = useState([]);
  const [listSeasons, setListSeasons] = useState([]);
  const [listEpisodes, setListEpisodes] = useState([])
  const [spinnerStatus, setSpinnerStatus] = useState(false) 
  const [rate, setRate]=useState(0)
  const [rateArr, setRateArr] = useState([])
  const [filmId, setFilmId] = useState(0)
  const [error, setError] = useState(false)

  const update = (value: any, linkElement: any) => {
  
  if (linkElement !== value) {
    setValue(linkElement)
    fetchFind()
  } 
  return
  }
update(value, linkElement)

  async function fetchFind() {

    try{
      const response: any = await axios.get<IFind>(`${SEARCH_URL}${linkElement}`);

      const nameShow = response.data.name
      const description = response.data.summary.replaceAll(regex, " ")
      const showImg = response.data.image.medium
      const getStatus = response.data.status
      let genres = response.data.genres.map((e: string) => e.concat(' '))
      const fetchId = response.data.id
      const rating = Math.round(response.data.rating.average)

      const rateArray = (rate: number) => {
          let num = 0
          let array: any = []
          const numArray = (rate:any) => {
            if (rate > num) {
              num++
              array.push(num)
              numArray(rate)
            }
            return
          }
          
          numArray(rate)
          setRateArr(array)
      }
      rateArray(rating)
      setStatus(getStatus)
      setDes(description)
      setGenr(genres)
      setPoster(showImg)
      setShowName(nameShow)
      setFilmId(fetchId)
      setSpinnerStatus(false)
      setRate(rating)
    } catch (error) {
      setError(true)
      setSpinnerStatus(false)

    }

  }

useEffect(() => {
  setSpinnerStatus(true)

  fetchFind()
},[])

const getActors = () => {
  setSpinnerStatus(true)

  setEpisodes(false)
  setSeasons(false)

  async function fetchActors() {
    const response: any = await axios.get(`${API_URL}/${filmId}/cast`);
    const actorsArray = response.data
    setListActors(actorsArray);
    setActors(true)
    setSpinnerStatus(false)

  }
fetchActors()
}
const getSeasons= () => {
  setActors(false)
  setEpisodes(false)

  async function fetchSeasons() {
    const response: any = await axios.get(`${API_URL}/${filmId}/seasons`);
    const seasonsArray = response.data
    setListSeasons(seasonsArray);
    setSeasons(true)
  }

fetchSeasons()
}

const getEpisodes= () => {
  setActors(false)
  setSeasons(false)
  setSpinnerStatus(true)

  async function fetchEpisode() {
    const response: any = await axios.get(`${API_URL}/${filmId}/episodes`);
    let episodesArray: any = []
    let episodeArray: any =[]
    let numSeason: number = 0

    response.data.map((e:any) => {

      if (numSeason === e.season) {
        episodeArray.push(e)

      } else {
        episodeArray = []
        episodesArray.push(episodeArray)
        numSeason = e.season
        episodeArray.push(e)
      }
      
    })
    setListEpisodes(episodesArray);
    setEpisodes(true)
    setSpinnerStatus(false)

  }

fetchEpisode()
}
  return (

    <>
      {error && <div className='error w-screen h-screen absolute top-0 bg-red-600 opacity-80'>
          <div className='img pt-60'>
            <img className='relative w-60 mx-auto' src="/sad-face.png" alt="" />
          </div>
          <div className="text text-center text-xl pt-12">
            <span className='text-white '>Something went wrong</span>

          </div>
        </div>}

    {!error && <div className="filmBg bg-gradient-to-r from-custom-dark-blue to-gray-800 h-auto min-h-screen pt-32">
        <div className="max-w-4xl flex items-center max-h-fit flex-wrap mx-auto my-32 lg:my-0 ">
    
              {/* Main Col */}
              <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center "></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{showName}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> {genr}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg>{status}</p>
            <p className="p-1 overflow-auto max-h-32 mt-2,5 text-sm">{des}</p>
            <div className="pt-4 ">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => getActors()}>
                ACTORS
              </button>
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full mx-5" onClick={() => getEpisodes()}>
                EPISODES
              </button> 
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => getSeasons()}>
                SEASONS
              </button> 
            </div>
            <div className='rate mt-4'>
                  <span>{`Rate ${rate}`}</span>
            </div>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              {rateArr.map((e: number) => <img className='w-6' src="/star.png" alt="" key={e}/>)}
            </div>
          </div>
          

        </div>
              {/* Img Col */}
        <div className="w-full lg:w-2/5">
            <img src={poster} alt="" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-96"/>
          
        </div>
        {/* ACTORS BLOCK */}
          { actors && <div className="bg-gradient-to-r from-custom-dark-blue to-gray-800">
                        <div className="container pb-6 py-10 mx-auto">
                          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {listActors.map((actor: IPerson) => <FilmActors actors={actor} key={actor.character.id}/>)}
                          </div>
                        </div>
               </div>}
        {/* ACTORS BLOCK */}
        { seasons && <div className="seasons">
            {listSeasons.map((season: ISeasons) => <FilmSeasons season={season} key={season.id}/>)}
        </div>
        }
        {/* EPISODES BLOCK */}
        { episodes && listEpisodes.map((array: any) => array.map((e:any) => <THead array={array} key={e.id} />))}
      </div>

    </div>    }
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
