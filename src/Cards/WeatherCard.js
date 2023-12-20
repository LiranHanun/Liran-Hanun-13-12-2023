import { useEffect, useState , useRef } from "react";
import style from "./WeatherCard.css";
import App from "../App";
import {arrFavorit} from "../App"
import NavBar from "../NavBarF/NavBar";





const WeatherCard =(props)=>{
    
   
    

    
    const [isFavorit,setIsFavorit]= useState(true);

    
    
    // Array of Favorit information
    var array = [props.dataCityName?.EnglishName,props.dataCityInfo?.DailyForecasts[0]?.Temperature?.Maximum?.Value]
    
      
        
    const buttonRef = useRef(null);


    // when click on Favorit button it will add the information to the array, and when removing the
    // favorit option it will delete it from the array
    const togglerFavorit = ()=> { 
        !isFavorit ? (setIsFavorit(true)) : (setIsFavorit(false));
       
        console.log(array)

        if(arrFavorit.some(a => array.every((v, i) => v === a[i]))){
            arrFavorit.splice(arrFavorit.indexOf([props.dataCityName?.EnglishName,props.dataCityInfo?.DailyForecasts[0]?.Temperature?.Maximum?.Value,props.dataCityInfo?.DailyForecasts[0]?.Day.IconPhrase]), 1);
            
            }else{
                arrFavorit.push([props.dataCityName?.EnglishName,props.dataCityInfo?.DailyForecasts[0]?.Temperature?.Maximum?.Value,props.dataCityInfo?.DailyForecasts[0]?.Day.IconPhrase])
            }

        console.log(arrFavorit)  
    }

    // array of the days names
    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var d=new Date();

    
    
   

    return(
        <div class="cardMain">
            <div class="cardBody">
                <div class="topCard">
                    
                    <div class="cardInfo">

                        <div>
                            <h1 className="NameOfTheCity">{props.dataCityName?.EnglishName}</h1>
                            <h1 className="TempOfTheCity">{props.changeWeatherType ? (props.dataCityInfo?.DailyForecasts[0]?.Temperature?.Maximum?.Value +"° F"):(((props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value)-32)*5/9).toFixed(0)+"° C"}</h1>
                        </div>
                        

                    </div>
                    {/* favoirt button */}
                    <div id="main-content">
                        <div>
                            {arrFavorit.some(a => array.every((v, i) => v === a[i])) ? (<input type="checkbox" id="checkbox"  onClick={togglerFavorit} checked/>) 
                            : (<input type="checkbox" id="checkbox"  onClick={togglerFavorit}/>)}
                            
                            <label for="checkbox">
                            <svg id="heart-svg" viewBox="467 392 58 57">
                                <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                                <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                                <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

                                <g id="grp7" opacity="0" transform="translate(7 6)">
                                    <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                                    <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                                </g>

                                <g id="grp6" opacity="0" transform="translate(0 28)">
                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                                    <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                                </g>

                                <g id="grp3" opacity="0" transform="translate(52 28)">
                                    <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                                    <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                                </g>

                                <g id="grp2" opacity="0" transform="translate(44 6)">
                                    <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                                </g>

                                <g id="grp5" opacity="0" transform="translate(14 50)">
                                    <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                                    <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                                </g>

                                <g id="grp4" opacity="0" transform="translate(35 50)">
                                    <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                                    <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                                </g>

                                <g id="grp1" opacity="0" transform="translate(24)">
                                    <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                                    <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                                </g>
                                </g>
                            </svg>
                            </label>

                        </div>
                    </div>
    
                
                </div>

                <div className="WeatherStatus">
                    <p className="StatusTitle">{props.dataCityInfo?.DailyForecasts[0]?.Day.IconPhrase}</p>

                </div>

                {/* Weather daily information */}
                <div className="dailyWeather">
                    <div className="oneDayCard">
                        <h1 className="dayName">{weekday[d.getDay()]}</h1>
                        <h1 className="cardNumbers">{props.changeWeatherType ? (props.dataCityInfo?.DailyForecasts[0]?.Temperature?.Maximum?.Value +"° F"):(((props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value)-32)*5/9).toFixed(0) +"° C"}</h1>
                    </div>
                    <div className="oneDayCard">
                         <h1 className="dayName">{weekday[d.getDay()+1>6 ? (0): (d.getDay()+1)]}</h1> 
                         <h1 className="cardNumbers">{props.changeWeatherType ? (props.dataCityInfo?.DailyForecasts[1]?.Temperature?.Maximum?.Value +"° F"):(((props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value)-32)*5/9).toFixed(0) +"° C"}</h1>
                    </div>
                    <div className="oneDayCard">
                         <h1 className="dayName">{weekday[d.getDay()+2>6 ? (1): (d.getDay()+2)]}</h1>
                         <h1 className="cardNumbers">{props.changeWeatherType ? (props.dataCityInfo?.DailyForecasts[2]?.Temperature?.Maximum?.Value +"° F"):(((props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value)-32)*5/9).toFixed(0)+"° C"}</h1>
                    </div>
                    <div className="oneDayCard">
                         <h1 className="dayName">{weekday[d.getDay()+3>6 ? (2): (d.getDay()+3)]}</h1>
                         <h1 className="cardNumbers">{props.changeWeatherType ? (props.dataCityInfo?.DailyForecasts[3]?.Temperature?.Maximum?.Value +"° F"):(((props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value)-32)*5/9).toFixed(0)+"° C"}</h1>
                    </div>
                    <div className="oneDayCard">
                         <h1 className="dayName">{weekday[d.getDay()+4>6 ? (3): (d.getDay()+4)]}</h1>
                         <h1 className="cardNumbers">{props.changeWeatherType ? (props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value +"° F"):(((props.dataCityInfo?.DailyForecasts[4]?.Temperature?.Maximum?.Value)-32)*5/9).toFixed(0)+"° C"}</h1>
                        
                    </div>
                </div>
            
            </div>
            
        </div>
    );
}
export default WeatherCard;