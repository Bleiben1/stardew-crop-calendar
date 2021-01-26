import React from 'react'
import CalendarElement from './calendar_element.js'
import './calendar_day.css'

function Main(props) {
    return (
        <ul>
            <CalendarElement day={props.day}/>
            {props.info.data.map(c => <CalendarElement name={c.name} image={c.image} />)}
        </ul>
    )
}

export default Main;