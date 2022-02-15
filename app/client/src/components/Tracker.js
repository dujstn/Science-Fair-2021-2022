import React, { useState} from "react";
import { submit } from "./Submit";

const Tracker = () => {


  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [size, setSize] = useState(0);
  const [inso, setInso] = useState(0)
  const [version, setVersion] = useState("No Version")

  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  async function testFunction() {
        setIsLoading(true)
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
      setVersion(rawResult.apiversion);
      setInso(rawResult.sampleDNI);
    }
    setIsLoading(false)
  }
  console.log("i love alex wang")
  console.log(size)
  return (
    <div className="flex-container">
      <input
        type="number"
        className="border"
        placeholder="Enter latitude"
        onChange={(update) => setLat(update.target.value)}
      />
      <input
        type="number"
        className="border"
        placeholder="Enter longitude"
        onChange={(update) => setLong(update.target.value)}
      />
      {/* <input
        type="number"
        className="border"
        placeholder="Enter size"
        onChange={(update) => setSize(update.target.value)}
      /> */}
      <select onChange={(update) => setSize(update.target.value)}>
        <option value = "10">10</option>
        <option value = "20">20</option>
        <option value = "30">30</option>
      </select>

      <button
        onClick={() => {
          testFunction();
        }}
      >
        <a>hi</a>
      </button>
      {isLoading && <span>Loading...</span>}
      <span>Latitude Entered: {result}</span>
      <span>Longitude Entered: {result1}</span>
      <span>Array Size Entered: {result2}</span>
      <span>API Version: {version}</span>
      <span>Average Annual DNI: {inso}</span>
    </div>
  );
};

export default Tracker;
