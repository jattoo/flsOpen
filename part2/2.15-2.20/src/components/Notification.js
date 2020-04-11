import React from 'react'

const Notification = ({message}) => {
    //method controls the whole div showing or not
    if(message === null){
        return null
    }
    return(
        <div className="notice">
            {message}
        </div>
    )
}

export default Notification