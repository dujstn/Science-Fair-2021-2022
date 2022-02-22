export const submit = async (data) => {

    const requestOps = {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            lat: data.latitude,
            long: data.longitude,
            size: data.arrSize
        })
    }
    try{    
        const response = await fetch("https://heliios-backend.herokuapp.com/reqo", requestOps)
        const text = await response.json()
        return text
    }
    catch(err){
        return undefined
    }
};
