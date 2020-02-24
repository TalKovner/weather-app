import React from 'react';
import '../style/AddCity.css'

function AddCity(props) {
    return (
        <div className="card">
            <h4 className='title'>ADD CITY</h4>
            <div className="plus-icon" onClick={() => {props.handleToggle()}}>
                <span className="plus">+</span>
            </div>
            <img src={require('../images/buildings.jpg')} style={{width: '149px', margin: '3px 16px'}} alt=""/>
        </div>
    )
}
    
export default AddCity;