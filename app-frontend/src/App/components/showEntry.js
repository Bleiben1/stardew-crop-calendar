import React from 'react'

function Main(props) {

    if (props.isHarvest) {
        return( 
            <tr>
                <td></td>
                <td></td>
                <td>{props.name}</td>
                <td><img src={props.image} alt={props.name} className="cropImg"></img></td>
            </tr>
        )
    } else {
        return(
            <tr>
                <td><img src={props.image} alt={props.name} className="cropImg"></img></td>
                <td>{props.name}</td>
                <td></td>
                <td></td>
            </tr>
        )
    }
}

export default Main;