import React, { useState} from "react";
import { submit } from "./Submit";

const Tracker = () => {


  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [size, setSize] = useState(0);

  const [result, setResult] = useState("Value of Lat");
  const [result1, setResult1] = useState("Value of Long");
  const [result2, setResult2] = useState("Value of Size");
  const [version, setVersion] = useState("No Version")
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
      setVersion(rawResult.apiversion)
    }
    setIsLoading(false)
  }

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
      <input
        type="number"
        className="border"
        placeholder="Enter size"
        onChange={(update) => setSize(update.target.value)}
      />

      <button
        onClick={() => {
          testFunction();
        }}
      >
        <a>hi</a>
      </button>
      {isLoading && <span>Loading...</span>}
      <span>{result}</span>
      <span>{result1}</span>
      <span>{result2}</span>
      <span>{version}</span>
    </div>
  );
};

export default Tracker;
