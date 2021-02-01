import React, {Component} from 'react'
import './cropSelect.css'

export default class CropSelect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: [],
            selectOption: []
        }
        this.changeUserCrop = this.changeUserCrop.bind(this)
        this.selectOptionChange = this.selectOptionChange.bind(this)
    }

    changeUserCrop(event){
        var newInfo = this.state.info
        newInfo.push(this.state.selectOption)
        this.setState({
            info: newInfo
        })
        this.props.changeUserCrop(this.state.info)
        event.preventDefault()
    }

    selectOptionChange(event) {
        console.log("selectOptionChange event.target.value => ", event.target.value)
        this.setState({
            selectOption: event.target.value
        })
        console.log("selectOptionChange this.state.selectOption => ", this.state.selectOption)
    }

    render() {
        return (
            <div>
                { /*<h3 className="cropSelectDay">Day {this.props.info.day}</h3>*/ }
                <h3 className="cropSelectDay">Day {this.props.day}</h3>
                <form onSubmit={this.changeUserCrop}>
                    <label for="cropsAvailable">Crops available</label>
                    <br></br>
                    { this.props.cropSeason &&
                        this.props.cropSeason.map(c => 
                            <img src={c.imgURL} alt={c.cropName} className="cropImg"></img>
                        )
                    }
                    <select id="cropsAvailable" name="cropsAvailable" onChange={this.selectOptionChange}>
                        { /*<option value="australia">Australia</option>*/ }
                        { this.props.cropSeason &&
                            this.props.cropSeason.map(c => 
                                <option value={{"name": c.cropName, "image": c.imgURL}}>{c.cropName}</option>
                            )
                        }
                    </select>
                    <input type="submit" value="Add" />
                </form>
                <hr></hr>

                <br></br>
                <input type="submit" value="Save"></input>
            </div>
        )
    }
}