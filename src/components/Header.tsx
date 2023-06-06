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
    <Router>
    <div>
          <div  className='text-center pl-5 pt-3 h-20 bg-gradient-to-r from-custom-dark-blue to-gray-800 border-b fixed min-w-full z-10'>
              <div className="header-item">
                <div className="search-block flex justify-between w-1/5 absolute top-4">
                  <div className="input relative top-4">
                    <input className=' bg-transparent border-white outline-none text-white border-b border-solid' type="text" value={valueInput}  onChange={(event) => inputLength(event)}/>
                  </div>
                  { activeBtn && <Link to={`Find/${valueInput}`}><div className="search cursor-pointer" onClick={(valueInput) => {setValueInput(''); setActiveBtn(false)}}>

                    <img  className='w-12' src="/search_btn.png" alt=""/>
                  </div></Link>}
                  { !activeBtn && <div className="search ">
                    <img  className='w-12' src="/search_btn.png" alt=""/>
                  </div>}
                </div>
                <div className="logo-item inline-block">
                  <span className='text-white pr-5'>TV</span>
                  <img src="/main-logo.png" alt="" className="w-12 inline-block text-center" />
                  <span className="text-white pl-5">Maze</span>
                </div>
                <div className="list-header inline-block absolute right-0">
                  <ul className=''>
                        <li className='inline-block p-3 text-lime-50 pr-6'>
                          <Link to={'/'}> Home </Link></li>
                        <li className='inline-block p-3 text-lime-50 pr-6'>
                          <Link to={'/Films'}> Films </Link>
                        </li>
                        <li className='inline-block p-3 text-lime-50 pr-6'>
                          <Link to={'/Actors'}> Actors </Link>
                        </li>
                    </ul>
                </div>
              </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Films" element={<Films />}/>
            <Route path="/Film/:id" element={<Film />}/>
            <Route path="/Find/:valueInput" element={<Find key={valueInput}/>}/>
            <Route path="/Actors" element={<Actors />}/>
          </Routes> 
    </div>
  </Router>
  )
}




