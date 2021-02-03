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
        if (this.state.selectOption !== null){    
            var newInfo = this.state.info
            newInfo.push(this.state.selectOption)
            var newObj = {
                day: this.props.day,
                data: newInfo
            }
            this.setState({
                info: newInfo
            })
            this.props.changeUserCrop(newObj)
        }
        event.preventDefault()
    }

    selectOptionChange(event) {
        if (event.target.value !== "999"){
            console.log("this.props.cropSeason[event.target.value] => ", this.props.cropSeason[event.target.value])
            this.setState({
                selectOption: this.props.cropSeason[event.target.value]
            })
        } else {
            console.log("Default selectOption selected, doing nathing more")
            this.setState({
                selectOption: null
            })
        }
    }

    componentDidMount() {
        console.log("this.props.info => ", this.props.info)
        this.setState({info: this.props.info})
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate this.state.selectOption => ", this.state.selectOption)
        console.log("componentDidUpdate this.state.info => ", this.state.info)
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
                        { <option value="999">Please select a crop</option> }
                        { this.props.cropSeason &&
                            this.props.cropSeason.map( (c, index) => 
                                //<option value={{info: {"name": c.cropName, "image": c.imgURL}}}>{c.cropName}</option>
                                <option value={index}>{c.cropName}</option>
                            )
                        }
                    </select>
                    <input type="submit" value="Add" />
                </form>
                <hr></hr>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan={2}>Crop</th>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <input type="submit" value="Save"></input>
            </div>
        )
    }
}