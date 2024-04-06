import React, { useState } from 'react';
import './index.css';
import scpdata from "./data.json"
import SCPimg from "./images/SCP-005.jpg"

function ComponentFour() {
    const scp5 = scpdata[3];

    return (
        <div className="container">
            <div className="card-body">
                <img src={SCPimg}></img>
                <h5 className="scp-title">{scp5.Creature}</h5>
                <p className="card-text">{scp5.Type}</p>
                <p className="card-text">{scp5.Description}</p>
            </div>
        </div>
    );
}

export default ComponentFour;
