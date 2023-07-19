import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import Home from '../pages/Home';
  // import Film from '../pages/Film';
import Films from '../pages/Films';
import Actors from '../pages/Actors';
import Find from '../pages/Find';
import Film from '../pages/Film';
import search from '../img/search_btn.png'
import logo from '../img/main-logo.png'
import burger from '../img/burger.png'





export default function Header() {
  const [activeBtn, setActiveBtn] = useState(false)
  const [valueInput, setValueInput] = useState('')

const inputLength: any = (Event: any) => {
  const value = Event.target.value
  
  if(value.length === 0){
    setValueInput(value.trim())
    setActiveBtn(false)
  } else{
    setValueInput(value);
    if (value[0] !== ' ') {
    setActiveBtn(true)
    }
  }
}

  return (
    <>
      <Router>
          <div>
                <div  className='text-center pl-5 pt-3 h-20 bg-gradient-to-r from-custom-dark-blue to-gray-800 border-b fixed min-w-full z-10'>
                    <div className="header-item">
                      <div className="search-block flex justify-between w-1/5 absolute top-4">
                        <div className="input relative top-4">
                          <input className=' bg-transparent border-white outline-none text-white border-b border-solid' type="text" value={valueInput}  onChange={(event) => inputLength(event)}/>
                        </div>
                        { activeBtn && <Link to={`movieApp/build/Find/${valueInput}`}><div className="search cursor-pointer" onClick={(valueInput) => {setValueInput(''); setActiveBtn(false)}}>

                          <img  src={search} alt=""/>
                        </div></Link>}
                        { !activeBtn && <div className="search ">
                          <img  src={search} alt=""/>
                        </div>}
                      </div>
                      <div className="logo-item inline-block">
                        <span className='text-white pr-5'>TV</span>
                        <img src={logo} alt="" className="w-12 inline-block text-center" />
                        <span className="text-white pl-5">Maze</span>
                      </div>
                      <div className="list-header inline-block absolute right-0">
                        <div className="burger">
                          <img src={burger} alt="" className='hidden'/>
                        </div>
                        <div className="pages">
                          <ul className=''>
                                <li className='burger-search hidden'>
                                <div className="input relative top-4 inline-block">
                                  <input className=' bg-transparent border-white outline-none text-white border-b border-solid' type="text" value={valueInput}  onChange={(event) => inputLength(event)}/>
                                </div>
                                { activeBtn && <Link to={`movieApp/build/Find/${valueInput}`}><div className="search cursor-pointer inline-block" onClick={(valueInput) => {setValueInput(''); setActiveBtn(false)}}>

                                  <img  className='w-12 ' src={search} alt=""/>
                                </div></Link>}
                                { !activeBtn && <div className="search inline-block">
                                  <img  className='w-12 ' src={search} alt=""/>
                                </div>}
                                
                                </li>
                                <li className='inline-block p-3 text-lime-50 pr-6'>
                                  <Link to={'movieApp/build/'}> Home </Link></li>
                                <li className='inline-block p-3 text-lime-50 pr-6'>
                                  <Link to={'movieApp/build/Films/'}> Films </Link>
                                </li>
                                <li className='inline-block p-3 text-lime-50 pr-6'>
                                  <Link to={'movieApp/build/Actors/'}> Actors </Link>
                                </li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <Routes>
                  <Route path="movieApp/build/" element={<Home />}/>
                  <Route path="movieApp/build/Films/" element={<Films />}/>
                  <Route path="movieApp/build/Film/:id" element={<Film />}/>
                  <Route path="movieApp/build/Find/:valueInput" element={<Find key={valueInput}/>}/>
                  <Route path="movieApp/build/Actors/" element={<Actors />}/>
                </Routes> 
          </div>
        </Router>
    </>
  )
}




