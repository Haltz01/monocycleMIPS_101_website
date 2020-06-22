import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Bibliografia() {
    return (
        <div>
            <Helmet>
                <title> learn $MIPS; - Bibliografia </title>
                <meta name="description" content="Página com as referências usadas para montar o material disponibilizado em nossa Homepage." />
            </Helmet>
            <div className="container bg-white">
                <div className="row">
                    <div className="mainContainerBibliografia shadow rounded text-justify m-4 p-4">
                        <h1> Bibliografia </h1>
                        <h5> Aqui estão as fontes (disponíveis na Internet) utilizadas na criação do conteúdo presente na nossa Homepage. Além das referências aqui presentes, os slides, videoaulas e referências bibliograficas do professor Rodolfo Meneguette - junto do que os alunos absorveram do conteúdo - utilizados ao longo das aulas de Organização e Arquitetura de Computadores na USP - São Carlos (1º semestre de 2020) serviram como base para o que fizemos aqui. </h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="https://docente.ifrn.edu.br/jeangaldino/disciplinas/2016.1/organizacao-de-computadores/aula-13-logisim-banco-de-registradores">Organização de computadores - Segundo Bimestre - CNAT – 2016.1 - Prof. Jean Galdino</a></li>
                            <li class="list-group-item"><a href="http://www.professores.uff.br/lbertini/wp-content/uploads/sites/108/2017/08/Cap-4-Caminho-de-dados-e-controle.pdf">CAPÍTULO 4 - CAMINHO DE DADOS E CONTROLE</a></li>
                            <li class="list-group-item"><a href="http://www.luiscaldas.com.br/unip/arquitetura/Notas%20de%20aulas/SDEC_aula_05_org.pdf">Arquitetura RISC x CISC – Prof. Luís Caldas 2017</a></li>
                            <li class="list-group-item"><a href="https://pt.wikipedia.org/wiki/CISC">CISC - Wikipedia</a></li>
                            <li class="list-group-item"><a href="https://ic.unicamp.br/~pannain/mc542/aulas/ch3_arq.pdf">Conjunto de instruções - MIPS</a></li>
                        </ul>
                    </div>
                    <div className="container-fluid text-center pb-4">
                        <Link to="/"><b> Voltar para a homepage </b></Link> 
                </div>
                </div>
            </div>
        </div>
    );
}