import React, { useEffect, useState } from 'react'; // useEffect> para chamada a API assim que o componente for exibido na tela
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// useState -> usado para ter váriaveis que vão ser manipuladas pelos componentes
// import { Link } from 'react-router-dom';
import './Main.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

import testeImg from '../assets/teste.jpg';

// import api from '../services/api';

export default function Main({ match }) { // match é uma propriedade do react-router-dom -> tem os parametros passados para a rota. Ex.: {match.params.id}
    return (
        <div>
            <Helmet>
                <title> Exemplio - Homepage </title>
                <meta name="description" content="Esse é o nosso projeto final de Organização e arquitetura de computadores" />
            </Helmet>
            <Navbar />
            <div className="container bg-white">
                {/* <Link to="/">
                    <img src={logo} alt="TinDev Logo" />
                </Link> */}
                <div className="row pt-3">
                    <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
                        <h1 className="py-2"> Organização e arquitetura de computadores </h1>
                        <h3 className="py-2"> Aprenda aqui o básico sobre arquiteturas RISC, CISC e, em especial, MIPS.
                            <br/> Cloking, componentes da arquitetura, caminho de dados. operações e mais! </h3>
                    </div>
                </div>
                <div className="row d-flex flex-row border-top border-bottom py-4">
                    <div className="col d-flex justify-content-center align-items-center">
                        <Link to="#tipos_arquitetura" className="w-75"> 
                            <img src={testeImg} className="img-fluid border shadow-sm rounded-pill" alt="Imagem de teste" /> 
                        </Link>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <Link to="#componentes_MIPS" className="w-75"> 
                            <img src={testeImg} className="img-fluid border shadow-sm rounded-pill" alt="Imagem de teste" /> 
                        </Link>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <Link to="#instrucoes" className="w-75"> 
                            <img src={testeImg} className="img-fluid border shadow-sm rounded-pill" alt="Imagem de teste" /> 
                        </Link>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <Link to="#caminho_dados" className="w-75"> 
                            <img src={testeImg} className="img-fluid border shadow-sm rounded-pill" alt="Imagem de teste" /> 
                        </Link>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 href="#tipos_arquitetura"> Tipos de arquitetura </h1>
                    </div>
                    <div className="container-fluid">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tortor vitae turpis pulvinar, et rutrum odio sagittis. Maecenas iaculis augue accumsan, scelerisque mauris eu, finibus mauris. Vivamus sagittis ut tortor eu sagittis. Proin elementum tellus eget nibh mattis, vitae euismod orci volutpat. Cras tempor, felis non vehicula cursus, neque velit tempor ligula, ac mollis lacus nibh id risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget magna a leo volutpat viverra. Mauris tristique ex in sem molestie feugiat.
                        </p>
                        <p>
                            Aenean euismod tellus eget pellentesque maximus. Pellentesque vestibulum velit vel enim imperdiet, sit amet eleifend nisi imperdiet. Aliquam erat volutpat. Vestibulum vel ultricies urna. Duis ante justo, vehicula non rhoncus non, eleifend et sapien. Praesent in ipsum eget nulla varius dapibus. Suspendisse viverra sem erat, non tristique dui iaculis vitae. Maecenas risus risus, congue nec diam et, lacinia tempor dolor. Ut fringilla sed dui tincidunt scelerisque. Aenean placerat orci eu auctor mattis. Donec rhoncus libero sapien, vitae pharetra elit sagittis at. Ut fermentum condimentum ex, eu pharetra ante rhoncus non. Nunc dapibus velit in dui scelerisque, et molestie dolor imperdiet. Donec convallis luctus velit non lacinia.
                        </p>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 href="#componentes_MIPS"> Componentes da arquitetura MIPS </h1>
                    </div>
                    <div className="container-fluid">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tortor vitae turpis pulvinar, et rutrum odio sagittis. Maecenas iaculis augue accumsan, scelerisque mauris eu, finibus mauris. Vivamus sagittis ut tortor eu sagittis. Proin elementum tellus eget nibh mattis, vitae euismod orci volutpat. Cras tempor, felis non vehicula cursus, neque velit tempor ligula, ac mollis lacus nibh id risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget magna a leo volutpat viverra. Mauris tristique ex in sem molestie feugiat.
                        </p>
                        <p>
                            Aenean euismod tellus eget pellentesque maximus. Pellentesque vestibulum velit vel enim imperdiet, sit amet eleifend nisi imperdiet. Aliquam erat volutpat. Vestibulum vel ultricies urna. Duis ante justo, vehicula non rhoncus non, eleifend et sapien. Praesent in ipsum eget nulla varius dapibus. Suspendisse viverra sem erat, non tristique dui iaculis vitae. Maecenas risus risus, congue nec diam et, lacinia tempor dolor. Ut fringilla sed dui tincidunt scelerisque. Aenean placerat orci eu auctor mattis. Donec rhoncus libero sapien, vitae pharetra elit sagittis at. Ut fermentum condimentum ex, eu pharetra ante rhoncus non. Nunc dapibus velit in dui scelerisque, et molestie dolor imperdiet. Donec convallis luctus velit non lacinia.
                        </p>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 href="#instrucoes"> Tipos e conjuntos de instruções </h1>
                    </div>
                    <div className="container-fluid">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tortor vitae turpis pulvinar, et rutrum odio sagittis. Maecenas iaculis augue accumsan, scelerisque mauris eu, finibus mauris. Vivamus sagittis ut tortor eu sagittis. Proin elementum tellus eget nibh mattis, vitae euismod orci volutpat. Cras tempor, felis non vehicula cursus, neque velit tempor ligula, ac mollis lacus nibh id risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget magna a leo volutpat viverra. Mauris tristique ex in sem molestie feugiat.
                        </p>
                        <p>
                            Aenean euismod tellus eget pellentesque maximus. Pellentesque vestibulum velit vel enim imperdiet, sit amet eleifend nisi imperdiet. Aliquam erat volutpat. Vestibulum vel ultricies urna. Duis ante justo, vehicula non rhoncus non, eleifend et sapien. Praesent in ipsum eget nulla varius dapibus. Suspendisse viverra sem erat, non tristique dui iaculis vitae. Maecenas risus risus, congue nec diam et, lacinia tempor dolor. Ut fringilla sed dui tincidunt scelerisque. Aenean placerat orci eu auctor mattis. Donec rhoncus libero sapien, vitae pharetra elit sagittis at. Ut fermentum condimentum ex, eu pharetra ante rhoncus non. Nunc dapibus velit in dui scelerisque, et molestie dolor imperdiet. Donec convallis luctus velit non lacinia.
                        </p>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 href="#caminho_dados"> Caminho dos dados </h1>
                    </div>
                    <div className="container-fluid">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tortor vitae turpis pulvinar, et rutrum odio sagittis. Maecenas iaculis augue accumsan, scelerisque mauris eu, finibus mauris. Vivamus sagittis ut tortor eu sagittis. Proin elementum tellus eget nibh mattis, vitae euismod orci volutpat. Cras tempor, felis non vehicula cursus, neque velit tempor ligula, ac mollis lacus nibh id risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget magna a leo volutpat viverra. Mauris tristique ex in sem molestie feugiat.
                        </p>
                        <p>
                            Aenean euismod tellus eget pellentesque maximus. Pellentesque vestibulum velit vel enim imperdiet, sit amet eleifend nisi imperdiet. Aliquam erat volutpat. Vestibulum vel ultricies urna. Duis ante justo, vehicula non rhoncus non, eleifend et sapien. Praesent in ipsum eget nulla varius dapibus. Suspendisse viverra sem erat, non tristique dui iaculis vitae. Maecenas risus risus, congue nec diam et, lacinia tempor dolor. Ut fringilla sed dui tincidunt scelerisque. Aenean placerat orci eu auctor mattis. Donec rhoncus libero sapien, vitae pharetra elit sagittis at. Ut fermentum condimentum ex, eu pharetra ante rhoncus non. Nunc dapibus velit in dui scelerisque, et molestie dolor imperdiet. Donec convallis luctus velit non lacinia.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}