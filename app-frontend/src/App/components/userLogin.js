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
        const response =
        await fetch("/user/isLogedIn",
            { 
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            }
        )
        console.log(await response)
    }

    async checkUserLoginStatus(){
        const response =
          await fetch("/account",
            { headers: {'Content-Type': 'application/json'}}
          )
        console.log(await response.json())
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