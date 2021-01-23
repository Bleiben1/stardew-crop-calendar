import './Main.css'
import Calendar from './components/calendar.js'
import UserLoginSection from './components/userLogin.js'

function Main() {
    return (
        <div className="container">
            <UserLoginSection />
            <div className="main-content">
                <Calendar />
            </div>
        </div>
    )
}

export default Main;