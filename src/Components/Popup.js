import React from 'react';
import '../style/Popup.css';
import axios from 'axios';

class Popup extends React.Component {
    constructor() {
        super();
        this.state = {
            showWarn: false,
            isDisabled: true,
            cityToAdd: '',
        }
    }

    findCity(cityName) {
        if (cityName.length > 2) {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=a8e13f64a58d15932c151dfc791e4d96`)
            .then(res => {
                this.setState({
                    showWarn: false,
                    isDisabled: false,
                    cityToAdd: cityName,
                });
            }).catch(err => {
                this.setState({ showWarn: true });
            })
        } else {
            this.setState({ showWarn: false });
        }
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <label for="city" className="label-city">Select City</label>
                    <input type="text" name="city" placeholder="Choose City..." className="input-city" onChange={(event) => { this.findCity(event.currentTarget.value) }}></input>
                    { this.state.showWarn ? <p className="warning">city not found</p> : null }
                    <button onClick={() => {
                        this.props.addNewCity(this.state.cityToAdd);
                        this.props.closePopup();
                    }} className="close-button" disabled={ this.state.isDisabled }>ADD CITY</button>
                    <button onClick={this.props.closePopup} className="close-button">close me</button>
                </div>
            </div>
        );
    }
}

export default Popup;