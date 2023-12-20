import React, { useState , useEffect} from "react";

import "./NavBar.css";
import style from"../DarkLight.css"
import { NavLink } from 'react-router-dom';
import { classNameLet } from "../App";
import App from "../App";


const NavBar = (props) =>{


    //Dark mode change style
    const [isDarkMode, setIsDarkMode] = useState(true);

    const togglerDarkMode = ()=> { 
        setIsDarkMode(!isDarkMode)
        
        if(isDarkMode){
            document.documentElement.style.setProperty("--color-background", "#292929");
            document.documentElement.style.setProperty("--color-cardinfo", "#303030");
            document.documentElement.style.setProperty("--color-CardBackG", "#474747");
            document.documentElement.style.setProperty("--color-text", "#d7d7d7");
            document.documentElement.style.setProperty("--color-cardCloudes", "#303030");
        }else{
            document.documentElement.style.setProperty("--color-background", "#dddcdc");
            document.documentElement.style.setProperty("--color-cardinfo", "#cdcdcd");
            document.documentElement.style.setProperty("--color-CardBackG", "#f6f6f6");
            document.documentElement.style.setProperty("--color-text", "#fffff");
            document.documentElement.style.setProperty("--color-cardCloudes", "#e6e6e6");
        }
    }
    return(
        <nav className="bg-gray-800 ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="TitleLiran">
                         <h1 className="text-gray-400 Title">Liran Hanun</h1>
                         <h2 className="TitleSEC"> Weather Task by Abra</h2>
                    </div>
                    
                    
                    <div className="switchBody">
                        <div class="switch-button">
                            <input class="switch-button-checkbox" type="checkbox" onClick={props.toggler}></input>
                            <label class="switch-button-label" for=""><span class="switch-button-label-span">Celsius</span></label>
                        </div>
                    </div>
                   

                    <div className="btn-group " role="group" aria-label="Basic example">
                        <NavLink type="button " className="btn btn-primary" to="/">Home</NavLink>
                        <NavLink type="button " className="btn btn-primary" to="/Favorites">Favorites</NavLink>
                    </div>


                    {/* Dark mode switch */}
                    <div className="darkMod" >
                    <label for="theme" class="theme" >
                        <span class="theme__toggle-wrap" >
                            <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" onClick={togglerDarkMode}></input>
                            <span class="theme__fill"></span>
                            <span class="theme__icon">
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                                <span class="theme__icon-part"></span>
                            </span>
                        </span>
                    </label>
                    </div>

            </div>
            
        </div>
        </nav>
    );
}
export default NavBar;