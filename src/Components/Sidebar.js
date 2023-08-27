import React, { Children, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io';
import menuItem from "../Data/NavData";
import { NavLink, } from "react-router-dom";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState (false);
    return (
        <div className="container">
            <div className="sidebar" style={{width:isOpen ? "350px":"70px"}}> 
                <div className="top-section"> 
                    <h1 className="logo" style={{display: isOpen ? "block" : "none"}}>CEISA 4.0</h1>
                        <div className="arrow" style={{marginLeft: isOpen ? "0px" : "0px"}}>
                            <IoIosArrowBack onClick={()=> setIsOpen(!isOpen)} style={{transform: 
                            !isOpen && "rotate(180deg)"}}/>
                        </div>
                </div>
                <h5 className="penyelesaian" style={{display: isOpen ? "block" : "none"}}>Penyelesaian</h5>
                {
                    menuItem.map((item, index) => (
                        (
                            <NavLink to={item.path} key={index} className="link" activeclassName="action">
                                <div className="icon">{item.icon}</div>
                                <div className="link-text" style={{display: isOpen ? "block" : "none"}}>{item.name} </div>
                            </NavLink>
                            
                        )
                     ) )
                }
                
            </div>
            <main >
                {children}
            </main>
            
        </div>
    )
}
export default Sidebar;