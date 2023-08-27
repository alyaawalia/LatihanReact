import React from "react";
import { FaBarsProgress } from 'react-icons/fa6';

export default function Header(props) {
  return (
    <div className="header">
      <div className="top-header">
      <FaBarsProgress/>
        
        <p><b>Hi, Admin</b></p>
      </div>
      <div className="bot-header">
        <p><b>Cukai</b></p>
      </div>
    </div>
  );
}


