import React from 'react'; // Bilbioteca do React
import ReactDOM from 'react-dom'; // Versão do React que lida com a DOM (árvore de elementos)

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap';
import 'jquery';
import 'popper.js';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); // Renderiza App (arquivo javascript com html) dentro da div de id 'root'
