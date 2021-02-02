import './calendar.css'
import arrow_left from '../../imgs/arrow_left.png'
import arrow_right from '../../imgs/arrow_right.png'
import CalendarDay from './calendar_day.js'
import CropSelect from './cropSelect.js'
import React, {Component} from 'react'

var days = [
    {day: 1, data: [
                {
                    name: ["potato_img"], 
                    image: ["https://bleiben1.github.io/stardew_crops/potato.png"]
                },
                {
                    name: ["parsnip_img"], 
                    image: ["https://bleiben1.github.io/stardew_crops/parsnip.png"]
                }
            ]
    },
    {
        day: 2,
        data: []
    },
    {
        day: 3,
        data: []
    },
    {
        day: 4,
        data: []
    },
    {
        day: 5,
        data: []
    }
    ,
    {
        day: 6,
        data: []
    },
    {
        day: 7,
        data: []
    },
    {
        day: 8,
        data: []
    },
    {
        day: 9,
        data: []
    },
    {
        day: 10,
        data: []
    },
    {
        day: 11,
        data: []
    },
    {
        day: 12,
        data: []
    },
    {
        day: 13,
        data: []
    },
    {
        day: 14,
        data: []
    },
    {
        day: 15,
        data: []
    },
    {
        day: 16,
        data: []
    },
    {
        day: 17,
        data: []
    },
    {
        day: 18,
        data: []
    },
    {
        day: 19,
        data: []
    },
    {
        day: 20,
        data: []
    },
    {
        day: 21,
        data: []
    },
    {
        day: 22,
        data: []
    },
    {
        day: 23,
        data: []
    },
    {
        day: 24,
        data: []
    },
    {
        day: 25,
        data: []
    },
    {
        day: 26,
        data: []
    },
    {
        day: 27,
        data: []
    },
    {
        day: 28,
        data: []
    },
]

export default class Calendar extends Component {
    constructor() {
        super()
        this.state = {
            show_cropSelect: false,
            current_season: 0,
            seasons: [{id: 0, seasonName:"Spring"}],
            cropSeason: [],
            current_day:0,
            userCrop: []
        }
        this.changeShowCropSelect = this.changeShowCropSelect.bind(this)
        this.changeUserCrop = this.changeUserCrop.bind(this)
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

    changePrevSeason = () => {
        if (this.state.current_season > 0) {
            this.setState({current_season: this.state.current_season - 1})
        }
    }

    changeShowCropSelect(_childDay) {
        this._getCropSeason()
        this.setState({
            current_day: _childDay,
            show_cropSelect: !this.state.show_cropSelect
        })
    }

    changeUserCrop(_childUserCrop) {
        console.log(" _childUserCrop ", _childUserCrop)
        console.log("days before ", days)
        let found = -1
        days.map( (uc, index) => uc.day === this.state.current_day ? 
                found = index
            : 
                found = found)
        if ( found !== -1) {
            days[found] = _childUserCrop
        } else {
            days.push(_childUserCrop)
        }
        console.log("days after ", days)
    }


    componentDidUpdate() {
        console.log("calendar componentDidUpdate this.state.userCrop => ", this.state.userCrop)
    }

    render(){
        const current = this.state.current_season
        const season = this.state.seasons[current].seasonName
        return (
            <div id="conte">
                { this.state.show_cropSelect &&
                    <div className="calendar cropSelect">
                        {/*<CropSelect info={days[0]}/>*/}
                        <CropSelect cropSeason={this.state.cropSeason} day={this.state.current_day} changeUserCrop={this.changeUserCrop}/>
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
                            <CalendarDay info={days[0]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[1]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[2]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[3]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[4]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[5]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[6]} showCropSelect={this.changeShowCropSelect}/>
                        </tr>
                        <tr>
                            <CalendarDay info={days[7]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[8]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[9]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[10]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[11]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[12]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[13]} showCropSelect={this.changeShowCropSelect}/>
                        </tr>
                        <tr>
                            <CalendarDay info={days[14]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[15]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[16]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[17]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[18]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[18]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[20]} showCropSelect={this.changeShowCropSelect}/>
                        </tr>
                        <tr>
                            <CalendarDay info={days[21]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[22]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[23]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[24]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[25]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[26]} showCropSelect={this.changeShowCropSelect}/>
                            <CalendarDay info={days[27]} showCropSelect={this.changeShowCropSelect}/>
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