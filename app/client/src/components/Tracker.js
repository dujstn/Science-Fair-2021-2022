import React, { useState, useEffect } from 'react';
import Button from "./Button";
import Samples from "./Samples";
import Submit from "./Submit";

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

    const postInput = (e) =>{
        e.preventDefault();
        const lat = document.querySelector("#latInput")
        const output = document.createElement("div")
        output.appendChild(<Submit i={lat} />)

    }

    return (
        <div id>
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
