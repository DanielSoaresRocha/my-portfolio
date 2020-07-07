import React from 'react';

import './styles.css'

import { BsDownload } from "react-icons/bs";

import fundo from '../../assets/images/fundo.jpg'
import myImage from '../../assets/images/eu.jpg'
import curriculo from '../../assets/files/daniel_rocha.pdf';

function Home () {
    return (
        <div className='containerHome'>
            <img src={fundo} alt='background' />
            <header>
                <div className='logo'>
                    <h1>Daniel Rocha</h1>
                </div>
                <div className='menu'>
                    <p>História</p>
                    <p>Habilidades</p>
                    <p>Projetos</p>
                </div>
            </header>

            <div className='presentation'>
                <h1>DANIEL ROCHA</h1>
                <hr />
                <p>Desenvolvedor Full Stack Junior</p>
                <a href='#history'>Começar</a>
            </div>

            <div className='history'>
                <div className='text'>
                    <h1 id='history'>Minha história</h1>
                    <p>
                        Comecei com programação aos 17 anos em 2017 durante o curso técnico de Automação Industrial.
                        Me interessei pela área de programação e em 2018 entrei no curso Análise e Desenvolvimento de Sistemas
                        e conclui o curso de Automação em 2019. Durante este período aumentei minha experiencia em mais linguagens
                        de programação, entre elas C, Java, Kotlin, python e JavaScript.
                        <br />
                        Tenho uma maior com experiência com aplicações android + java, onde atualmente desenvolvo meu TCC
                        utilizando essas tecnologias além de também envolver eletrônica (com microcontroladores arduino e esp32)
                        e a plataforma Firebase para armazenamento em nuvem.
                        <br />
                            Atualmente estou me especializando em web front end, cada vez mais apaixonado pela linguagem javaScript,
                            aprendendo e fazendo uso de seus Frameworks react.js, vue.js, e quasar. Estou a procura de um estágio nessas
                            áreas afins para ganhar experiência com o mercado de trabalho.
                    </p>
                    <a href={curriculo} download="DanielSoares.pdf">
                        Meu currículo
                    <BsDownload className='spacing' />
                    </a>
                </div>

                <img src={myImage} alt='Minha imagem' />
            </div>

            <div className='skills'>
                <h1>Habilidades</h1>
            </div>
        </div>
    );
}

export default Home;
