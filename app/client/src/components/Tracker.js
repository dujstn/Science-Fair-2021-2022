import React, { useEffect, useState } from "react";
import { submit } from "./submit";
import { onLoad } from "./onLoad";

const Tracker = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [size, setSize] = useState(0);
  const [inso, setInso] = useState(0);
  const [load, setLoad] = useState("Load Failed");

  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("DATA IS LOADING")
    const data = onLoad()[0]
    const status = onLoad()[1]
    console.log("DATA LOADED")
    if (status == true){
      setLoad("Load success")
    }
  }, [])

  async function submitData() {
    setIsLoading(true);
    const object = {
      latitude: lat,
      longitude: long,
      arrSize: size,
    };
    const rawResult = await submit(object);

    if (rawResult) {
      setResult(rawResult.lat);
      setResult1(rawResult.long);
      setResult2(rawResult.size);
      setInso(rawResult.locDNI);
    }
    setIsLoading(false);
  }
  return (
    <div className="flex-container">
      <input
        type="number"
        className="border"
        placeholder="Enter latitude (-90 to 90)"
        onChange={(update) => setLat(update.target.value)}
      />
      <input
        type="number"
        className="border"
        placeholder="Enter longitude (-180 to 180)"
        onChange={(update) => setLong(update.target.value)}
      />
      <select onChange={(update) => setSize(update.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
      </select>

      <button
        onClick={() => {
          submitData();
        }}
      >
        <a>hi</a>
      </button>
      {isLoading && <span>Loading...</span>}
      <span>Latitude Entered: {result}</span>
      <span>Longitude Entered: {result1}</span>
      <span>Array Size Entered: {result2}</span>
      <span>Average Annual DNI: {inso}</span>
      <span>Dataset Load: {load}</span>
    </div>
  );
};

export default Tracker;
