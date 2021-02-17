import React, {Component} from 'react'
import logoImg from '../../imgs/cropCalendarLogo.png'
import './logo.css'

export default class UserLoginSection extends Component {

    render() {
        return (
            <div className="userLoginSection">
                <ul className="logo">
                    <li>
                        <img className="logoImg" src={logoImg} alt="logo"></img>
                    </li>
                </ul>
            </div>
        )
    }
}