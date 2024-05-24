import React, {useState} from "react";

function ColorPicker (){

  const [color,setColor] = useState('#fff');


  const handelColorChange = (event) => {
    setColor(event.target.value);
  }

  return(<div className="color-picker-container">
          <h1>Color Picker</h1>
          <div className="color-display" style={{backgroundColor: color}}>
            <p>Picked Color: {color}</p>
          </div>
          <lable>Select a color</lable>
          <input value={color} type="color" onChange={handelColorChange}></input>
        </div>);
}
export default ColorPicker
