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
        this.changeShowCropSelectFromChild = this.changeShowCropSelectFromChild.bind(this)
    }

    changeShowCropSelectFromChild(){
        console.log("calendar_day changeShowCropSelectFromChild")
        this.props.showCropSelect(this.props.info)
    }

    render() {
        
        return (
            <th className="solid_boder">
                <ul onClick={this.changeShowCropSelectFromChild}>
                    <CalendarElement key={this.props.info.day} day={this.props.info.day}/>
                    { this.props.info &&
                    this.props.info.data.map((c) => <CalendarElement key={c.cropName} name={c.cropName} image={c.imgURL} isHarvest={c.isHarvest} />)
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