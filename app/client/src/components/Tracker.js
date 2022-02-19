import React, { useState } from "react";
import { submit } from "./submit";
import { predicts } from "./predicts";

const Tracker = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [size, setSize] = useState(0.005);
  const [inso, setInso] = useState(0);
  const [load, setLoad] = useState("Not Loaded");
  const [pred, setPred] = useState(0);

  const [isLoading, setIsLoading] = useState(false);


  async function submitData() {
    setIsLoading(true);
    const object = {
      latitude: lat,
      longitude: long,
      arrSize: size,
    };
    const rawResult = await submit(object);
    if (rawResult) {      
      setInso(rawResult.locInso);
      object.insolation = inso

      const response = await predicts(object);
      if (response) {
        setLoad("Load success");
        setPred(response.success);
      }
    }
    setIsLoading(false);
  }
  return (
    <div className="flex-container">
      <input
        type="field"
        className="field"
        placeholder="Enter latitude (-90 to 90)"
        onChange={(update) => setLat(update.target.value)}
      />
      <input
        type="field"
        className="field"
        placeholder="Enter longitude (-180 to 180)"
        onChange={(update) => setLong(update.target.value)}
      />
      <select onChange={(update) => setSize(update.target.value)}>
        <option value="0.005">Residential (5kW)</option>
        <option value="0.2">Community/Commercial (200kW)</option>
        <option value="50">Utility (50MW)</option>
      </select>

      <button
        onClick={() => {
          submitData();
        }}
      >
        <a>Submit</a>
      </button>
      <span>Latitude Entered: {lat}</span>
      <span>Longitude Entered: {long}</span>
      <span>Array Size Entered: {size}</span>
      {isLoading && <span>Loading...</span>}
      {isLoading ? false : <span>Annual Daily Insolation Average of Location: {inso} kWh/m^2</span>}
      {isLoading ? false : <span>Predicted Annual Generation: {pred} MWh</span>}
      {isLoading ? false : <span>Dataset Load: {load}</span>}
    </div>
  );
};

export default Tracker;
