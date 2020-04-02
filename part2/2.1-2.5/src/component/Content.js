import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({content}) => {
    return (
        <div>
        <ul>
            {content.parts.map(content =>
               <Part key={content.id} part={content}/> )}
        </ul>
        <Total totals={content}/>
        </div>
    )
}

export default Content