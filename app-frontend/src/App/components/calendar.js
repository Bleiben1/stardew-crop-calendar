import './calendar.css'
import arrow_left from '../../imgs/arrow_left.png'
import arrow_right from '../../imgs/arrow_right.png'
import potato_img from '../../imgs/crops/potato.png'
import CalendarDay from './calendar_day.js'
import CropSelect from './cropSelect.js'
import React, {Component} from 'react'

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
            show_cropSelect: false,
            current_season: 0,
            seasons: [{id: 0, seasonName:"Spring"}]
        }
    }

    _getSeasonsList = async () => {
        const response =
        await fetch("/season",
            { headers: {'Content-Type': 'application/json'}}
        )
        this.setState({
            current_season: 1,
            seasons: await response.json()
        })
    }

    _getCropSeason = async () => {
        const response =
        await fetch(`/cropSeason/getCropPerSeason/${encodeURIComponent(this.state.current_season)}`,
            { headers: {'Content-Type': 'application/json'} }
        )
        console.log("_getCropSeason => ", await response.json())
    }

    componentDidMount() {
        this._getSeasonsList()
        
    }

    changeNextSeason = () => {
        if (this.state.current_season < this.state.seasons.length - 1) {
            this.setState({current_season: this.state.current_season + 1})
        }
    }

    changeShowCropSelect = () => {
        this._getCropSeason()
        this.setState({
            show_cropSelect: !this.state.show_cropSelect
        })
    }

    changePrevSeason = () => {
        if (this.state.current_season > 0) {
            this.setState({current_season: this.state.current_season - 1})
            this.changeShowCropSelect()
        }
    }

    render(){
        const current = this.state.current_season
        const season = this.state.seasons[current].seasonName
        return (
            <div id="conte">
                { this.state.show_cropSelect &&
                    <div className="calendar cropSelect">
                        <CropSelect info={days[0]}/>
                    </div>
                }
                <div className="calendar">
                    <table>
                        <tr>
                            <th className="noBorder" colSpan="7">
                                <img src={arrow_left} alt="prev_season" className="prev_next_button" 
                                onClick={this.changePrevSeason} ></img>
                                { season }
                                <img src={arrow_right} alt="next_season" className="prev_next_button"
                                onClick={this.changeNextSeason} ></img>
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
                            <CalendarDay day={1} info={days[0]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={2} showCropSelect={this.changeShowCropSelect}/>
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
            </div>
        )
    }
}

/*function Main() {
    
}

export default Main;*/