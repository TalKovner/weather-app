import React from 'react';
import '../style/BackButton.css'

function BackButton(props) {
    return (
        <div className="back-button" onClick={() => props.back(true, "")}>
            <i className="material-icons">
                arrow_back
            </i>
        </div>
    )
}

export default BackButton;