export const predicts = async (data) => {

    const requestOps = {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            lat: data.latitude,
            long: data.longitude,
            size: data.arrSize,
            inso: data.insolation

        })
    }
    try{
        const response = await fetch("/makepred", requestOps)
        const text = await response.json()
        return text
    }
    catch(err){
        return undefined
    }

}