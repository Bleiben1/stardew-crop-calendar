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
            seasons: [{id: 0, seasonName:"Spring"}],
            cropSeason: [],
            current_day:0
        }
        this.changeShowCropSelect = this.changeShowCropSelect.bind(this)
    }

    _getSeasonsList = async () => {
        const response =
        await fetch("/season",
            { headers: {'Content-Type': 'application/json'}}
        )
        this.setState({
            seasons: await response.json()
        })
    }

    _getCropSeason = async () => {
        const response =
        await fetch(`/cropSeason/getCropPerSeason/${encodeURIComponent(this.state.current_season + 1)}`,
            { headers: {'Content-Type': 'application/json'} }
        )
        this.setState({
            cropSeason: await response.json()
        })
        console.log("_getCropSeason => ", this.state.cropSeason)
    }

    componentDidMount() {
        this._getSeasonsList()
        
    }

    changeNextSeason = () => {
        if (this.state.current_season < this.state.seasons.length - 1) {
            this.setState({current_season: this.state.current_season + 1})
        }
    }

    changeShowCropSelect(_childDay) {
        this._getCropSeason()
        this.setState({
            current_day: _childDay,
            show_cropSelect: !this.state.show_cropSelect
        })
    }

    changePrevSeason = () => {
        if (this.state.current_season > 0) {
            this.setState({current_season: this.state.current_season - 1})
        }
    }

    render(){
        const current = this.state.current_season
        const season = this.state.seasons[current].seasonName
        return (
            <div id="conte">
                { this.state.show_cropSelect &&
                    <div className="calendar cropSelect">
                        {/*<CropSelect info={days[0]}/>*/}
                        <CropSelect cropSeason={this.state.cropSeason} day={this.state.current_day}/>
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
                            <CalendarDay day={3} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={4} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={5} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={6} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={7} showCropSelect={this.changeShowCropSelect}/>
                        </tr>
                        <tr>
                            <CalendarDay day={8} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={9} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={10} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={11} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={12} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={13} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={14} showCropSelect={this.changeShowCropSelect}/>
                        </tr>
                        <tr>
                            <CalendarDay day={15} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={16} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={17} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={18} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={19} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={20} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={21} showCropSelect={this.changeShowCropSelect}/>
                        </tr>
                        <tr>
                            <CalendarDay day={22} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={23} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={24} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={25} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={26} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={27} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay day={28} showCropSelect={this.changeShowCropSelect}/>
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