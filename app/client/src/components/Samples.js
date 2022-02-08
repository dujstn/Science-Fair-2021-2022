import React, {useState, useEffect} from 'react';

const Samples = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/test").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])


    return (
        <div>
            {(typeof data.members === "undefined") ? (
                <p>Loading...</p>
            ) : (
                data.members.map((member, i)=>
                <p index={i}>{member}</p>)
            )}
        </div>
  );
};

export default Samples;