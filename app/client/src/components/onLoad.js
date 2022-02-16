export const onLoad = async () => {

    try{
        const response = await fetch("/prep")
        const text = await response.json()

        return text, true
    }
    catch(err){
        return false
    }

}