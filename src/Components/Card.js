import React from 'react';
import '../style/Card.css';


function Card(props) {
    return (
        <div className="card">
            <h4 className='title'>{props.title}</h4>
        </div>
    )
}

export default Card;