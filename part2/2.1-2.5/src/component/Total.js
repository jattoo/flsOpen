import React from 'react'

const Total = ({totals}) => {
    return(
        <div>
            <h2>Total of {totals.parts.reduce((a,b) => a + b.exercises, 0)} exercises</h2>
        </div>
        
    )
}

export default Total