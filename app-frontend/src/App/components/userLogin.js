import React, {Component} from 'react'
import loginButtonImg from '../../imgs/steamLogin.png'
import './userLogin.css'

export default class UserLoginSection extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: false,
            user: "empty"
        }
        
    }
    

    /*componentDidMount = async () => {
        const response =
        await fetch("/user/isLogedIn",
            { 
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            }
        )
        console.log(response)
        if (response.status === 200) {
            this.setState({
                isUserLogin: true
            })
        }
    }*/

    componentDidMount() {
        fetch("http://localhost:3001/auth/success", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
        .then(response => {
            if (response.status === 200) return response.json()
            throw new Error("failed to authenticate user")
          })
        .then(responseJson => {
            this.setState({
            authenticated: true,
            user: responseJson.user
            })
        })
        .catch(error => {
            this.setState({
                authenticated: false,
                error: "Failed to authenticate user"
            })
        })
    }

    render() {
        const { authenticated } = this.state
        return (
            <div className="userLoginSection">
                <ul>
                    {
                        authenticated ? (
                            <li onClick={this._handleLogoutClick}>Logout</li>
                        ) : (
                            <li onClick={this._handleSignInClick}>Login</li>
                        )
                    }
                </ul>
            </div>
        )
    }

     _handleSignInClick = () => {
        // Authenticate using via passport api in the backend
        // Open Steam login page
        window.open("http://localhost:3001/auth/steam", "_self");
    };

    _handleLogoutClick = () => {
        // Logout using Steam passport api
        // Set authenticated state to false in the HomePage component
        window.open("http://localhost:3001/auth/logout", "_self");
        this.handleNotAuthenticated();
    };

    _handleNotAuthenticated = () => {
        this.setState({ authenticated: false });
    };

}