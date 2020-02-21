import React, { Component } from 'react';
import '../style/Card.css';
import axios from 'axios';
import MinMaxTemp from './MinMaxTemp';

class Card extends Component {
    constructor() {
        super()
        this.apiUrl = ""
        this.state = {
            temp: 0,
            iconDescription: "",
            mainDescription: "",
            minTemp: 0,
            maxTemp: 0,
        }
    }

    componentDidMount() {
        this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(this.props.city)}&appid=a8e13f64a58d15932c151dfc791e4d96`;
        axios.get(this.apiUrl).then(res => {
            const weatherObj = res.data;
            this.setState({
                temp: (weatherObj.main.temp - 272.15).toFixed(0),
                iconDescription: weatherObj.weather[0].description,
                mainDescription: weatherObj.weather[0].main.toUpperCase(),
                minTemp: (weatherObj.main.temp_min - 272.15).toFixed(0),
                maxTemp: (weatherObj.main.temp_max - 272.15).toFixed(0),
            })
        })
    }

    render() {
        return (
            <div className="card">
                <h4 className='title'>{this.props.city.toUpperCase()}</h4>
                <img className="icon" src="http://openweathermap.org/img/wn/02d@2x.png" alt={`${this.state.iconDescription}`}></img>
                <div className="deg-main">{this.state.temp}&deg;</div>
                <div className="main-description">{this.state.mainDescription}</div>
                <div className="minmax-container">
                    <MinMaxTemp temp={this.state.minTemp} iconName="arrow_drop_down" tempDesc="Min" color="aqua" />
                    <MinMaxTemp temp={this.state.maxTemp} iconName="arrow_drop_up" tempDesc="Max" color="red" />
                </div>
            </div>
        )
    }
}

export default Card;