import React, { useState } from 'react';
import './index.css';
import scpdata from "./data.json"
import SCPimg from "./images/SCP2.jpg"

function ComponentOne() {
    const scp2 = scpdata[0];

    return (
        <div className="container">
            <div className="card-body">
                <img src={SCPimg}></img>
                <h5 className="scp-title">{scp2.Creature}</h5>
                <p className="card-text">{scp2.Type}</p>
                <p className="card-text">{scp2.Description}</p>
            </div>
        </div>
    );
}

export default ComponentOne;
