import React, { useEffect } from 'react';

import './styles.css'

import { BsDownload } from "react-icons/bs";

import fundo from '../../assets/images/fundo.jpg'
import myImage from '../../assets/images/eu.jpg'
import curriculo from '../../assets/files/daniel_rocha.pdf';


function Home () {

    function debounce (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    useEffect(() => {
        const target = document.querySelectorAll('[data-anime]')

        function animeScroll () {
            const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4)

            target.forEach((element) => {
                if (windowTop > element.offsetTop) {
                    element.style.width = '200px'
                    console.log("colocou")
                } else {
                    element.style.width = '0px'
                    console.log("tirou")
                }
            })
        }

        window.addEventListener('scroll', debounce(() => {
            animeScroll();
        }, 200))

    }, [])

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
                <div className='progressBar'>
                    <div data-anime='progress' className='progress'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
