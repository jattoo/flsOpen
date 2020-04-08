import React,{useState,useEffect} from 'react'
import axios from 'axios'

const OneCountry = ({country}) => {
    const [weather, setWeather] = useState([])


    const params = {
        access_key:process.env.REACT_APP_API_KEY,
        query: country.name
      }
      //Weather api
      useEffect(() =>{
        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response =>{
                //console.log(response.data.current)
                setWeather(response.data.current)
            })
            
      },[])
      
    return(
        <div>
            <h1>{country.name}</h1>
            <h3>Capital City: {country.capital}</h3>
            <h3>Population: {country.population}</h3>
            <h2>Languages</h2>
            {country.languages.map((lan,i) => <ul key={i}><li>{lan.name}</li></ul>)}
            <div>
                <img width={300}height={300} src={country.flag} alt={`${country.name}'s flag`} />
            </div>
            <div>
                <h3>Weather in {country.capital}</h3>
                <h3>temperature: {weather.temperature}</h3>
                <div>
                    <img  src={weather.weather_icons} width={100} height={100} alt={`${country.name}'s weather`}/>
                </div>
                    <h3>wind: {weather.wind_speed} mph direction {weather.wind_dir}</h3>
            </div>
        </div>
    )
}

export default OneCountry