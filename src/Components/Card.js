import React, { Component } from 'react';
import '../style/Card.css';
import axios from 'axios';

const BneiBrak = 'http://api.openweathermap.org/data/2.5/weather?q=Bnei%20Brak&appid=a8e13f64a58d15932c151dfc791e4d96';

class Card extends Component {
    constructor() {
        super()
        this.state = {
            temp: 0,
        }
    }

    componentDidMount() {
        axios.get(BneiBrak).then(res => {
            const weather = res.data;
            this.setState({ temp: weather.main.temp })
        })
    }    

    render() {
        return (
            <div className="card">
                <h4 className='title'>{this.props.title}</h4>
                <img src="http://openweathermap.org/img/wn/02d@2x.png"></img>
                <div className="deg-main">{(this.state.temp - 272.15).toFixed(0)}&deg;</div>
            </div>
        )
    }
}

export default Card;