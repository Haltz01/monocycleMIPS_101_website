import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactScroll from "react-scroll";
import $ from 'jquery';
import './Main.css';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

import bancoRegistradores from '../assets/bancoRegistradores.png';
import bancoRegistradoresSimples from '../assets/bancoRegistradoresSimples.png';
import buscaInstrucoes from '../assets/buscaInstrucoes.png';
import datapathAdd from '../assets/datapathAdd.png';
import instructionAddBits from '../assets/instructionAddBits.png';
import frequencies from '../assets/frequencies.png';
import signalEvent from '../assets/signalEvent.png';
import ULA from '../assets/ULA.png';
import muxScanner from '../assets/muxScanner.png';
import muxBase from '../assets/muxBase.png';
import memoriaDados from '../assets/memoriaDados.png';
import instructionComposition from '../assets/instructionComposition.png';
import listRegisters from '../assets/listRegisters.png';

import componentesCallImage from '../assets/componentesCallImage.png';
import datapathCallImage from '../assets/datapathCallImage.png';
import instrucoesCallImage from '../assets/instrucoesCallImage.png';
import riscxciscCallImage from '../assets/riscxciscCallImage.png';

import ADD from '../assets/ADD.png'
import JUMP from '../assets/JUMP.png'
import BEQ from '../assets/BEQ.png'

