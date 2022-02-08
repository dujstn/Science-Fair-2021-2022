import React, { useState} from "react";
import { submit } from "./submit";

const Tracker = () => {
  const [result, setResult] = useState("Test");

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [size, setSize] = useState(0);

  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
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
    }
    setIsLoading(false)
  }

  console.log("hihasdf")
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default Tracker;
