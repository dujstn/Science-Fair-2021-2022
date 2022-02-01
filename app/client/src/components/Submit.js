import React, { useState, useEffect } from 'react';

const Submit = () => {

    const requestOps = {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: "Fetch POST Request Example"
        })

    }

    const output = "";
    fetch("/reqsol", requestOps).then(
        response => {
            output = response.json()
        })
    

    return(
        <div>
            <h1>{output}</h1>
        </div>
    );
};

export default Submit;