export default function Main() {
    const [instructionImageName, setInstructionImageName ] = useState("ADD");    
    
    const scrollTopRef = React.createRef();
    const datapathImageComponent = React.createRef();

    const scrollTop = () => {
        scrollTopRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    }

    useEffect(() => {
        if (instructionImageName === "ADD")
            datapathImageComponent.current.src = ADD;
        else if (instructionImageName === "BEQ")
            datapathImageComponent.current.src = BEQ;
        else if (instructionImageName === "JUMP")
        datapathImageComponent.current.src = JUMP;
    }, [instructionImageName, datapathImageComponent]);

    /* Função que exibe e oculta o botão de voltar ao topo da página */
    $(document).ready(function() {
        function showScrollTopButton() {
            if($(window).scrollTop() > 700) {
                $('.scrollTopButton').removeClass("d-none");
            }
            else {
                $('.scrollTopButton').addClass("d-none");
            }
        }
        $(document).scroll(showScrollTopButton);
        showScrollTopButton();
    });

    return (
        <div>
            <Helmet>
                <title> learn $MIPS; - Homepage </title>
                <meta name="description" content="Esse é o nosso projeto final de Organização e arquitetura de computadores" />
            </Helmet>          
            <Navbar/>
            <button id="scrollTopButton" className="scrollTopButton" onClick={scrollTop} title="Ir para o topo da página"> Voltar ao topo da página </button>
            <span ref={scrollTopRef} />
            <div className="container bg-white">
                <div className="row">
                    <div className="firstRowContainer container-fluid d-flex flex-column justify-content-center align-items-center py-5">
                        <h1 className="mainTitle text-center py-4"> Organização e arquitetura de computadores: MIPS monociclo </h1>
                        <h3 className="mainSubtitle w-75 text-center py-4"> Aprenda aqui o básico sobre arquiteturas RISC e CISC, com o foco em um tipo de arquitetura RISC: o <b>MIPS</b>. Seja introduzido a conceitos como cloking, componentes de arquitetura, caminho de dados, conjunto de instruções, sinais de controle e mais! </h3>
                    </div>
                </div>
                <div className="row d-flex flex-row py-4">
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="tipos_arquitetura" spy={true} smooth={true} duration={800} offset={-100} className="d-flex flex-column justify-content-center align-items-center"> 
                            <img src={riscxciscCallImage} className="callImage img-fluid shadow rounded w-100" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                                Seja intruduzido a alguns <b>tipos de arquitetura</b> diferentes e aprenda, também, o básico sobre a arquitetura MIPS.
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="componentes_MIPS" spy={true} smooth={true} duration={800} offset={-100} className="d-flex flex-column justify-content-center align-items-center"> 
                            <img src={componentesCallImage} className="callImage img-fluid shadow rounded w-100" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                                Saiba mais sobre os principais <b>componentes da arquitetura MIPS</b>: banco de registradores, unidade de controle, unidade lógico-aritmética, memória...
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="instrucoes" spy={true} smooth={true} duration={800} offset={-100} className="d-flex flex-column justify-content-center align-items-center"> 
                            <img src={instrucoesCallImage} className="callImage img-fluid shadow rounded w-100" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                            Aprenda sobre os <b>tipos de instruções</b> usados no MIPS. Instruções do tipo I, J e R - junto de exemplos explicativos.
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="caminho_dados" spy={true} smooth={true} duration={800} offset={-100} className="d-flex flex-column justify-content-center align-items-center"> 
                            <img src={datapathCallImage} className="callImage img-fluid shadow rounded w-100" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                                Aprenda o <b>caminho dos dados</b> - incluindo sinais de controle - em instruções de todos os tipos a partir de exemplos!
                            </div>
                        </ReactScroll.Link>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 id="tipos_arquitetura" className="mainSubjectTitle"> Tipos de arquitetura </h1>
                    </div>
                    <div className="container-fluid">
                        {/* ---------------------------- ARQUITETURAS RISC E CISC ---------------------------- */}
                        <h3 id="RISC_CISC"> Breve introdução às arquiteturas CISC e RISC </h3>
                        <p>
                            A <b>arquitetura CISC</b> (<i>Complex Instruction Set Computer</i>) possui um grande número de modos de endereçamento, instruções complexas e referências a operandos na memória principal. Suas instruções também variam de tamanho, levando a uma maior dificuldade na implementação do pipeline e um menor número de instruções realizadas por ciclo.
                        </p>
                        <p>
                            A <b>arquitetura RISC</b> (<i>Reduced Instruction Set Computer</i>) foi desenvolvida contando com instruções mais simples, poucas formas de endereçamento e apenas poucas operação referenciando a memória principal. Além disso, ela fixa os formatos de instruções em um modelo, permitindo a fácil implementação do pipeline.
                        </p>
                        {/* ---------------------------- ARQUITETURA MIPS (RISC) ---------------------------- */}
                        <h3 id="MIPS"> Arquitetura MIPS </h3>
                        <p>
                            MIPS é o nome de uma arquitetura de processador baseado no uso de registradores. Suas instruções tem à disposição 32 registradores para realizarem operações. Os processadores MIPS são do formato RISC (Reduced Instruction Set Computer), que é conhecido por ter um pequeno conjunto de instruções possíveis para o processador executar. Alguns exemplos de projetos que utilizam arquitetura MIPS são: Nintendo 64, Playstation 2 e roteadores Cisco.
                        </p>
                        <p>
                            A arquitetura MIPS pode ser implementada de várias formas diferentes: monociclo, multiciclo ou <i>pipelined</i>. O monociclo, como já foi dito, trabalha com uma operação por ciclo, já o multiciclo ou o <i>pipelined</i> trabalham com múltiplas operações ao mesmo tempo. No multiciclo, a operação é dividida em várias partes menores, e no <i>pipelined</i>, além da operação ser dividida em partes menores, várias são as instruções executadas ao mesmo tempo.
                        </p>

                        {/* ---------------------------- CLOCKING ---------------------------- */}
                        <h3 id="clocking"> Clocking </h3>
                        <p>
                            Quando falamos sobre a arquitetura monociclo, estamos nos referindo a uma máquina que faz uma operação por ciclo de clock, em outras palavras, cada instrução é realizada em um único pulso. Portanto, para explicar mais a fundo a arquitetura, será necessário saber um mínimo sobre o clock.
                        </p>
                        <p>
                            O clock interno do computador é comumente definido como um sinal de sincronismo, isso porque ele é sincronizado por pulso com um oscilador interno, que normalmente é feito de um cristal piezoelétrico. De forma geral, ele é uma unidade básica que ajuda a entender a velocidade do processador (CPU).
                        </p>
                        <p>
                            A medição do clock é feita em Hertz cuja sigla é Hz. Podemos, então, dizer que 100Hz são cem ciclos por segundo, que 1000Hz são mil ciclos por segundo e que 4,80GHz são 4 800 000 000 ciclos por segundo - valor equivalente à frequência do processador Intel Core i7-10700.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={frequencies} className="img-fluid shadow rounded w-25" alt="Exemplos de ondas com diferentes frequências - clock" /> 
                        </div>
                        <p>
                        Um grande problema da arquitetura monociclo é que ela trabalha com base na velocidade da instrução mais demorada, ou seja, há casos em que as instruções (mais simples) são finalizadas e então há perda de tempo, pois a operação mais lenta é a que define o tempo de clock dessa arquitetura. 
                        </p>
                        <p>
                            É necessário lembrar também que as operações são feitas na troca do sinal de clock, quando ocorre o <i>falling edge</i> ou o <i>rising edge</i> (figura a seguir).
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={signalEvent} className="img-fluid shadow rounded w-50" alt="Falling edge e rising edge" /> 
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                     {/* ---------------------------- COMPONENTES DA ARQUITETURA MIPS ---------------------------- */}
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <h1 id="componentes_MIPS" className="mainSubjectTitle"> Componentes da arquitetura MIPS </h1>
                    </div>
                    <div className="container-fluid d-flex flex-column justify-content-center">
                        {/* ---------------------------- BANCO DE REGISTRADORES ---------------------------- */}
                        <h3 id="banco_regs"> Banco de Registradores </h3>
                        <p>
                            O <b>Banco de Registradores</b>, com o nome sugere, é uma unidade que contém todos os registradores a serem utilizados. Uma forma de entender a disposição dos registradores nesse banco é a partir da imagem abaixo:
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={bancoRegistradores} className="img-fluid shadow rounded w-75" alt="Desenho lógico do banco de registradores" /> 
                        </div>
                        <p>
                            Porém, usaremos uma imagem mais simplificada para explicar sobre o banco de registradores:
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={bancoRegistradoresSimples} className="img-fluid shadow rounded w-75" alt="Desenho simplificado do banco de registradores" /> 
                        </div>
                        <p>
                            Duas são as entradas nessa implementação: <i>Read Register One</i> e <i>Read Register Two</i>. Elas recebem os endereços dos registradores que serão utilizados durante a execução de algum comando. Por exemplo, em um comando de adição (add $s0, $s1, $s2) são passados, ao banco de registradores, os endereços de <i>$s1</i> e <i>$s2</i> - para <i>Read Register One</i> e <i>Read Register Two</i> respectivamente. O banco de registradores lerá os endereços e então buscará os valores guardados nesses registradores para passar a <i>Read Data One</i> e <i>Read Data Two</i>.
                        </p>
                        <p>
                            Outra função do banco é escrever valores dentro de seus registradores. Voltando ao exemplo com a operação de adição (add $s0, $s1, $s2), devemos salvar o resultado da adição no registrador <i>$s0</i>. Sendo assim, o endereço de <i>$s0</i> é passado para o <i>Write Register</i> e o resultado da adição é recebido pelo <i>Write Data</i>. Com isso, o banco de registradores pode salvar o resultado da adição (valor que está em <i>Write Data</i>) no endereço do registrador <i>$s0</i> (que está em <i>Write Register</i>).
                        </p>

                        {/* ---------------------------- ULA - UNIDADE LÓGICO-ARITMÉTICA ---------------------------- */}
                        <h3 id="ULA">Unidade Lógica e Aritmética</h3> 
                        <p>
                            A <b>Unidade Lógica e Aritmética</b> (ULA ou, em inglês, ALU) é responsável pelas operações de soma, subtração, divisão, entre outros. De forma mais abrangente, ela é responsável por operações aritméticas e lógicas (no geral, comparações) como já demonstra seu nome. Possui dois valores de entrada e duas saídas (uma para o resultado da operação aritmética e outra para condições de desvio). Quando a operação enviada à ULA for de desvio, como um <i>branch</i> por exemplo, basta dizer se a condição foi satisfeita ou não. Para isso, existe a saída <i>Zero</i>, que assume o valor 1 caso a condição que está sendo avaliada for satisfeita e, caso contrário, assume valor 0.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={ULA} className="img-fluid shadow rounded w-25" alt="Desenho da ULA com suas entrada e saídas" /> 
                        </div>

                        {/* ---------------------------- PC - PROGRAM COUNTER ---------------------------- */}
                        <h3 id="program_counter">Contador de Programa</h3> 
                        <p>
                            As instruções na arquitetura MIPS tem 32 bits (ou seja, 4 bytes), e como elas são organizadas sequencialmente na memória, o que ocorre é que após a interpretação de uma, basta andar 4 bytes na memória para começar a executar a próxima instrução. Tendo isso em vista, há o <b><i>Program Counter</i></b> (PC; contador de programa), responsável por indicar em que endereço de memória está a instrução atual, além de “andar” pela memória a fim de dar continuidade ao programa (indo para o endereço da próxima instrução que deve ser executada). O contador de programa é a unidade apresentada abaixo (registrador de 32 bits).
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={buscaInstrucoes} className="img-fluid shadow rounded w-50" alt="Busca de instruções: contador de programa e memória de instruções" /> 
                        </div>
                        <p>
                            O endereço da instrução é enviado ao <i>Instruction Memory</i> (IM), e o endereço contido em PC é atualizado para PC + 4 (que é o endereço da próxima instrução). A <i>Instruction Memory</i> fica responsável por buscar a instrução na memória (a partir do endereço contido no contador de programa) e passar para os outros componentes.
                        </p>

                        {/* ---------------------------- MULTIPLEXADORES - MUX ---------------------------- */}
                        <h3 id="multiplexers">Multiplexadores</h3> 
                        <div className="d-flex justify-content-center my-3">
                            <img src={muxScanner} className="img-fluid shadow rounded w-50" alt="Desenho da ULA com suas entrada e saídas" /> 
                        </div>
                        <p>
                            Os <b>multiplexadores</b> (MUX) são sistemas digitais que possuem múltiplas entradas de dados, uma entrada de controle e uma saída de dados. O sinal da entrada de controle define qual das entradas será transmitida à saída. Em outras palavras, com um MUX é possível selecionar qual entrada será a saída.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={muxBase} className="img-fluid shadow rounded w-50" alt="Desenho da ULA com mais detalhes" /> 
                        </div>
                        <p>
                            Em relação à arquitetura MIPS, os multiplexadores são necessários quando precisamos escolher o dado de entrada em alguns dos componentes. Na imagem acima temos exemplos: escolher se o PC será apenas incrementado em 4 (para uma próxima operação) ou se ele será modificado por uma instrução de desvio; escolher se a entrada da ULA será um valor imediato ou um valor vindo de um registrador; ou ainda escolher se o valor a ser escrito no registrador é o resultado de uma operação da ULA ou de uma busca na memória.
                        </p>

                        {/* ---------------------------- MEMÓRIA DE DADOS ---------------------------- */}
                        <h3 id="data_memory">Memória (de dados)</h3> 
                        <p>
                            A <b><i>Data Memory</i></b> é um componente necessário quando buscamos ou escrevemos algo na memória em função de seu endereço, como em uma operação de <i>load word</i> (lw) ou <i>store word</i> (sw). Ela é responsável por recuperar ou armazenar dados presentes em certos endereços de memória, os quais passados como entrada para ela. Caso haja saída (sinal de controle <i>MemRead</i> é 1), ela será o dado buscado na memória por esse componente.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={memoriaDados} className="img-fluid shadow rounded w-25" alt="Componente da memória de dados (data memory)" /> 
                        </div>

                        {/* ---------------------------- UNIDADE DE CONTROLE ---------------------------- */}
                        <h3 id="control_unit"> Unidade de controle (monociclo)</h3>
                        <p>
                            Uma instrução do tipo J não necessita da ULA; instruções do tipo I assinalam os mesmos bits de endereço em <i>read register 2</i> e <i>write register</i>; já as de tipo R possuem 3 endereços distintos para cada entrada do banco de registradores. Tendo isso em vista, a <b>Unidade de Controle</b> é o componente responsável por direcionar esses bits recebidos entre os demais componentes da arquitetura de acordo com o tipo da instrução, criando, assim, o caminho de dados correto.
                        </p>
                        <p>
                            Seu funcionamento depende apenas dos bits do código de operação. Como saída, ela gera 8 "sinais" que alteram o caminho de dados por meio de multiplexadores, estes são:
                        </p>
                        <div className="container-fluid border shadow p-3 mt-2 mb-4">
                            <ul className="pl-3">
                                <li><b>RegDst:</b> Quando 0, <i>Write register</i> recebe os bits 16 a 20 da instrução (que tem 32 bits no total); quando 1, recebe os bits 11 a 15. Basicamente, esse sinal de controle defide que porção da instrução contém o registrador que deve ser usado como local de uma possível escrita ao final da instrução atual. </li>
                                <li><b>MemRead:</b> Quando 1, o dado em <i>Address</i> é passado para <i>Read data</i>, ou seja, o componente da mmeória irá buscar um dado na memória a partir do endereço que vem de <i>Address</i>. </li>
                                <li><b>MemWrite:</b> Quando 1, o dado em <i>Write data</i> é escrito na memória, no endereço passado com entrada (em <i>Address</i>). Em outras palavras, esse sinal de controle define se a <i>Data Memory</i> efetuará uma operação de escrita na memória. </li>
                                <li><b>Branch (PCSrc):</b> Define se o contador de programa seguirá para a próxima instrução ou se uma operação de desvio será realizada ("pulando" para determinada instrução). Quando 0, PC é incrementado em 4 (PC vai para a próxima instrução na sequência); quando 1, PC é incrementado no valor que levará à instrução indicada pelo desvio. </li>
                                <li><b>MemtoReg:</b> Quando 0, o resultado da operação feita na ULA é enviado para <i>Write data</i>; quando 1, um dado da memória é enviado. Esse sinal de controle define que valor será enviado para <i>Write data</i> para possivelmente ser escrito em um registrador (cujo endereço estará em <i>Write register</i>).</li>
                                <li><b>RegWrite:</b> Quando 1, o registrador na entrada <i>Write register</i> recebe o valor de <i>Write data</i>. Esse sinal diz para o banco de registradores se deve ocorrer um processo de escrita em algum registrador - escrita do dado de <i>Write data</i> no registrador cujo endereço estará em <i>Write register</i>). </li>
                                <li><b>ALUSrc:</b> Quando 0, o segundo operando da ULA vem de <i>Read data 2</i>; quando 1, o segundo operando da ULA vem dos bits 0 a 15 da bloco de instrução atual (32 bits no total). Nesse segundo caso, os 16 bits são estendidos e transformados em 32 bits.</li>
                                <li><b>ALUOp(2 bits):</b> esse sinal é enviado para a unidade controladora da ULA (<i>ALU control</i>) que por sua vez emitirá 3 bits de saída responsáveis por determinar qual operação será realizada na ULA. Quando 00, ocorre uma adição - para, por exemplo, calcular o endereço de acesso à memória; quando 01, ocorre uma subtração - para, por exemplo, verificar a igualdade entre os valores de <i>Read data 1</i> e da segunda entrada da ULA; quando 10 (em binário), a operação que ocorrerá depende do campo <i>funct</i> (6 bits) presente em instruções do tipo R - podendo variar entre <i>add</i>, <i>sub</i>, <i>and</i> , <i>or</i> e <i>slt</i>.</li>
                            </ul>
                        </div>
                        <p>
                            Um exemplo simples para demonstrar o funcionamento da unidade de controle seria: <b>add $s1 $s2 $s3</b>. Instrução do tipo R que gera os seguintes sinais:
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={instructionAddBits} className="img-fluid shadow rounded w-50" alt="Desenho da ULA com suas entrada e saídas" /> 
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col"> Nome do sinal </th>
                                        <th scope="col"> Valor (em binário) </th>
                                        <th scope="col"> Descrição </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"> RegDst </th>
                                        <td> 1 </td>
                                        <td className="text-left"> <i>Write register</i> recebe os bits 11 a 15 da instrução de 32 bits, ou seja, recebe o endereço de $s1. </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> MemRead </th>
                                        <td> 0 </td>
                                        <td className="text-left"> Nenhuma operação de leitura é realizada na memória. </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> MemWrite </th>
                                        <td> 0 </td>
                                        <td className="text-left"> Nenhuma operação de escrita é realizada na memória. </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Branch (PCSrc) </th>
                                        <td> 0 </td>
                                        <td className="text-left"> Nenhum tipo de desvio será realizado. PC será incrementado em 4. </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> MemtoReg </th>
                                        <td> 0 </td>
                                        <td className="text-left"> O resultado da ULA é passado para o <i>Write data</i> no banco de registradores (como o valor a ser escrito em algum registrador). </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> RegWrite </th>
                                        <td> 1 </td>
                                        <td className="text-left"> O banco de registradores deve fazer uma operação de escrita no registrador que está em <i>Write register</i>. Nele será armazenado o valor presente em <i>Write data</i>. </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> ALUSrc </th>
                                        <td> 0 </td>
                                        <td className="text-left"> A segunda entrada da ULA virá do banco de registradores (de <i>Read data 2</i>). </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> ALUOp </th>
                                        <td> 10 </td>
                                        <td className="text-left"> Juntamente com os dados do campo <i>funct</i> (no caso da operação <i>add</i>: 100000), faz com que a ULA realize uma adição. </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <img src={datapathAdd} className="img-fluid w-75" alt="Caminho de dados de exemplo para explicar os sinais de controle" /> 
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        {/* ---------------------------- TIPOS DE INSTRUÇÕES (R, I, J) ---------------------------- */}
                        <h1 id="instrucoes" className="mainSubjectTitle"> Tipos e conjuntos de instruções </h1>
                    </div>
                    <div className="container-fluid">
                        <p>
                            Existem três <b>tipos de operações</b> a serem estudadas nessa linguagem. São elas: <i>R-format, I-format e J-format</i>. Cada operação é composta por 32 bits e apresenta um “padrão” de informação diferente nesses 4 bytes.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={instructionComposition} className="img-fluid shadow rounded w-50" alt="Formato (composição) das instruções R, I e J" /> 
                        </div>
                        <p>
                            O <b>operation code (op)</b> é responsável por identificar a operação. Os valores <b>rs</b>, <b>rt</b>, e <b>rd</b> são endereços de registradores no sistema. Os possíveis registradores que eles representam estão na lista abaixo:
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={listRegisters} className="img-fluid shadow rounded w-50" alt="Lista de registradores a serem usados (MIPS)" /> 
                        </div>
                        <p>
                            <b>Shamt</b> é o valor para operações do tipo <i>shift</i> (deslocamento de bits). O <b>function</b> é necessário em instruções do tipo R para identificar as operações feitas na ULA - assim como faz o <i>operation code</i>. O <b>address</b> e o <b>target address</b> são ambos endereços, a diferença está em seus tamanhos. O <b>immediate</b> é usado para valores imediatos, ou seja, valores que não precisamos buscar em registradores -  ele é passado direto na instrução, como em li $t0, <b>100</b>.
                        </p> 
                    </div>
                </div>
                <div className="row py-4">
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        {/* ---------------------------- CAMINHO DOS DADOS (DATAPATH) ---------------------------- */}
                        <h1 id="caminho_dados" className="mainSubjectTitle"> Caminho dos dados </h1>
                    </div>
                    <div className="container-fluid">
                        <p>
                            Várias ações serão realizadas para qualquer instrução na arquitetura MIPS. Cada tipo de instrução realiza um conjunto de ações no <b>caminho de dados</b>. Porém, as duas primeiras etapas são idênticas para todas as instruções:
                        </p>
                        <ol className="pl-4">
                            <li>Buscar a instrução na memória usando a posição indicada pelo contador de programa (PC); </li>
                            <li>Ler os registradores indicados na instrução. </li>
                        </ol>
                        <p>
                            Qualquer instrução pode (ou não) utilizar um ou mais componentes principais da arquitetura: memória de instruções, banco de registradores, ULA e memória de dados. 
                        </p>
                        <p>
                            Pensando em caminho de dados, vale ressaltar que os multiplexadores presentes são responsáveis por selecionar (de acordo com os sinais de controle) que dados serão repassados para os próximos componentes no circuito. Além disso, o clocking (já explicado) define quando é possível haver escrita e leitura de dados. 
                        </p>
                        <p>
                            Além do contador de programa e da memória de instruções, que são usadas em todos os tipos de instruções, vale lembrar que instruções diferentes usam componentes diferentes. Por exemplo, para instruções do tipo R, a ULA e o Banco de Registradores são utilizados. Já para instruções <i>Load/Store</i> (do tipo I ou tipo R), são utilizados Banco de Registradores, ULA e Memória - podendo usar, também, uma unidade de deslocamento de bits (<i>sign-extension unit</i>).  Instruções de desvio (em geral, tipo J) usam Banco de Registradores, ULA, um somador para o possível desvio e uma <i>sign-extension unit</i>.
                        </p>
                        <p>
                            Abaixo, é possível visualizar os caminhos de dados de algumas instruções comuns.
                        </p>
                    </div>
                    <div className="container-fluid mx-3 shadow">
                        <div className="dropdown">
                            <button className="datapathInstructionButton btn btn-secondary dropdown-toggle" type="button" id="datapathSelectionButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Selecione uma instrução
                            </button>
                            <div className="dropdown-menu" aria-labelledby="datapathSelectionButton">
                                <button className="dropdown-item" onClick={() => setInstructionImageName("ADD")}>ADD (soma)</button>
                                <button className="dropdown-item" onClick={() => setInstructionImageName("JUMP")}>J (jump) </button>
                                <button className="dropdown-item" onClick={() => setInstructionImageName("BEQ")}>BEQ (branch if equal) </button>
                            </div>
                        </div>
                        <h3 className="pt-4 pb-2"> {instructionImageName} </h3>
                        <div className="d-flex justify-content-left my-3">
                            <img src={ADD} ref={datapathImageComponent} className="img-fluid shadow rounded" alt="Exemplo de caminho de dados" /> 
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center pb-4">
                    <Link to="/bibliografia"><b> Acesse aqui a blibliografia utilizada para montar esse material </b></Link> 
                </div>
            </div>
            <Footer />
        </div>
    );
}