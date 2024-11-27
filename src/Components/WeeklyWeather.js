import React, { Component } from "react";
import DailyWeather from "./DailyWeather";
import axios from "axios";
import "../style/WeeklyWeather.css";

const conditionMap = [
  [200, "Thunderstorm"],
  [300, "Drizzle"],
  [500, "Rain"],
  [600, "Snow"],
  [630, "Rain"],
  [800, "Clear"],
  [801, "Clouds"],
];

class WeeklyWeather extends Component {
  constructor() {
    super();
    this.state = {
      daysData: [],
    };
  }

  componentDidMount() {
    let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=cfeaa9f5065e15ce12b3aa499e50586a`;
    axios.get(apiUrl).then((res) => {
      const forcastWeatherObj = res.data;
      const millSecInDay = 86400000;
      let list = forcastWeatherObj.list;
      let daysCount = 0;
      let currentDay = list[0].dt_txt.split(" ")[0];
      let dataPerDay = [];
      let averageData;
      dataPerDay.push([]);

      for (let i = 0; i < list.length; i++) {
        if (list[i].dt_txt.split(" ")[0] === currentDay) {
          dataPerDay[daysCount].push(list[i]);
        } else {
          currentDay = list[i].dt_txt.split(" ")[0];
          dataPerDay.push([]);
          daysCount++;
          dataPerDay[daysCount].push(list[i]);
        }
      }

      if (dataPerDay.length === 6) {
        dataPerDay.splice(0, 1);
      }

      averageData = dataPerDay.map((dayDataArray, index) => {
        let dayAverage = {};
        let avarageTemp = 0;
        let avarageContitionID = 0;
        dayDataArray.forEach((threeHoursData) => {
          avarageTemp += threeHoursData.main.temp;
          avarageContitionID += threeHoursData.weather[0].id;
        });

        dayAverage.temp = (avarageTemp / dayDataArray.length - 272.15).toFixed(
          0
        );
        dayAverage.condition = handleCondition(
          avarageContitionID / dayDataArray.length
        );
        dayAverage.day = new Date(
          new Date().getTime() + millSecInDay * (index + 1)
        )
          .toDateString()
          .split(" ")[0];

        return dayAverage;
      });

      this.setState({
        daysData: averageData,
      });
    });
  }

  render() {
    const daysComponents = this.state.daysData.map((dayData) => (
      <DailyWeather data={dayData} />
    ));
    return <div className="weekly-container">{daysComponents}</div>;
  }
}

export default WeeklyWeather;

function handleCondition(condition) {
  let conditionDesc = "";
  for (let i = 0; i < conditionMap.length; i++) {
    if (condition >= conditionMap[i][0]) {
      conditionDesc = conditionMap[i][1];
    }
  }

  return conditionDesc;
}
