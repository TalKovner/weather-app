import React from 'react';
import '../style/MinMaxTemp.css'

function MinMaxTemp(props) {
    return (
        <div>
            <i className="material-icons arrow-icon" style={{color: props.color}}>
                {props.iconName}
            </i>
            {props.temp}
            <div className="minmax" style={{color: props.color}}>{props.tempDesc}</div>
        </div>
    )
}

export default MinMaxTemp;