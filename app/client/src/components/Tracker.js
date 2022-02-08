import React, { useState, useEffect } from 'react';
import Button from "./Button";
import Samples from "./Samples";
import {Submit} from "./submit";

const Tracker = () => {
    const logInput = (e) => {
        e.preventDefault();
        const lat = document.querySelector("#latInput");
        const long = document.querySelector("#longInput");
        const cap = document.querySelector("#capInput");
        console.log(lat.value)
        console.log(long.value)
        console.log(cap.value)
        lat.value = "";
        long.value = "";
        cap.value = "";
    }

    const clearOutput = (div) => {
        if (div.firstChild){
            div.removeChild(div.firstChild)
        }
    }

    const postInput = (e) =>{
        const outputDiv = document.createElement("div")
        outputDiv.setAttribute("id", "outputID")
        e.preventDefault();
        clearOutput(outputDiv)
        const lat = document.querySelector("#latInput")
        const pingBack = Submit(lat)
        
        const output = document.createTextNode(pingBack)
        outputDiv.appendChild(output)
        document.querySelector("#formID").appendChild(outputDiv)

    }

    return (
        <div id="formID">
            <form className="form" action="#" method="post" id="trackerForm">
                <label className="label">Array Latitude</label>
                <input type="text" id="latInput" placeholder="Latitude"></input><br></br>
                <label className="label">Array Longitude</label>
                <input type="text" id="longInput" placeholder="Longitude"></input><br></br>
                <label className="label">Array Capacity</label>
                <input type="text" id="capInput" placeholder="Capacity"></input><br></br>
                <Button text="Submit" onClick = {postInput}/>
            </form>
            <Samples />
        </div>
  );
};

export default Tracker;
