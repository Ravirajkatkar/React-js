import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button onClick={props.togglebtn1} style={props.Btncolor}>{props.title}</button>
        </div>
    )
}




