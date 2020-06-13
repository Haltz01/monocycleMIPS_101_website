import React from 'react'; // useEffect> para chamada a API assim que o componente for exibido na tela
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactScroll from "react-scroll";
// useState -> usado para ter váriaveis que vão ser manipuladas pelos componentes
import './Main.css';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

import testeImg from '../assets/teste.jpg';
// import bancoRegistradores from '../assets/bancoRegistradores.jpg';

// import api from '../services/api';

export default function Main({ match }) { // match é uma propriedade do react-router-dom -> tem os parametros passados para a rota. Ex.: {match.params.id}
    return (
        <div>
            <Helmet>
                <title> learn $MIPS; - Homepage </title>
                <meta name="description" content="Esse é o nosso projeto final de Organização e arquitetura de computadores" />
            </Helmet>
            <Navbar />
            <div className="container bg-white">
                {/* <Link to="/">
                    <img src={logo} alt="TinDev Logo" />
                </Link> */}
                <div className="row">
                    <div className="firstRowContainer container-fluid d-flex flex-column justify-content-center align-items-center py-4">
                        <h1 className="mainTitle"> Organização e arquitetura de computadores </h1>
                        <h3 className="mainSubtitle w-75 text-center"> Aprenda aqui o básico sobre arquiteturas RISC, CISC e, em especial, <b>MIPS</b>. Cloking, componentes da arquitetura, caminho de dados, operações e mais! </h3>
                    </div>
                </div>
                <div className="row d-flex flex-row py-4">
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="tipos_arquitetura" spy={true} smooth={true} duration={800} offset={-100} className="w-75"> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2">
                                Seja intruduzido a alguns <b>tipos de arquitetura</b> diferentes e aprenda, também, o básico sobre a arquitetura MIPS
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-center align-items-center">
                        <ReactScroll.Link to="componentes_MIPS" spy={true} smooth={true} duration={800} offset={-100} className="w-75"> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2">
                                Saiba mais sobre os principais <b>componentes da arquitetura MIPS</b>: banco de registradores, unidade de controle, unidade lógico-aritmética e memória.
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-center align-items-center">
                        <ReactScroll.Link to="instrucoes" spy={true} smooth={true} duration={800} offset={-100} className="w-75"> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center mt-2">
                                teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-center align-items-center">
                        <ReactScroll.Link to="caminho_dados" spy={true} smooth={true} duration={800} offset={-100} className="w-75"> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center mt-2">
                                teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                            </div>
                        </ReactScroll.Link>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 id="tipos_arquitetura" className="mainSubjectTitle"> Tipos de arquitetura </h1>
                    </div>
                    <div className="mainSubjectText container-fluid">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tortor vitae turpis pulvinar, et rutrum odio sagittis. Maecenas iaculis augue accumsan, scelerisque mauris eu, finibus mauris. Vivamus sagittis ut tortor eu sagittis. Proin elementum tellus eget nibh mattis, vitae euismod orci volutpat. Cras tempor, felis non vehicula cursus, neque velit tempor ligula, ac mollis lacus nibh id risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus eget magna a leo volutpat viverra. Mauris tristique ex in sem molestie feugiat.
                        </p>
                        <p>
                            Aenean euismod tellus eget pellentesque maximus. Pellentesque vestibulum velit vel enim imperdiet, sit amet eleifend nisi imperdiet. Aliquam erat volutpat. Vestibulum vel ultricies urna. Duis ante justo, vehicula non rhoncus non, eleifend et sapien. Praesent in ipsum eget nulla varius dapibus. Suspendisse viverra sem erat, non tristique dui iaculis vitae. Maecenas risus risus, congue nec diam et, lacinia tempor dolor. Ut fringilla sed dui tincidunt scelerisque. Aenean placerat orci eu auctor mattis. Donec rhoncus libero sapien, vitae pharetra elit sagittis at. Ut fermentum condimentum ex, eu pharetra ante rhoncus non. Nunc dapibus velit in dui scelerisque, et molestie dolor imperdiet. Donec convallis luctus velit non lacinia.
                        </p>
                    </div>
                </div>
                <div className="row py-4">
                     {/* ---------------------------- COMPONENTES DA ARQUITETURA MIPS ---------------------------- */}
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 id="componentes_MIPS" className="mainSubjectTitle"> Componentes da arquitetura MIPS </h1>
                    </div>
                    <div className="mainSubjectText container-fluid d-flex flex-column justify-content-center">
                        {/* ---------------------------- BANCO DE REGISTRADORES ---------------------------- */}
                        <h3> Banco de Registradores </h3>
                        <p>
                            O <b>Banco de Registradores</b>, com o nome sugere, é uma unidade que contém todos os registradores a serem utilizados. Uma forma de entender a disposição dos registradores nesse banco é a partir da imagem abaixo:
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={testeImg} className="img-fluid shadow rounded w-50" alt="Desenho lógico do banco de registradores" /> 
                        </div>
                        <p>
                            Porém, usaremos uma imagem mais simplificada para explicar sobre o banco de registradores:
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={testeImg} className="img-fluid shadow rounded w-50" alt="Desenho simplificado do banco de registradores" /> 
                        </div>
                        <p>
                            Duas são as entradas nessa implementação: <i>Read Register One</i> e <i>Read Register Two</i>. Elas recebem os endereços dos registradores que serão utilizados durante a execução de algum comando. Por exemplo, em um comando de adição (add $s0, $s1, $s2) são passados, ao banco de registradores, os endereços de <i>$s1</i> e <i>$s2</i> - para <i>Read Register One</i> e <i>Read Register Two</i> respectivamente. O banco de registradores lerá os endereços e então buscará os valores guardados nesses registradores para passar a <i>Read Data One</i> e <i>Read Data Two</i>.
                        </p>
                        <p>
                            Outra função do banco é escrever valores dentro de seus registradores. Voltando ao exemplo com a operação de adição (add $s0, $s1, $s2), devemos salvar o resultado da adição no registrador <i>$s0</i>. Sendo assim, o endereço de <i>$s0</i> é passado para o <i>Write Register</i> e o resultado da adição é recebido pelo <i>Write Data</i>. Com isso, o banco de registradores pode salvar o resultado da adição (valor que está em <i>Write Data</i>) no endereço do registrador <i>$s0</i> (que está em <i>Write Register</i>).
                        </p>
                        {/* ---------------------------- ULA - UNIDADE LÓGICO-ARITMÉTICA ---------------------------- */}
                        {/* FAZER MODIFICAÇẼSS AQUI !!! */}
                        <h3>Unidade Lógica e Aritmética</h3> 
                        <p>
                            A <b>Unidade Lógica e Aritmética</b> (ULA ou, em inglês, ALU) é responsável pelas operações de soma, subtração, divisão, entre outros. De forma mais abrangente, ela é responsável por operações aritméticas e lógicas (no geral, comparações) como já demonstra seu nome. Possui dois valores de entrada e duas saídas (uma para o resultado da operação aritmética e outra para condições de desvio). Quando a operação enviada à ULA for de desvio, como um <i>branch</i> por exemplo, basta dizer se a condição foi satisfeita ou não. Para isso, existe a saída <i>Zero</i>, que assume o valor 1 caso a condição que está sendo avaliada for satisfeita e, caso contrário, assume valor 0.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={testeImg} className="img-fluid shadow rounded w-50" alt="Desenho da ULA com suas entrada e saídas" /> 
                        </div>
                        {/* ---------------------------- UNIDADE DE CONTROLE ---------------------------- */}
                        {/* FAZER MODIFICAÇẼSS AQUI !!! */}
                        <h3> Unidade de controle (monociclo)</h3>
                        <p>
                            Uma instrução do tipo J não necessita ULA; instruções do tipo I assinalam os mesmos bytes de endereço em <i>read register 2</i> e <i>write register</i>; já as de tipo R possuem 3 endereços distintos para cada entrada do banco de registradores. Tendo isso em vista, a <b>Unidade de Controle</b> é o componente responsável por direcionar esses bytes recebidos entre os demais componentes da arquitetura de acordo com o tipo da instrução, criando, assim, o caminho de dados correto.
                        </p>
                        <p>
                            Seu funcionamento depende apenas dos bytes do código de operação. Como saída, ela gera 8 "sinais" que alteram o caminho de dados por meio de multiplexadores, estes são:
                        </p>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 id="instrucoes" className="mainSubjectTitle"> Tipos e conjuntos de instruções </h1>
                    </div>
                    <div className="mainSubjectText container-fluid">
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
                        <h1 id="caminho_dados" className="mainSubjectTitle"> Caminho dos dados </h1>
                    </div>
                    <div className="mainSubjectText container-fluid">
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