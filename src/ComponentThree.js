import React, { useState } from 'react';
import './index.css';
import scpdata from "./data.json"
import SCPimg from "./images/SCP004_door.jpg"

function ComponentThree() {
    const scp4 = scpdata[2];

    return (
        <div className="container">
            <div className="card-body">
                <img src={SCPimg}></img>
                <h5 className="scp-title">{scp4.Creature}</h5>
                <p className="card-text">{scp4.Type}</p>
                <p className="card-text">{scp4.Description}</p>
            </div>
        </div>
    );
}

export default ComponentThree;
