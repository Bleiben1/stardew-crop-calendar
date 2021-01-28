import React, {Component} from 'react'
import CalendarElement from './calendar_element.js'
import './calendar_day.css'

export default class CalendarDay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 1,
            info: []
        }
    }

    render() {
        return (
            <th className="solid_boder">
                <ul onClick={this.props.showCropSelect}>
                    <CalendarElement day={this.props.day}/>
                    { this.props.info &&
                    this.props.info.data.map(c => <CalendarElement name={c.name} image={c.image} />)
                    }
                </ul>
            </th>
        )
    }

}

/*function Main(props) {
    return (
        <th className="solid_boder">
            <ul>
                <CalendarElement day={props.day}/>
                {props.info.data.map(c => <CalendarElement name={c.name} image={c.image} />)}
            </ul>
        </th>
    )
}

export default Main;*/