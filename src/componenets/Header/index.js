import React from "react";
const Header = (props)=>{
  return (
  <div>
    <h1>x-o game</h1>
    <h4>first player: {props.firstName} </h4>
    <h4>second player: {props.secondName}</h4>
  </div>
  )
}

export default Header;
