import React from 'react';
require('../../styles/footer.css');

// App logo dependency asset
const logo:any = require('../../components-dependency/logo.jpg');

// App footer component
const Footer:any = () => {
    return(
        <footer id="app-footer">
            <div id="footer">
                <div id="foot-about-logo-container">
                    <a href="" id="foot-about">About</a>
                    <img src={logo} id="foot-logo" alt="" />
                </div>
                <div id="foot-nav-items-container">
                    <a href="" className="foot-nav-items">Home</a>
                    <a href="" className="foot-nav-items">Ads center</a>
                    <a href="" className="foot-nav-items">Settings</a>
                    <a href="" className="foot-nav-items">Profile</a>
                </div>
                <a href="" id="foot-faq">FAQs</a>
            </div>
            <p id="reserve-rights">© 2023 DECLUTTER | All Rights Reserved.</p>
        </footer>
    );
};
export default Footer;
