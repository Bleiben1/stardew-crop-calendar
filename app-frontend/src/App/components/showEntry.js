import React, {Component} from 'react'

export default class ShowEntry extends Component {
    constructor(props) {
        super(props)
        this.deleteUserCrop = this.deleteUserCrop.bind(this)
    }

    deleteUserCrop() {
        this.props.deleteUserCrop( this.props.index)
    }

    render() {
        if (this.props.isHarvest === true) {
            return( 
                <tr>
                    <td></td>
                    <td></td>
                    <td>{this.props.name}</td>
                    <td><img src={this.props.image} alt={this.props.name} className="cropImg"></img></td>
                    <td></td>
                </tr>
            )
        }

        return(
            <tr>
                <td><img src={this.props.image} alt={this.props.name} className="cropImg"></img></td>
                <td>{this.props.name}</td>
                <td></td>
                <td></td>
                <td onClick={this.deleteUserCrop} >&#10006;</td>
            </tr>
        )
        
    }

}

/*function Main(props) {

    if (props.isHarvest === true) {
        return( 
            <tr>
                <td></td>
                <td></td>
                <td>{props.name}</td>
                <td><img src={props.image} alt={props.name} className="cropImg"></img></td>
                <td></td>
            </tr>
        )
    } else {
        return(
            <tr>
                <td><img src={props.image} alt={props.name} className="cropImg"></img></td>
                <td>{props.name}</td>
                <td></td>
                <td></td>
                <td >&#10006;</td>
            </tr>
        )
    }
}

export default Main; */