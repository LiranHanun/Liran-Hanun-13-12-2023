import React from "react";

import style from "./Favorites.css";
import FavoritCard from "../favoritC/favoritCard";
import App from "../App";
import {arrFavorit} from "../App"

import favoritCard from "../favoritC/favoritCard";

const Favorites =(props)=>{
    return(
        <>
        
        <h1 className="Favorits">Favorits</h1>
            <div className="cardContainer">

            {/* Running for loop on the Favorit Array and display them */}
            {
            arrFavorit.length > 0 ? (
                (() => {
                    const favoritCards = [];
                    arrFavorit.forEach((favoritData, index) => {
                        favoritCards.push(<FavoritCard key={index} data={favoritData} changeWeatherType={props.changeWeatherType}/>);
                        console.log(favoritCards)
                        });
                        return favoritCards;
                        })()
                    ) : (
                        console.log("no cards")
                    )
                }
            

     </div>

 
        
        </>
    
    );
}
export default Favorites;