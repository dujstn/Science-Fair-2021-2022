import {useState, useEffect} from 'react';

export function Submit(userText){

    const requestOps = {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            reqTitle: "POST Request Test",
            reqText: "hello",
            reqSig: "signature"
        })
    }
    let text = ""
    fetch("/reqsolar", requestOps).then(
        response => {
            console.log("POST Request was " + response.statusText)
            return response.json()
        }).then(
            data => {
                console.log(data)
                text = data.title   
        })
    
    return "hello"
};
