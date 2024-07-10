import React, { Component, useState } from 'react';
import './navbar.css';
import logo from '../assets/Logo-fiesac.png';

class Navbar extends Component {

    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleLinkClick = () => {
        this.setState({ clicked: false });
    }

    render(){
        return (
            <>
    
                {/* Barra de navegación principal */}
    
                <nav className='navbar'>
                <a href="#inicio" className="logo">
                    <img src={logo} className='logo-fiesac' alt='logo-fiesac' />
                </a>
                    <div className='contenedor-elementos-navbar'>
                        <ul className={this.state.clicked ? "elementos-navbar active" : "elementos-navbar"} >
                            <li><a href="#inicio" className='elemento-navegacion' onClick={this.handleLinkClick}>Inicio</a></li>
                            <li><a href="#servicios" className='elemento-navegacion' onClick={this.handleLinkClick}>Servicios</a></li>
                            <li><a href="#about-us" className='elemento-navegacion' onClick={this.handleLinkClick}>Sobre nosotros</a></li>
                            <a href='#contacto' className='boton-contacto' onClick={this.handleLinkClick}>Contáctanos</a>
                        </ul>
                    </div>
    
                    <div className='mobile' onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
    
            </>
        );
    }
}

export default Navbar;
