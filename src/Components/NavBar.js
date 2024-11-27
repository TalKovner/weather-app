import React from "react";
import "../style/NavBar.css";

function NavBar() {
  return <div className="navbar">{new Date().toDateString()}</div>;
}

export default NavBar;
