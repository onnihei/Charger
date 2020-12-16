import React from 'react'

import './App.css';

function Point (props) {
    return ( 
        <div className="Point">
            <h3>{props.name}</h3>
            <p>{props.address}</p>
            <h3>{props.info}</h3>
        </div>
    );
}

export default Point