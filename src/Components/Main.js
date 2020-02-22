import React from 'react';
import Card from './Card'
import '../style/Main.css'

function Main() {
    let popUp = React.createRef();

    return (
        <div className="main">
            <Card city="Bnei Brak" />
            <Card city="new york" />
            <Card city="paris" />

            {/* ----------------*/}

            <div className="bg-modal" ref={popUp} onClick={() => {popUp.current.remove()}}>
               <div className="modal-content"></div>
            </div>
        </div>
    )
}

export default Main;