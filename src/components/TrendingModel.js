import React from "react";
import { Link } from 'react-router-dom';
import "./NavModal.css";

export default function NavModal(props) {
  return (
    <div onClick={props.toggle} className={props.show ? "show" : "hide"}>
    
    </div>
  );
}