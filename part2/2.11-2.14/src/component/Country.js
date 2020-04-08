import React from 'react'



const Country = ({country,showCountry}) => {

    return(
        <div>
            <li>{country.name} <button value={country.name} onClick={showCountry}>show</button></li>
        </div>
    )
}

export default Country