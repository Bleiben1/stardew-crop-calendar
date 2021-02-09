import React from 'react'
import './calendar_element.css'

function Main(props) {

    if (props.day) {
        return( <li><p>{props.day}</p></li>)
    } else {
        return( <img src={props.image} alt={props.name} className={`cropImg ${props.isHarvest ? "isHarvest" : ""}`}></img>)
    }
}

export default Main;