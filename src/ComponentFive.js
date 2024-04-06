import React, { useState } from 'react';
import './index.css';
import scpdata from "./data.json"
import SCPimg from "./images/SCP6.jpg"

function ComponentFive() {
    const scp6 = scpdata[4];

    return (
        <div className="container">
            <div className="card-body">
                <img src={SCPimg}></img> 
                <h5 className="scp-title">{scp6.Creature}</h5>
                <p className="card-text">{scp6.Type}</p>
                <p className="card-text">{scp6.Description}</p>
            </div>
        </div>
    );
}

export default ComponentFive;
