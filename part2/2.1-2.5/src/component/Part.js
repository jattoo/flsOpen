import React from 'react'

const Part = ({part}) => {
    return(
        <li><b>{part.name} {part.exercises}</b></li>
    )
}

export default Part

