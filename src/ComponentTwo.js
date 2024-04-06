import React, { useState } from 'react';
import './index.css';
import scpdata from "./data.json"
import SCPimg from "./images/SCP3.jpg"

function ComponentTwo() {
    const scp3 = scpdata[1];

    return (
        <div className="container">
            <div className="card-body">
                <img src={SCPimg}></img>
                <h5 className="scp-title">{scp3.Creature}</h5>
                <p className="card-text">{scp3.Type}</p>
                <p className="card-text">{scp3.Description}</p>
            </div>
        </div>
    );
}

export default ComponentTwo;
