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
    const response = await fetch("/reqsolar", requestOps)
    const text = await response.json()
    
    
    return text
};
