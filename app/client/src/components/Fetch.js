import React, {useState, useEffect} from 'react';

const Fetch = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/testone").then(
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

            {typeof data.members === "undefined" ? (
                <p>loading</p>
            ):(
                data.members.map((member, i) =>
                <p key={i}>{member}</p>)
            )}

        </div>
  );
};

export default Fetch;
