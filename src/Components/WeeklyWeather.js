import React from 'react';
import DailyWeather from './DailyWeather'

function WeeklyWeather(props) {
    return (
        <div>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
           <DailyWeather data={{day: 'sun' , icon: '4n', deg: 12 , desc: 'cloudy'}}/>
        </div>
    )
}

export default WeeklyWeather;