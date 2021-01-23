import React, {Component} from 'react'
import loginButtonImg from '../../imgs/steamLogin.png'
import './userLogin.css'

export default class UserLoginSection extends Component {
    constructor() {
        super()
        this.state = {
            isUserLogin: false
        }
        
    }
    

    componentDidMount = async () => {

    }

    render() {
        return (
            <div className="userLoginSection">
            {
                this.state.isUserLogin ? (
                    <img src={loginButtonImg} alt="alreadyLoggedIn" className="prev_next_button" ></img>
                ) : (
                    //<img src={loginButtonImg} alt="login with Steam Account" className="prev_next_button" onClick={() => imageClick()}></img>
                    <img src={loginButtonImg} alt="login with Steam Account" className="prev_next_button" ></img>
                )
            }
            </div>
        )
    }

}