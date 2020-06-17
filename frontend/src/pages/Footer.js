import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-3 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links - Universidade </h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="#!">Link 1</Link>
                        </li>
                        <li>
                            <Link to="#!">Link 2</Link>
                        </li>
                        <li>
                            <Link to="#!">Link 3</Link>
                        </li>
                        <li>
                            <Link to="#!">Link 4</Link>
                        </li>
                    </ul>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-3 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4"> Emails </h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="#!">Link 1</Link>
                        </li>
                        <li>
                            <Link to="#!">Link 2</Link>
                        </li>
                        <li>
                            <Link to="#!">Link 3</Link>
                        </li>
                        <li>
                            <Link to="#!">Link 4</Link>
                        </li>
                    </ul>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-3 mx-auto">
                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4"> Githubs </h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="#!">Lucas Yuji Matubara</Link>
                        </li>
                        <li>
                            <Link to="https://github.com/Haltz01"> Pedro Guerra Lourenço</Link>
                        </li>
                        <li>
                            <Link to="#!">Pedro Henrique M. Cisdeli</Link>
                        </li>
                        <li>
                            <Link to="#!">Vitor Souza Amim</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <Link to="https://mdbootstrap.com/"> MDBootstrap.com</Link>
        </div>
    </footer>
    );
};