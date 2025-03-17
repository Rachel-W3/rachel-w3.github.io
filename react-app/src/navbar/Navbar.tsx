import React from 'react';
import logo from './logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-md navbar-dark navbar-override">
            <h1 id="name">Rachel Wong</h1>
            <button className="navbar-toggler m-0" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link nav-color-override" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-color-override" href="WongRachel_Resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
