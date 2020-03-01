import React from 'react';
import '../style/DailyWeather.css'

function DailyWeather(props) {
    return (
        <div className="daily-container">
            <div className="day-in-week">{props.data.day}</div>
            <img className="daily-icon" src={require(`../images/${props.data.condition.toLowerCase()}.png`)} alt="icon"/>
            <div className="daily-deg">{props.data.temp}&deg;</div>
            <div className="daily-condition">{props.data.condition.toUpperCase()}</div>
        </div>
    )
}

export default DailyWeather;
// src\images\snow.png
// C:\Users\אלי\Desktop\לימודים טל\react\weather\weather-app\src\images\snow.png