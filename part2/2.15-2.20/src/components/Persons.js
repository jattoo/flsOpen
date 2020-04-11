import React from 'react'

const Persons = ({person, takeDown}) => {
    return(
        <div>
            <li>{person.name} {person.number} <button onClick={takeDown}>Delete</button></li>
        </div>
    )
}

export default Persons