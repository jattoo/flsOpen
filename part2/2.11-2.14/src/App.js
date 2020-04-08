import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Country from './component/Country'
import OneCountry from './component/OneCountry'
import Empty from './component/Empty'




function App() {
const [countries, setCountries] = useState([]) //allcountries here
const [searchCountry, setSearchCountry] = useState([])
const [willSeek, setWillSeek] = useState(true) //boolean value
const [countryInfo, setCountryInfo] = useState([])


useEffect(() => {

  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
      //console.log(response.data)}
    })
}, [])


//change
const findCountryField = (e) => {
  //console.log(willSeek)
  setSearchCountry(e.target.value.substr(0,20))
  //console.log('searchcountry:',searchCountry.length)
  setWillSeek(false)
}

//we using a boolean to control what to show


//we keep the length of the matches in here 
//as it looks our application will be depending on it

const countryToShow = willSeek ?
<div></div> 
:
countries.filter(country => country.name.toLowerCase().indexOf(searchCountry) !== -1)

const showCountry = (e) => {
 
  const details = countries.filter(country => country.name === e.target.value)
  setCountryInfo(details)
  console.log(e.target.value)
}


//
const hello = () => {
  window.location.reload()
}

if(countryInfo.length >= 1){
  return(
    <div>
      <form >
        find countries: 
        <input 
          onChange={findCountryField}
          value={searchCountry}
        />
        <button onClick={hello}>back</button>
      </form>
    <div>
     {countryInfo.map((country,i) => 
      <OneCountry key={i} country={country} />)}
    </div>
    </div>
  )
}
if(searchCountry.length === 0){
  return(
    <div>
      <form >
      find countries: 
      <input 
        onChange={findCountryField}
         value={searchCountry}
      />
    </form>
    <div>
      <Empty />
    </div>
    </div>)
} else {
  if(countryToShow.length === 0){
    return(
      <div>
        <form >
        find countries: 
        <input 
          onChange={findCountryField}
           value={searchCountry}
        />
      </form>
      <div>
      <Empty />
      </div>
      </div>
    )
  }else if(countryToShow.length > 10){
    return(
      <div>
        <form >
        find countries: 
        <input 
          onChange={findCountryField}
           value={searchCountry}
        />
      </form>
      <div>
        <h3>Too many matches, specify another filter</h3>
      </div>
      </div>
    )
  } else if(countryToShow.length > 1){
    
    return (
      <div>
        <form >
        find countries: 
        <input 
          onChange={findCountryField}
           value={searchCountry}
        />
        </form>
        <div>
          {countryToShow.map((country, i) => 
          
          <Country 
           key={i} 
           country={country}
            showCountry={showCountry}
           /> )}
          
        </div>
      </div>
    )
  } else if(countryToShow.length === 1){
    console.log('countrytoshow = 1:',countryToShow)
    return (
      <div>
        <form >
        find countries: 
        <input 
          onChange={findCountryField}
           value={searchCountry}
        />
        </form>
        <div>
          {countryToShow.map((country, i) => 
          <OneCountry  key={i} country={country}/> )}
        </div>
      </div>
    )
  } 
}
}

export default App;
