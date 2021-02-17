import React, {Component} from 'react'
import logoImg from '../../imgs/steamLogin.png'
import './userLogin.css'

export default class UserLoginSection extends Component {

    render() {
        return (
            <div className="userLoginSection">
                <ul className="logo">
                    <li>
                        <img src={logoImg} alt="logo"></img>
                    </li>
                </ul>
            </div>
        )
    }
}