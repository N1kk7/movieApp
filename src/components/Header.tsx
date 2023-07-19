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
import closeBtn from '../img/close.png'





export default function Header() {
  const [activeBtn, setActiveBtn] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [stateBurger, setStateBurger] = useState(false);
  const [pagesClass, setPagesClass] = useState<string>('');

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

const burgerBar = () => {
  setStateBurger(!stateBurger);
  !stateBurger ? setPagesClass('pagesActive'): setPagesClass('');
  console.log(stateBurger)

}

  return (
    <>
      <Router>
          <div>
                <div  className='text-center pl-5 pt-3 h-20 bg-gradient-to-r from-custom-dark-blue to-gray-800 border-b fixed min-w-full z-10'>
                    <div className="header-item">
                      <div className="search-block flex justify-evenly w-1/5 absolute top-4">
                        <div className="input relative top-4">
                          <input className=' bg-transparent border-white outline-none text-white border-b border-solid' type="text" value={valueInput}  onChange={(event) => inputLength(event)}/>
                        </div>
                        { activeBtn && <Link to={`movieApp/build/Find/${valueInput}`}><div className="search cursor-pointer" onClick={(valueInput) => {setValueInput(''); setActiveBtn(false)}}>

                          <img  src={search} alt="" className='w-10'/>
                        </div></Link>}
                        { !activeBtn && <div className="search ">
                          <img  src={search} alt="" className='w-10'/>
                        </div>}
                      </div>
                      <div className="logo-item inline-block">
                        <span className='text-white pr-5'>TV</span>
                        <img src={logo} alt="" className="w-12 inline-block text-center" />
                        <span className="text-white pl-5">Maze</span>
                      </div>
                      <div className="burger hidden" onClick={() => burgerBar()}>
                          {!stateBurger && <img src={burger} alt="" />}
                          {stateBurger && <img src={closeBtn} alt="" />}

                        </div>
                      <div className="list-header inline-block absolute right-0">
                        
                        <div className={`pages ${pagesClass}`}>
                          <ul className=''>
                                <li className='burger-search hidden'>
                                <div className="input relative top-4 inline-block">
                                  <input className=' bg-transparent border-white outline-none text-white border-b border-solid' type="text" value={valueInput}  onChange={(event) => inputLength(event)}/>
                                </div>
                                { activeBtn && <Link to={`movieApp/build/Find/${valueInput}`}><div className="search cursor-pointer inline-block" onClick={(valueInput) => {setValueInput(''); setActiveBtn(false); burgerBar()}}>

                                  <img  className='w-12 ' src={search} alt=""/>
                                </div></Link>}
                                { !activeBtn && <div className="search inline-block">
                                  <img  className='w-12 ' src={search} alt=""/>
                                </div>}
                                
                                </li>
                                <li className='inline-block p-3 text-lime-50 pr-6'>
                                  <Link to={'movieApp/build/'} onClick={() => burgerBar()}> Home </Link></li>
                                <li className='inline-block p-3 text-lime-50 pr-6'>
                                  <Link to={'movieApp/build/Films/'} onClick={() => burgerBar()}> Films </Link>
                                </li>
                                <li className='inline-block p-3 text-lime-50 pr-6'>
                                  <Link to={'movieApp/build/Actors/'} onClick={() => burgerBar()}> Actors </Link>
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




