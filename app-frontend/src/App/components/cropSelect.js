import React, {Component} from 'react'
import './cropSelect.css'
import ShowEntry from './showEntry.js'

export default class CropSelect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            info: [],
            selectOption: {}
        }
        this.changeUserCrop = this.changeUserCrop.bind(this)
        this.selectOptionChange = this.selectOptionChange.bind(this)
        this.addUserCrop = this.addUserCrop.bind(this)
        this.addHarvestCrop = this.addHarvestCrop.bind(this)
        this.deleteUserCrop = this.deleteUserCrop.bind(this)
        this.deleteHarvestCrop = this.deleteHarvestCrop.bind(this)
    }

    changeUserCrop(newInfo){
        console.log("cropSelect changeUserCrop")
        let newObj = {
            day: this.props.day,
            data: newInfo
        }
        this.setState({
            info: newInfo
        })
        this.props.changeUserCrop(newObj)
    }

    addUserCrop(event) {
        console.log("cropSelect addUserCrop")
        if (this.state.selectOption !== null){    
            let newInfo = this.state.info
            let copySelectOption = {...this.state.selectOption}
            newInfo.push(this.state.selectOption)
            this.changeUserCrop(newInfo)
            this.props.addHarvestCrop(copySelectOption, this.props.day)
        }
        event.preventDefault()
    }

    deleteUserCrop(index) {
        let newInfo = this.state.info
        console.log("cropSelect deleteUserCrop index => ", index)
        let copyCrop = newInfo.splice(index, 1)
        console.log("cropSelect deleteUserCrop newInfo => ", newInfo)
        this.changeUserCrop(newInfo)
        this.props.deleteHarvestCrop(copyCrop[0], this.props.day)
    }

    addHarvestCrop(_childCrop, _childDay){
        console.log("cropSelect addHarvestCrop _childCrop")
        this.props.addHarvestCrop(_childCrop, _childDay)
    }

    deleteHarvestCrop(_childCrop, _childDay){
        console.log("cropSelect deleteHarvestCrop _childCrop")
        this.props.deleteHarvestCrop(_childCrop, _childDay)
    }

    selectOptionChange(event) {
        console.log("cropSelect selectOptionChange")
        if ( 0 <= event.target.value && event.target.value < this.props.cropSeason.length ){
            var copyCropSeason = this.props.cropSeason[event.target.value]
            copyCropSeason.isHarvest = false
            this.setState({
                selectOption: copyCropSeason
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
        this.setState({selectOption: null})
    }
    
    componentDidUpdate(){
        console.log("cropSelect componentDidUpdate")
    }

    render() {
        return (
            <div>
                <h3 className="cropSelectDay">Day {this.props.day}</h3>
                <form onSubmit={this.addUserCrop}>
                    <label htmlFor="cropsAvailable">Crops available</label>
                    <br></br>
                    { this.props.cropSeason &&
                        this.props.cropSeason.map(c => 
                            <img key={c.imgURL+c.cropName} src={c.imgURL} alt={c.cropName} className="cropImg"></img>
                        )
                    }
                    <select id="cropsAvailable" name="cropsAvailable" onChange={this.selectOptionChange}>
                        { <option key="default999" value="999">Please select a crop</option> }
                        { this.props.cropSeason &&
                            this.props.cropSeason.map( (c, index) => 
                                <option key={index+c.cropName} value={index}>{c.cropName}</option>
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
                            <th></th>
                        </tr>
                        { this.state.info &&
                            this.state.info.map((c, index) => 
                                <ShowEntry key={index+c.cropName} name={c.cropName} image={c.imgURL} isHarvest={c.isHarvest} index={index} deleteUserCrop={this.deleteUserCrop}/>
                            )
                        }
                    </tbody>
                </table>
                <br></br>
                <input type="submit" value="Save Changes"></input>
            </div>
        )
    }
}