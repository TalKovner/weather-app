import React from 'react';
import Card from './Card'
import '../style/Main.css'

function Main() {
    return (
        <div className="main">
            <Card city="Bnei Brak" />
            <Card city="new york" />
            <Card city="paris" />
        </div>
    )
}

export default Main;