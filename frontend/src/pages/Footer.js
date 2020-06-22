import React from "react";

export default function Footer() {
    return (
        <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-3 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links - Universidade </h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="http://www.saocarlos.usp.br/"> Portal USP São Carlos </a>
                        </li>
                        <br/>
                        <li>
                            <a href="https://www.icmc.usp.br/"> ICMC - Instituto De Ciências Matemáticas e de Computação </a>
                        </li>
                    </ul>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-5 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4"> Emails </h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#!">Lucas Yuji: </a>
                        </li>
                        <li>
                            <a href="#!">Pedro Guerra: pedro-x-guerra@hotmail.com</a>
                        </li>
                        <li>
                            <a href="#!">Pedro Cisdeli: </a>
                        </li>
                        <li>
                            <a href="#!">Vitor Amim:</a>
                        </li>
                    </ul>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-3 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4"> Githubs </h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#!" target="__blank">Lucas Yuji Matubara</a>
                        </li>
                        <li>
                            <a href="https://github.com/Haltz01" target="__blank">Pedro Guerra Lourenço</a>
                        </li>
                        <li>
                            <a href="https://github.com/sprmbng" target="__blank">Pedro Henrique M. Cisdeli</a>
                        </li>
                        <li>
                            <a href="#!" target="__blank">Vitor Souza Amim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright - Base para o footer em: <a href="https://mdbootstrap.com/"> MDBootstrap.com</a></div>
    </footer>
    );
};