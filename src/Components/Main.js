import React, { Component } from 'react';
import Card from './Card'
import Popup from './Popup'
import CityDetails from './CityDetails'
import AddCity from './AddCity';
import BackButton from './BackButton';
import '../style/Main.css'

// let cities = ["Bnei Brak", "new york", "paris"];

class Main extends Component {
    constructor(props) {
        super(props);

        let cities = localStorage.getItem('cities');

        if (cities){
            cities = JSON.parse(`["${cities.split(',').join('","')}"]`);
        } else {
            cities = []
        }

        this.state = {
            showPopup: false,
            citiesName: cities,
            showCards: true,
            cityOnFocus: ''
        };
    }
    
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    addNewCity(cityName) {
        this.setState(prevState => {
            let citiesName = prevState.citiesName;
            citiesName.push(cityName)
            localStorage.setItem('cities', citiesName);
            return {
                citiesName
            }
        });
    }

    removeCity(cityToRemove) {
        this.setState(prevState => {
            let newCities = prevState.citiesName.filter(city => city !== cityToRemove);
            localStorage.setItem('cities', newCities);
            return { citiesName: newCities };
        });
    }

    toggleCards(istoggle, city) {
        this.setState({ 
            showCards: istoggle,
            cityOnFocus: city, 
        });
    }

    render() {
        let cardsComponents = this.state.citiesName.map(
            currentCity => <Card
                                key={currentCity}
                                city={currentCity}
                                removeCity={this.removeCity.bind(this)}
                                toggleCards={this.toggleCards.bind(this)}
                           /> );

        return (
            <div className="main">
                { this.state.showCards ? cardsComponents : null}
                { this.state.showCards ? <AddCity handleToggle={this.togglePopup.bind(this)} /> : null }

                {
                    this.state.showPopup ?
                        <Popup
                            text='Click "Close Button" to hide popup'
                            closePopup={this.togglePopup.bind(this)}
                            addNewCity={this.addNewCity.bind(this)}
                        />
                    : null
                }
                { !this.state.showCards ? <BackButton back={this.toggleCards.bind(this)}/> : null }
                { !this.state.showCards ? <CityDetails city={this.state.cityOnFocus}/> : null }

            </div>
        )
    }
}

export default Main;