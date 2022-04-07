import React, { useState } from "react";
import { submits } from "./submits";
import { predictsBrk } from "./predictsBrk";

const Tracker = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [size, setSize] = useState(0.005);
  const [inso, setInso] = useState(0);
  const [prod, setProd] = useState();
  const [pred, setPred] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  async function submitData() {
    setIsLoading(true);
    const object = {
      latitude: lat,
      longitude: long,
      arrSize: size,
      arrProd: prod,
    };
    const rawResult = await submits(object);
    if (rawResult) {
      setInso(rawResult.locInso.toFixed(3));
      object.insolation = inso;

      const response = await predictsBrk(object);
      if (response) {
        setPred(response.success.toFixed(3));
        console.log("Success: ", response.success);
      }
    }
    setIsLoading(false);
  }
  return (
    <div className="tracker-container">
      <h1>Solar Tracker - Breakeven Price</h1>
      <input
        type="number"
        className="field"
        id="latfield"
        placeholder="Enter latitude (-90 to 90)"
        onChange={(update) => setLat(update.target.value)}
      />
      <input
        type="number"
        className="field"
        id="longfield"
        placeholder="Enter longitude (-180 to 180)"
        onChange={(update) => setLong(update.target.value)}
      />
      <select onChange={(update) => setSize(update.target.value)}>
        <option value="0.005">Residential (5kW)</option>
        <option value="0.2">Community/Commercial (200kW)</option>
        <option value="50">Utility (50MW)</option>
      </select>
      <input
        type="number"
        className="field"
        id="prodfield"
        placeholder="First Year Generation Total (MWh)"
        onChange={(update) => setProd(update.target.value)}
      />

      <button
      className="submit-button"
        onClick={() => {
          submitData();
          document.querySelector("#latfield").value = undefined;
          document.querySelector("#longfield").value = undefined;
        }}
      >
        <a>Submit</a>
      </button>
      <span>Latitude Entered: {lat}</span>
      <span>Longitude Entered: {long}</span>
      <span>Array Size Entered: {size}</span>
      <span>Array Generation Total: {prod}</span>
      {isLoading && <span>Loading...</span>}
      {isLoading ? (
        false
      ) : (
        <span>Annual Daily Insolation Average of Location: {inso} kWh/m^2</span>
      )}
      {isLoading ? false : <span>Predicted Breakeven Price: {pred} $/MWh</span>}
      </div>
  );
};

export default Tracker;
