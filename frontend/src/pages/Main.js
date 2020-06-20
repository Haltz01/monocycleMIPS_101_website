import React from 'react'; // useEffect> para chamada a API assim que o componente for exibido na tela
import { Helmet } from 'react-helmet';
import ReactScroll from "react-scroll";
// useState -> usado para ter váriaveis que vão ser manipuladas pelos componentes
import './Main.css';

import Navbar from './Navbar.js';
import Footer from './Footer.js';

import testeImg from '../assets/teste.jpg';
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
                        <h1 className="mainTitle text-center"> Organização e arquitetura de computadores </h1>
                        <h3 className="mainSubtitle w-75 text-center"> Aprenda aqui o básico sobre arquiteturas RISC, CISC e, em especial, <b>MIPS</b>. Cloking, componentes da arquitetura, caminho de dados, operações e mais! </h3>
                    </div>
                </div>
                <div className="row d-flex flex-row py-4">
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="tipos_arquitetura" spy={true} smooth={true} duration={800} offset={-100} className=""> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                                Seja intruduzido a alguns <b>tipos de arquitetura</b> diferentes e aprenda, também, o básico sobre a arquitetura MIPS.
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="componentes_MIPS" spy={true} smooth={true} duration={800} offset={-100} className=""> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                                Saiba mais sobre os principais <b>componentes da arquitetura MIPS</b>: banco de registradores, unidade de controle, unidade lógico-aritmética, memória...
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="instrucoes" spy={true} smooth={true} duration={800} offset={-100} className=""> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
                            <div className="mainIconsDescription container-fluid text-center p-0 mt-2 d-sm-none d-none d-md-block">
                            Aprenda sobre os <b>tipos de instruções</b> usados no MIPS. Instruções do tipo I, J e R - junto de exemplos explicativos.
                            </div>
                        </ReactScroll.Link>
                    </div>
                    <div className="mainIcon col d-flex flex-column justify-content-top align-items-center">
                        <ReactScroll.Link to="caminho_dados" spy={true} smooth={true} duration={800} offset={-100} className=""> 
                            <img src={testeImg} className="img-fluid shadow rounded" alt="Imagem de teste" /> 
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
                    <div className="mainSubjectText container-fluid">
                        
                        {/* ---------------------------- ARQUITETURA MIPS (RISC) ---------------------------- */}
                        <h3> Arquitetura MIPS </h3>
                        <p>
                            MIPS é o nome de uma arquitetura de processador baseado no uso de registradores. Suas instruções tem à disposição 32 registradores para realizarem operações. Os processadores MIPS são do formato RISC (Reduced Instruction Set Computer), que é conhecido por ter um pequeno conjunto de instruções possíveis para o processador executar. Alguns exemplos de projetos que utilizam arquitetura MIPS são: Nintendo 64, Playstation 2, e roteadores Cisco.
                        </p>
                        <p>
                            A arquitetura MIPS pode ser implementada de várias formas diferentes: monociclo, multiciclo ou pipelined. O monociclo, como já foi dito, trabalha com uma operação por ciclo, já o multiciclo ou o pipelined trabalham com múltiplas operações ao mesmo tempo. No multiciclo, a operação é dividida em várias partes menores, e no pipelined, além da operação ser dividida em partes menores, várias são as instruções executadas ao mesmo tempo.
                        </p>

                        {/* ---------------------------- CLOCKING ---------------------------- */}
                        <h3> Clocking </h3>
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
                    <div className="mainSubjectText container-fluid d-flex flex-column justify-content-center">
                        {/* ---------------------------- BANCO DE REGISTRADORES ---------------------------- */}
                        <h3> Banco de Registradores </h3>
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
                        {/* FAZER MODIFICAÇẼSS AQUI !!! */}
                        <h3>Unidade Lógica e Aritmética</h3> 
                        <p>
                            A <b>Unidade Lógica e Aritmética</b> (ULA ou, em inglês, ALU) é responsável pelas operações de soma, subtração, divisão, entre outros. De forma mais abrangente, ela é responsável por operações aritméticas e lógicas (no geral, comparações) como já demonstra seu nome. Possui dois valores de entrada e duas saídas (uma para o resultado da operação aritmética e outra para condições de desvio). Quando a operação enviada à ULA for de desvio, como um <i>branch</i> por exemplo, basta dizer se a condição foi satisfeita ou não. Para isso, existe a saída <i>Zero</i>, que assume o valor 1 caso a condição que está sendo avaliada for satisfeita e, caso contrário, assume valor 0.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={ULA} className="img-fluid shadow rounded w-25" alt="Desenho da ULA com suas entrada e saídas" /> 
                        </div>

                        {/* ---------------------------- PC - PROGRAM COUNTER ---------------------------- */}
                        <h3>Contador de Programa</h3> 
                        <p>
                            As instruções na arquitetura MIPS tem 32 bits (ou seja, 4 bytes), e como elas são organizadas sequencialmente na memória, o que ocorre é que após a interpretação de uma, basta andar 4 bytes na memória para começar a executar a próxima instrução. Tendo isso em vista, há o <b><i>Program Counter</i></b> (PC; contador de programa), responsável por indicar em que endereço de memória está a instrução atual, além de “andar” pela memória a fim de dar continuidade ao programa (indo para o endereço da próxima instrução que deve ser executada). O contador de programa é a unidade apresentada abaixo.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={buscaInstrucoes} className="img-fluid shadow rounded w-50" alt="Busca de instruções: contador de programa e memória de instruções" /> 
                        </div>
                        <p>
                            O endereço da instrução é enviado ao <i>Instruction Memory</i> (IM), e o endereço contido em PC é atualizado para PC + 4 (que é o endereço da próxima instrução). A <i>Instruction Memory</i> fica responsável por buscar a instrução na memória (a partir do endereço contido no contador de programa) e passar para os outros componentes.
                        </p>

                        {/* ---------------------------- MULTIPLEXADORES - MUX ---------------------------- */}
                        <h3>Multiplexadores</h3> 
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
                        <h3>Memória (de dados)</h3> 
                        <p>
                            A <b><i>Data Memory</i></b> é um componente necessário quando buscamos ou escrevemos algo na memória em função de seu endereço, como em uma operação de <i>load word</i> (lw) ou <i>store word</i> (sw). Ela é responsável por recuperar ou armazenar dados presentes em certos endereços de memória, os quais passados como entrada para ela. Caso haja saída (sinal de controle <i>MemRead</i> é 1), ela será o dado buscado na memória por esse componente.
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <img src={memoriaDados} className="img-fluid shadow rounded w-25" alt="Componente da memória de dados (data memory)" /> 
                        </div>

                        {/* ---------------------------- UNIDADE DE CONTROLE ---------------------------- */}
                        {/* FAZER MODIFICAÇẼSS AQUI !!! */}
                        <h3> Unidade de controle (monociclo)</h3>
                        <p>
                            Uma instrução do tipo J não necessita ULA; instruções do tipo I assinalam os mesmos bits de endereço em <i>read register 2</i> e <i>write register</i>; já as de tipo R possuem 3 endereços distintos para cada entrada do banco de registradores. Tendo isso em vista, a <b>Unidade de Controle</b> é o componente responsável por direcionar esses bits recebidos entre os demais componentes da arquitetura de acordo com o tipo da instrução, criando, assim, o caminho de dados correto.
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
                        <h1 id="instrucoes" className="mainSubjectTitle"> Tipos e conjuntos de instruções </h1>
                    </div>
                    <div className="mainSubjectText container-fluid">
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
                            <b>Shamt</b> é o valor para operações do tipo <i>shift</i> (deslocamento de bits). O <b>function</b> é necessário em instruções do tipo R para identificar as operações feitas na ULA - assim como faz o <i>operation code</i>. O <b>address</b> e o <b>target address</b> são ambos endereços, a diferença está em seus tamanhos. No caso das instruções do tipo J, ocorre uma operação de <i>shift</i> para poder escrever o endereço (aonde??), resultando em um valor que pode ser maior ao encontrado em instruções do tipo I. O <b>immediate</b> é usado para valores imediatos, ou seja, valores que não precisamos buscar em registradores -  ele é passado direto na instrução, como em li $t0, <b>100</b>.
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