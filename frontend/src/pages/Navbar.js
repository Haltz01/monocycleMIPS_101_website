import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar sticky-top navbar-expand-lg navbar-light shadow bg-white p-0">
            <div className="mainContainerNavbar container-fluid">
                <div className="navbar-header">
                    <Link className="navbarBrand navbar-brand" to="/"> learn $MIPS; </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h-100" id="navbarNav">
                    <ul className="navbar-nav h-100">
                        <li className="navbarItem nav-item d-flex align-items-center">
                            <Link className="nav-link" to="/"> Tipos de arquitetura (CISC, RISC e MIPS) </Link>
                        </li>
                        <li className="navbarItem nav-item d-flex align-items-center">
                            <Link className="nav-link" to="/"> Componentes da arquitetura MIPS </Link>
                        </li>
                        <li className="navbarItem nav-item d-flex align-items-center">
                            <Link className="nav-link" to="/"> Tipos e conjuntos de instruções </Link>
                        </li>
                        <li className="navbarItem nav-item d-flex align-items-center">
                            <Link className="nav-link" to="/"> Caminho de dados </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}