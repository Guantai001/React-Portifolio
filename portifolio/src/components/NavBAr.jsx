import React, { useState } from 'react'
import { Link } from "react-scroll";
import { navLinksdata } from "./index"
import ReactSwitch from 'react-switch';

const NavBar = ({theme, toggleTheme}) => {
  //style the side menu

  const [showMenu, setShowMenu]=useState(false)
  //slide menu function


  const activeTab = (e) => {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });
    e.target.classList.add('active');
}


  return (
    <div className="navBar">
        <header class="l-header">
        <nav class="nav bd-grid">
       <div>
        <a href="#" class="nav__logo">Guantai</a>
     </div>

      <div class="nav__menu" id="nav-menu">
        <ul  class="nav__list">
        <li class="nav__item"><a href="#home" onClick={activeTab}class="nav__link active">Home</a></li>
        <li class="nav__item"><a href="#about"onClick={activeTab}class="nav__link">About</a></li>
        <li class="nav__item"><a href="#skills" onClick={activeTab}class="nav__link">Services</a></li>
        <li class="nav__item"><a href="#work" onClick={activeTab}class="nav__link">Work</a></li>
        <li class="nav__item"><a href="#contact"onClick={activeTab}class="nav__link">Contact</a></li>
        </ul>

        </div>


      <div class="nav__toggle"
                 id="nav-toggle">
                    <i class='bx bx-menu'
                     onClick={() => setShowMenu(!showMenu)}
                     ></i>

               
               {/* this is where the slide menu will appear */}
                <div className={showMenu ? "nav__menu show" : "nav__menu"}>
                    <ul className="nav__list">
                        {navLinksdata.map((item, index) => {
                            return (
                                <li key={index} className="nav__item">
                                    <Link
                                        activeClass="active"
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="nav__link"
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {item.title}
                                    </Link>


                                </li>
                            );
                        })}
                        <div className="switch">
      
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
      </div>
   
                    </ul>
                </div>

        
                </div>

      </nav>
    </header>
    </div>
  );
}

export default NavBar;
