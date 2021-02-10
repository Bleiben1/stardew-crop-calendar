import './calendar.css'
import arrow_left from '../../imgs/arrow_left.png'
import arrow_right from '../../imgs/arrow_right.png'
import CalendarDay from './calendar_day.js'
import CropSelect from './cropSelect.js'
import React, {Component} from 'react'

var days = [
    {day: 1, data: []},{day: 2, data: []},{day: 3, data: []},{day: 4, data: []},{day: 5, data: []},{day: 6, data: []},{day: 7, data: []},
    {day: 8, data: []},{day: 9, data: []},{day: 10, data: []},{day: 11, data: []},{day: 12, data: []},{day: 13, data: []},{day: 14, data: []},
    {day: 15, data: []},{day: 16, data: []},{day: 17, data: []},{day: 18, data: []},{day: 19, data: []},{day: 20, data: []},{day: 21, data: []},
    {day: 22, data: []},{day: 23, data: []},{day: 24, data: []},{day: 25, data: []},{day: 26, data: []},{day: 27, data: []},{day: 28, data: []}
]

export default class Calendar extends Component {
    constructor() {
        super()
        this.state = {
            show_cropSelect: false,
            current_season: 0,
            seasons: [{id: 0, seasonName:"Spring", data: {...days}}],
            cropSeason: [],
            current_day:0,
            current_dayCrop: [],
            userCrop: []
        }
        this.changeShowCropSelect = this.changeShowCropSelect.bind(this)
        this.changeUserCrop = this.changeUserCrop.bind(this)
        this.addHarvestCrop = this.addHarvestCrop.bind(this)
        this.deleteHarvestCrop = this.deleteHarvestCrop.bind(this)
    }

    loadDays = () => {
        console.log("calendar loadDays")
        if(!localStorage.getItem('stardewCropCalendar-calendarInfo')){
            console.log("calendar loadDays no previous info stored")
            const newSeasons = this.state.seasons.map((season) => {
                return {...season, data: JSON.parse(JSON.stringify(days))}
            })
            this.setState({seasons: newSeasons })
        } else {
            console.log("calendar loadDays previous info available")
            const json = localStorage.getItem('stardewCropCalendar-calendarInfo');
            const savedData = JSON.parse(json);
            this.setState({seasons: savedData })
        }
    }

    saveDays = () => {
        console.log("calendar saveDays")
        const json = JSON.stringify(this.state.seasons);
        localStorage.setItem('stardewCropCalendar-calendarInfo', json);
    }

    deleteStoredDays = () => {
        if(localStorage.getItem('stardewCropCalendar-calendarInfo')){
            localStorage.removeItem('stardewCropCalendar-calendarInfo')
        }
    }

    _getSeasonsList = async () => {
        console.log("calendar _getSeasonList")
        const response =
        await fetch("/season",
            { headers: {'Content-Type': 'application/json'}}
        )
        this.setState({
            seasons: await response.json()
        }, this.loadDays)
    }

    _getCropSeason = async () => {
        console.log("calendar _getCropSeason")
        const response =
        await fetch(`/cropSeason/getCropPerSeason/${encodeURIComponent(this.state.current_season + 1)}`,
            { headers: {'Content-Type': 'application/json'} }
        )
        this.setState({
            cropSeason: await response.json()
        })
    }

    componentDidMount() {
        console.log("calendar componentDidMount this.state.seasons => ", this.state.seasons)
        this._getSeasonsList()
    }

    storeLoadCalendar(next=false) {
        console.log("calendar storeLoadCalendar")
        const newCal = this.state.seasons
        newCal[this.state.current_season] = {...newCal[this.state.current_season], data: JSON.parse(JSON.stringify(days))}
        this.setState({seasons: newCal })
        if (next) {
            days = newCal[this.state.current_season + 1].data
        } else {
            days = newCal[this.state.current_season - 1].data
        }
    }

    changeNextSeason = () => {
        console.log("calendar changeNextSeason this.state.seasons => ", this.state.seasons)
        if (this.state.current_season < this.state.seasons.length - 1) {
            this.setState({current_season: this.state.current_season + 1})
            this.storeLoadCalendar(true)
        }
    }

    changePrevSeason = () => {
        console.log("calendar changePrevSeason")
        if (this.state.current_season > 0) {
            this.setState({current_season: this.state.current_season - 1})
            this.storeLoadCalendar()
        }
    }

    changeShowCropSelect(_childInfo) {
        console.log("calendar changeShowCropSelect")
        this._getCropSeason()
        this.setState({
            current_day: _childInfo.day,
            current_dayCrop: _childInfo.data,
            show_cropSelect: !this.state.show_cropSelect
        })
    }

    changeUserCrop(_childUserCrop) {
        console.log("calendar changeUserCrop")
        var index = _childUserCrop.day - 1
        days[index] = _childUserCrop
    }

    addHarvestCrop(_childCrop, _childDay) {
        console.log("calendar addHarvestCrop")
        let harvestDay = {...days[_childCrop.grow + _childDay - 1]}
        if( harvestDay.day < 28 ) {
            _childCrop.isHarvest = true
            harvestDay.data.push(_childCrop)
            this.changeUserCrop(harvestDay)
            if( _childCrop.regrowth > 0  ) {
                let newChildDay = _childDay
                newChildDay += _childCrop.regrowth
                console.log("new child day => ", newChildDay)
                this.addHarvestCrop(_childCrop, newChildDay)
            }
        }
    }

    deleteHarvestCrop(_childCrop, _childDay) {
        console.log("calendar deleteHarvestCrop")
        let harvestDay = {...days[_childCrop.grow + _childDay - 1]}
        if( harvestDay.day < 28 ) {
            let harvestIndex = -1
            harvestDay.data.map((c, index) => 
                {if (c.cropID === _childCrop.cropID & c.isHarvest === true & harvestIndex === -1) {
                    harvestIndex = index
                }
                return harvestIndex
            }
            )
            harvestDay.data.splice(harvestIndex,1)
            this.changeUserCrop(harvestDay)
            console.log("calendar addHarvestCrop")
            if( _childCrop.regrowth > 0  ) {
                let newChildDay = _childDay
                newChildDay += _childCrop.regrowth
                this.deleteHarvestCrop(_childCrop, newChildDay)
            }
        }
    }

    componentDidUpdate() {
        console.log("calendar componentDidUpdate")
        console.log("calendar componentDidUpdate this.state.seasons => ", this.state.seasons)
    }

    render(){
        const current = this.state.current_season
        const season = this.state.seasons[current].seasonName
        return (
            <div id="conte">
                { this.state.show_cropSelect &&
                    <div className="calendar cropSelect">
                        <CropSelect cropSeason={this.state.cropSeason} day={this.state.current_day} info={this.state.current_dayCrop} changeUserCrop={this.changeUserCrop} addHarvestCrop={this.addHarvestCrop} deleteHarvestCrop={this.deleteHarvestCrop}/>
                    </div>
                }
                <div className="calendar">
                    <table>
                        <tbody>
                            <tr>
                                <th className="noBorder" colSpan="7">
                                    <img src={arrow_left} alt="prev_season" title="Previous Season" className="prev_next_button"  
                                    onClick={this.changePrevSeason} ></img>
                                    { season }
                                    <img src={arrow_right} alt="next_season" title="Next Season" className="prev_next_button"
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
                                <CalendarDay info={days[19]} showCropSelect={this.changeShowCropSelect}/>
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
                        </tbody>
                    </table> 
                </div>
            </div>
        )
    }
}
