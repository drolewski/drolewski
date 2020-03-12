import React from 'react';
import './Navbar.css';

class NavBar extends React.Component{
    render(){
        return (
            <div class="topNavBar">
                <div class="title" id="pageName" href="#">DOMINIK ROLEWSKI</div>
                <div id="icons-container-right">
                    <a href="http://www.linkedin.com/in/dominik-rolewski-01bba9155/" target="_blank">
                        <div class="icon icon-linkedin"></div>
                    </a>
                    <a href="https://github.com/drolewski" target="_blank">
                        <div class="icon icon-github"></div>
                    </a>
                    <a href="http://www.facebook.com/dominik.rolewski" target="_blank">
                        <div class="icon icon-facebook"></div>
                    </a>
                    <a href="mailto:drolewski@gmail.com">
                        <div class="icon icon-last icon-email"></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default NavBar;
