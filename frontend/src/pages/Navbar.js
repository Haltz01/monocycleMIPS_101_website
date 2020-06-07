import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar sticky-top navbar-expand-lg navbar-light shadow bg-white">
            <div className="container-fluid row">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"> ORG COMP </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Tipos de arquitetura (CISC, RISC e MIPS) </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Componentes da arquitetura MIPS </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Tipos e conjuntos de instruções </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Caminho de dados </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}