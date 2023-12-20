import { useEffect, useState } from "react";

import style from "./Home.css";
import WeatherCards from "../Cards/WeatherCard";
import NavBar from "../NavBarF/NavBar";
import { userState} from "react";
import axios from "axios";
import App from "../App";
import { FavoirtCardCityName } from "../favoritC/favoritCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiKey } from "../App";

var myCity=""


const Home =(props)=>{
   
    
    const [dataCityName, setDataCityName] = useState()
    const [dataCityInfo, setdataCityInfo] = useState()
    const [inputCity, setInputCity] = useState("")
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()

    
    useEffect( () => {
       navigator.geolocation.getCurrentPosition((postion)=>{
        setLat(postion.coords.latitude)
        setLon(postion.coords.longitude)
      })
    },[])
    
    
    // Getting city information from api
    const getWetherDetails =(cityName) => {
        if (!cityName) return
        const apiURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+apiKey+"&q=" + cityName+""
        axios.get(apiURL).then((res) => {
          const cityKey= res.data[0].Key
          setDataCityName(res.data[0])
          const apiURLtwo= "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+cityKey+"?apikey="+apiKey+""
          axios.get(apiURLtwo).then((res)=>{

            setdataCityInfo(res.data)
          }).catch((err)=>{
            toast.error("Could Not Find This City Name !", {
              
              position: toast.POSITION.TOP_CENTER,
            });
          })
          
        }).catch((err) => {
          toast.error("Could Not Find This City Name !", {
            position: toast.POSITION.TOP_CENTER,
          });

        })
      }
      const handleChangeInput = (e) => {
        
        setInputCity(e.target.value)
      }

      const handleSearch = () => {
        getWetherDetails(inputCity)
      }
      
      
      useEffect( () => {
        
        const apiUrl = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="+apiKey+"="+lat+"%2C"+lon
        console.log(apiUrl)
        
         axios.get(apiUrl).then((res)=>{
              myCity=res.data.LocalizedName;
              }).catch((err)=>{
                getWetherDetails("tel aviv")
              })
      },[])
   
    return(
        
       <>
        <ToastContainer />
        <div class="topnav">
        
  <div class="search-container">
      <link id="search" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <form action="/action_page.php" onSubmit={e => { e.preventDefault(); }}>
          <input type="text" placeholder="Search City.." 
          value={inputCity}
          onChange={handleChangeInput}></input>
          <button type="button"><i class="fa fa-search"
          onClick={handleSearch}></i></button>
      </form>
      </div>
      
      </div>

      {/* If you didnt search anything the default weather card will be your location, 
      and if you click on a card from favorits it will be weather card with the favorit card information */}
      {dataCityName ? (<WeatherCards dataCityName={dataCityName} dataCityInfo={dataCityInfo} changeWeatherType={props.changeWeatherType}/>)
       : (getWetherDetails((!FavoirtCardCityName ? (myCity):(FavoirtCardCityName)))&(FavoirtCardCityName.split(myCity)) || (<WeatherCards dataCityName={dataCityName} dataCityInfo={dataCityInfo} changeWeatherType={props.changeWeatherType}/>)
      )}
      
       
       </>
      

                   
    );
}
export default Home;