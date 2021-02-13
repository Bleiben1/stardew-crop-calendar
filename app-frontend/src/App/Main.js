import './Main.css'
import Calendar from './components/calendar.js'
//import UserLoginSection from './components/userLogin.js'
import DownNavBar from './components/downNavBar.js'

function Main() {
    return (
        <div className="container">
            {/*<UserLoginSection />*/}
            <div className="main-content">
                <Calendar />
            </div>
            <DownNavBar />
        </div>
    )
}

export default Main;