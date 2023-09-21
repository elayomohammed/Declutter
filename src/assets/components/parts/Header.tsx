import React from 'react';
require('../../styles/header.css');

// App logo dependency asset
const logo:any = require('../../components-dependency/logo.jpg');

// App header component
const Header:any = () => {
    return(
        <header id="app-header">
            <img src={logo} id="head-logo" alt="" />
            <div id="head-nav-items-container">
                <a href="" className="head-nav-items">Home</a>
                <a href="" className="head-nav-items">Ads center</a>
                <a href="" className="head-nav-items">FAQs</a>
                <a href="" className="head-nav-items">Profile</a>
            </div>
            <button id="head-reg-btn">Register</button>
        </header>
    );
};
export default Header;
