import React, { Component, useState } from 'react'
import style from "./favoritCard.css";
import { Route , Routes, NavLink } from 'react-router-dom';
import Home from '../HomeF/Home';

export let FavoirtCardCityName="";

const favoritCard =(props)=>{

  

  function Click() {
    FavoirtCardCityName=props.data[0]
  }
 
 
    

    return (
      <>
         
          {/* Favoirt card */}
          <NavLink className="NavLink"  to="/" CardFavoritInfo={"asd"} onClick={Click}>
          
          <div className='Cards'>
            
            <h1 className='cityName'>{props.data[0]}</h1>
            <h1 className='cityInfo'>{props.data[2]}</h1>
            <h1 className='cityTemp'>{props.changeWeatherType ? (props.data[1]+"° F") : (((props.data[1])-32)*5/9).toFixed(0)+"° C"}</h1>
                  
            </div>
          
          </NavLink>  
          
      </>
  
    );
  }
  
  export default favoritCard;