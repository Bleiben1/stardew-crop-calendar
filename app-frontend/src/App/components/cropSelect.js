import React, {Component} from 'react'
import './cropSelect.css'

export default class CropSelect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: [],
            selectOption: {}
        }
        this.changeUserCrop = this.changeUserCrop.bind(this)
        this.selectOptionChange = this.selectOptionChange.bind(this)
    }

    changeUserCrop(event){
        console.log("cropSelect changeUserCrop")
        if (this.state.selectOption !== null){    
            var newInfo = this.state.info
            newInfo.push(this.state.selectOption)
            var newObj = {
                day: this.props.day,
                data: newInfo,
                isHarvest: false
            }
            this.setState({
                info: newInfo
            })
            this.props.changeUserCrop(newObj)
        }
        event.preventDefault()
    }

    selectOptionChange(event) {
        console.log("cropSelect selectOptionChange")
        if (event.target.value !== "999"){
            this.setState({
                selectOption: this.props.cropSeason[event.target.value]
            })
        } else {
            this.setState({
                selectOption: null
            })
        }
    }

    componentDidMount() {
        console.log("cropSelect componentDidMount")
        this.setState({info: this.props.info})
    }
    
    componentDidUpdate(){
        console.log("cropSelect componentDidUpdate")
    }

    render() {
        return (
            <div>
                <h3 className="cropSelectDay">Day {this.props.day}</h3>
                <form onSubmit={this.changeUserCrop}>
                    <label htmlFor="cropsAvailable">Crops available</label>
                    <br></br>
                    { this.props.cropSeason &&
                        this.props.cropSeason.map(c => 
                            <img src={c.imgURL} alt={c.cropName} className="cropImg"></img>
                        )
                    }
                    <select id="cropsAvailable" name="cropsAvailable" onChange={this.selectOptionChange}>
                        { <option value="999">Please select a crop</option> }
                        { this.props.cropSeason &&
                            this.props.cropSeason.map( (c, index) => 
                                <option value={index}>{c.cropName}</option>
                            )
                        }
                    </select>
                    <input type="submit" value="Add" />
                </form>
                <hr></hr>
                <table id="cropSelectTable">
                    <tbody>
                        <tr>
                            <th colSpan="2">Plant</th>
                            <th colSpan="2">Harvest</th>
                        </tr>
                        { this.state.info &&
                            this.state.info.map(c => 
                                <tr>
                                    <td><img src={c.imgURL} alt={c.cropName} className="cropImg"></img></td>
                                    <td>{c.cropName}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <br></br>
                <input type="submit" value="Save"></input>
            </div>
        )
    }
}