import React from 'react';
import { Link } from 'react-router-dom';
import ReactScroll from "react-scroll";

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar sticky-top navbar-expand-lg navbar-light shadow bg-white py-0 px-3">
            <div className="mainContainerNavbar container-fluid">
                <div className="navbar-header">
                    <Link className="navbarBrand navbar-brand" to="/"> learn $MIPS; </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h-100" id="navbarNav">
                    <ul className="navbar-nav h-100">
                        <li className="navbarItem nav-item dropdown d-flex align-items-center p-1 p-lg-0">
                            <div className="btn-group px-2">
                                <ReactScroll.Link to="tipos_arquitetura" spy={true} smooth={true} duration={800} offset={-100} className="btn nav-link">Tipos de arquitetura (CISC, RISC e MIPS)</ReactScroll.Link>
                                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only"> Tipos de arquitetura (CISC, RISC e MIPS) </span>
                                    </button>
                                <div className="dropdownDiv dropdown-menu">
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Tipos de arquitetura </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> MIPS </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Clocking </ReactScroll.Link>
                                </div>
                            </div>
                        </li>
                        <li className="navbarItem nav-item dropdown d-flex align-items-center p-1 p-lg-0">
                            <div className="btn-group px-2">
                                <ReactScroll.Link to="componentes_MIPS" spy={true} smooth={true} duration={800} offset={-100} className="btn nav-link">Componentes da arquitetura MIPS</ReactScroll.Link>
                                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only"> Componentes da arquitetura MIPS </span>
                                    </button>
                                <div className="dropdownDiv dropdown-menu">
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Banco de registradores </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Unidade lógico-aritmética </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Contador de programa </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Multiplexadores </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Memória </ReactScroll.Link>
                                    <ReactScroll.Link to="" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Unidade de controle </ReactScroll.Link>
                                </div>
                            </div>
                        </li>
                        <li className="navbarItem nav-item dropdown d-flex align-items-center p-1 p-lg-0">
                            <div className="btn-group px-2">
                                <ReactScroll.Link to="instrucoes" spy={true} smooth={true} duration={800} offset={-100} className="btn nav-link">Tipos e conjuntos de instruções</ReactScroll.Link>
                                    <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only"> Tipos e conjuntos de instruções </span>
                                    </button>
                                <div className="dropdownDiv dropdown-menu">
                                    <ReactScroll.Link to="instrucao_r" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Instrução R </ReactScroll.Link>
                                    <ReactScroll.Link to="instrucao_i" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Instrução I </ReactScroll.Link>
                                    <ReactScroll.Link to="instrucao_j" spy={true} smooth={true} duration={800} offset={-100} className="dropdownItem dropdown-item"> Instrução J </ReactScroll.Link>
                                </div>
                            </div>
                        </li>
                        <li className="navbarItem nav-item d-flex align-items-center p-1 p-lg-0">
                            <ReactScroll.Link to="caminho_dados" spy={true} smooth={true} duration={800} offset={-100} className="btn nav-link">Caminho de dados</ReactScroll.Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}