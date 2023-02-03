import React from 'react';
import ReactSwitch from 'react-switch';

function NavBar({theme, toggleTheme}){
    //when the tab is clicked, it will be active and the others will be inactive
    const activeTab = (e) => {
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
    }

 
    return(
        <div className="navBar">
            
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">Guantai</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" 
                        onClick={activeTab}
                        class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about"
                            onClick={activeTab}

                         class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" 
                       onClick={activeTab}
                        class="nav__link">Services</a></li>
                        <li class="nav__item"><a href="#work" 
                        onClick={activeTab}
                        class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="#contact"
                        onClick={activeTab}
                         class="nav__link">Contact</a></li>
                    </ul>
                </div>

 
 <div className="switch">
        <label></label>
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
      </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
        </div>
    )
}

export default NavBar;