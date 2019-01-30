import React from 'react';

 const StartPlay =(props)=>{
  return (
    <form action="">
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
  )
}


export default StartPlay;
