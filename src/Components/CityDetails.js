import React, { Component } from 'react';
import axios from 'axios';
import '../style/CityDetails.css';
import WeeklyWeather from './WeeklyWeather';

class CityDetails extends Component {
    constructor() {
        super();
        this.state = {
            humidity: 0,
            wind: 0,
            temp: 0,
            mainDescription: '',
        }
    }

    componentDidMount() {
        this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(this.props.city)}&appid=a8e13f64a58d15932c151dfc791e4d96`;
        axios.get(this.apiUrl).then(res => {
            const weatherObj = res.data;
            this.setState({
                temp: (weatherObj.main.temp - 272.15).toFixed(0),
                mainDescription: weatherObj.weather[0].main.toUpperCase(),
                humidity: weatherObj.main.humidity,
                wind: (weatherObj.wind.speed * 3.6).toFixed(0),
            })
        })
    }

    render() {
        return (
            <div className='rubberBand city-details'>
                <div className='up-section'>
                    <div className='extend-data'>
                        <div className='the-deg'>{this.state.temp}&deg;</div>
                        <div className="condition">{this.state.mainDescription}</div>
                        <div className='other-data'>
                            <span className="humidity">
                                <div>HUMIDITY</div>
                                {this.state.humidity}%
                            </span>
                            <span className="wind">
                                <div>WIND</div>
                                {this.state.wind} K / M
                            </span>
                        </div>
                    </div>
                    <div className='city-name'>
                        {this.props.city.toUpperCase()}
                    </div>
                </div>
                <div className='down-section'>
                    <WeeklyWeather city={this.props.city}/>
                </div>
            </div>
        )
    }
}

export default CityDetails;