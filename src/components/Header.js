import React from "react";
import logo from '../images/logo.png';
import './Header.css';

const Header = () =>{
    return(
        <div className="display">
        <div><img className="logo" src={logo}
            alt="" />
            </div>
        <div className="header">
        <span className="songgothon">Seminar of Ujjibon Shilpi Gosthi</span>
        <p><small className="program mt-3">Integrated Cultural Parliament Sass</small></p>
        </div>
            <nav>
            <a href="/shop">Participant</a>
            <a href="/orders">Programs</a>
            <a href="/inventory">Manage Inventory</a>
            <h5 className="my-3">Total Budget:50 Million</h5>
            </nav>
        </div>
    );
}

export default Header;