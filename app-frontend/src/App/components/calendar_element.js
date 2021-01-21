import React from 'react'
import './calendar_element.css'

function Main(props) {

    if (props.day) {
        return( <li><p>{props.day}</p></li>)
    } else {
        console.log(props.image)
        return( <img src={props.image} alt={props.name} className="cropImg"></img>)
    }
}

export default Main;