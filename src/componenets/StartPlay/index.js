import React from 'react';
import "./index.css";
 const StartPlay =(props)=>{
  return (
    <div className="background">
    <form action="" >
      <input type="text"
        placeholder="Player first name"
        onChange ={props.handleChange}
        name="firstName"
    />
      <input type="text"
        placeholder="Player second name"
        onKeyUp ={props.handleChange}
        name="secondName"
    />
     <button
     onClick ={props.startplay}
     >Start Play!</button>
    </form>
    </div>
  )
}


export default StartPlay;
