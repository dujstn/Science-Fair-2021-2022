import Button from "./Button"

const Form = () => {
    const onClick = (e) => {
        e.preventDefault();
        const lat = document.querySelector("#latInput");
        const long = document.querySelector("#longInput");
        const cap = document.querySelector("#capInput");
        console.log(lat.value, long.value, cap.value)
    }  
    return (
        <form className="form">
            <label className="label">Array Latitude</label>
            <input type="text" id="latInput" placeholder="Latitude"></input><br></br>
            <label className="label">Array Longitude</label>
            <input type="text" id="longInput" placeholder="Longitude"></input><br></br>
            <label className="label">Array Capacity</label>
            <input type="text" id="capInput" placeholder="Capacity"></input><br></br>
            <Button text="Submit" onClick = {onClick}/>
        </form>
  );
};

export default Form;
