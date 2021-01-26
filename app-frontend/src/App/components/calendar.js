import './calendar.css'
import arrow_left from '../../imgs/arrow_left.png'
import arrow_right from '../../imgs/arrow_right.png'
import potato_img from '../../imgs/crops/potato.png'
import CalendarDay from './calendar_day.js'
import React, {Component} from 'react'

var seasons = ["Spring", "Summer", "Fall", "Winter"]
var current_season = 0

var days = [
    {day: 1, data: [
                {
                    name: ["potato_img"], 
                    image: [potato_img]
                },
                {
                    name: ["parsnip_img"], 
                    image: ["https://bleiben1.github.io/stardew_crops/parsnip.png"]
                }
            ]
    }
]

export default class Calendar extends Component {
    constructor() {
        super()
        this.state = {
             data: "not defined yet"
        }
    }

    componentDidMount = async () => {
        const response =
        await fetch("/cropSeason/getCropPerSeason/"+(current_season+1),
            { headers: {'Content-Type': 'application/json'}}
        )
        console.log(await response.json())
    }

    render(){
        return (
            <div className="calendar">
                <table>
                    <tr>
                        <th className="noBorder" colSpan="7">
                            <img src={arrow_left} alt="prev_season" className="prev_next_button" ></img>
                            {seasons[current_season]}
                            <img src={arrow_right} alt="next_season" className="prev_next_button"></img>
                        </th>
                    </tr>
                    <tr>
                        <th className="noRightBorder">M</th>
                        <th className="noRightBorder">T</th>
                        <th className="noRightBorder">W</th>
                        <th className="noRightBorder">Th</th>
                        <th className="noRightBorder">F</th>
                        <th className="noRightBorder">Sa</th>
                        <th>Su</th>
                    </tr>
                    <tr>
                        <th className="solid_boder">
                            <CalendarDay day={1} info={days[0]}/>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li><p>2</p></li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li><p>3</p></li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li><p>4</p></li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li><p>5</p></li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li><p>6</p></li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li><p>7</p></li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th className="solid_boder">
                            <ul>
                                <li>8</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>9</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>10</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>11</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>12</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>13</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>14</li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th className="solid_boder">
                            <ul>
                                <li>15</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>16</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>17</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>18</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>19</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>20</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>21</li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th className="solid_boder">
                            <ul>
                                <li>22</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>23</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>24</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>25</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>26</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>27</li>
                            </ul>
                        </th>
                        <th className="solid_boder">
                            <ul>
                                <li>28</li>
                            </ul>
                        </th>
                    </tr>
                </table> 
            </div>
        )
    }
}

/*function Main() {
    
}

export default Main;*/