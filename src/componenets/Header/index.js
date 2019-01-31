import React from "react";
import "./index.css";

const Header = (props)=>{
  return (
  <div>
    <h1 className="header">x-o game</h1>
    <div className="names">
    <h4 className="left">first player: {props.firstName} </h4>

    <h4 className="right"> second player: {props.secondName}</h4>
    </div>
  </div>
  )
}

export default Header;
