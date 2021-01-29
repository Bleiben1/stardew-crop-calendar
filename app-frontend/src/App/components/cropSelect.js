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
                <h3 className="cropSelectDay">Day {this.props.info.day}</h3>
                <form>
                    <label for="cropsAvailable">Crops available</label>
                    <select id="cropsAvailable" name="cropsAvailable">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <input type="submit" value="Add" />
                </form>
                <hr></hr>
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