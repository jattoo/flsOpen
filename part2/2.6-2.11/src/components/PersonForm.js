import React from 'react'

const PersonForm = (props) => {
    return(
        <div>
            <form onSubmit={props.addToPhoneBook}>
        
                <div>
                <h2>Add New Entry</h2>
                Name: <input 
                        onChange={props.handleNameChange}
                        value={props.newName}
                        />
                
                </div>
                <div>
                Number: <input 
                            value={props.newNumber}
                            onChange={props.handleNumberChange}
                        />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
export default PersonForm