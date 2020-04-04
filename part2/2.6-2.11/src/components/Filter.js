import React from 'react'

const Filter = (props) => {
    return(
        <div>
            <form>
                <input 
                    onChange={props.handleSearchChange}
                    value={props.search}
                />
             </form>

        </div>
    )
}

export default Filter