import React from 'react'

const Navigation = (props) => {
    return(
        <div className="buttons">
            
            <button onClick={props.backward}>Previous</button>
            
            <div>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            </div>

            <button onClick={props.forward}>Next</button>
        </div>)
}

export default Navigation;