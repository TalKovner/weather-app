import React, { Component } from 'react';
import Card from './Card'
import Popup from './Popup'
import '../style/Main.css'
import AddCity from './AddCity'

let cities = ["Bnei Brak", "new york", "paris"];

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            citiesName: cities,
        };
    }
    // let popUp = React.createRef();
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    addNewCity(cityName) {
        this.setState(prevState => {
            let citiesName = prevState.citiesName;
            citiesName.push(cityName)
            return {
                citiesName
            }
        })
    }

    render() {
        let cardsComponents = this.state.citiesName.map(currentCity => <Card city={currentCity} />);
        return (
            <div className="main">
                {cardsComponents}

                <AddCity handleToggle={this.togglePopup.bind(this)}/>

                {this.state.showPopup ?
                    <Popup
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                        addNewCity={this.addNewCity.bind(this)}
                    />
                    : null
                }

            </div>
        )
    }
}

export default Main;