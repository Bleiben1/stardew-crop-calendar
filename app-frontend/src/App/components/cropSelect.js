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
                { /*<h3 className="cropSelectDay">Day {this.props.info.day}</h3>*/ }
                <h3 className="cropSelectDay">Day {this.props.day}</h3>
                <form>
                    <label for="cropsAvailable">Crops available</label>
                    <br></br>
                    { this.props.cropSeason &&
                        this.props.cropSeason.map(c => 
                            <img src={c.imgURL} alt={c.cropName} className="cropImg"></img>
                        )
                    }
                    <select id="cropsAvailable" name="cropsAvailable">
                        { /*<option value="australia">Australia</option>*/ }
                        { this.props.cropSeason &&
                            this.props.cropSeason.map(c => 
                                <option value={c.cropName}>{c.cropName}</option>
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