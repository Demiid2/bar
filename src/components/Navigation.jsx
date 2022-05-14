import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap'

import { NavLink } from 'react-router-dom';
class Navigation extends Component{
    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" >Isidro</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Reservas">Reservas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Eventos">Eventos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Ubicacion">Ubicacion</NavLink>
                </li>
              </ul>
            </div>
          </div>
      </nav>
        )
    };
}
export default Navigation;