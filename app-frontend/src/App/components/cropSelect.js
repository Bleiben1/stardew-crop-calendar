import React, {Component} from 'react'
import './cropSelect.css'

export default class CropSelect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: []
        }
    }

    render() {
        return (
            <div>
                <h1>Day {this.props.info.day}</h1>
                { this.props.info &&
                    this.props.info.data.map(c => 
                        <img src={c.image} alt={c.name} className="cropImg"></img>
                    )
                }
                <button><span >&#43;</span></button>
            </div>
        )
    }
}