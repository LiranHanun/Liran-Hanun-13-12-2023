import React, { useState ,useEffect} from 'react'
import './App.css';
import "./DarkLight.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {SearchBar} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import WeatherCard from './Cards/WeatherCard.js';
import Home from './HomeF/Home.js';
import NavBar from './NavBarF/NavBar';
import Favorites from './FavoritesF/Favorites.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export let arrFavorit=[];
export let myCity="";
export const apiKey="aONSow9gTD22hfAw8Ylz0CpRCh5Qhzym"




function App() {
  
  
  const [changeWeatherType,setChangeWeatherType]= useState();



  

  const toggler = ()=> { 
      changeWeatherType ? (setChangeWeatherType(false)) : (setChangeWeatherType(true));
      
  }

  
  
  return (
    <>
    <div className='main'>
    <NavBar toggler={toggler}/>
    

      <Routes >
        <Route exact path="/" element={<Home changeWeatherType={changeWeatherType}/>}  />
        <Route path="/Favorites" element={<Favorites changeWeatherType={changeWeatherType} className="FavoritPage"/>} />
      </Routes>
    
    
      </div>
    </>

  );
}

export default App;