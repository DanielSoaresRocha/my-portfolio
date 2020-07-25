import React, { useEffect, useState } from 'react';

import './styles.css'

import { BsDownload } from "react-icons/bs";
import ProgresBar from '../../components/ProgressBar'
import fillProgressBars from '../../utils/fillProgressBars'

import fundo from '../../assets/images/fundo.jpg'
import myImage from '../../assets/images/eu.jpg'
import curriculo from '../../assets/files/daniel_rocha.pdf';

//icons
import instagran from '../../assets/icons/instagran.png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'

function Home () {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fillProgressBars()
        setProjects([
            {
                id: 0,
                nome: 'nome0',
                img: myImage
            },
            {
                id: 1,
                nome: 'nome1',
                img: myImage
            },
            {
                id: 2,
                nome: 'nome2',
                img: myImage
            }
        ])
    }, [])

    function handleClick (e) {
        const getId = e.target.id

        document.querySelector('button.active').classList.remove('active')
        document.getElementById(getId).classList.add('active')
        document.querySelectorAll('li.animation').forEach(element => element.classList.remove('animate'))

        setTimeout(() => {
            document.querySelectorAll('li.animation').forEach(element => element.classList.add('animate'))

            if (getId === 'web') {
                setProjects(projects.map(project => {
                    project.img = myImage
                    return project
                }))
            } else if (getId === 'mobile') {
                setProjects(projects.map(project => {
                    project.img = fundo
                    return project
                }))
            } else {
                setProjects(projects.map(project => {
                    project.img = myImage
                    return project
                }))
            }
        }, 100);
    }

    return (
        <div className='containerHome'>
            <img src={fundo} alt='background' />
            <header>
                <div className='logo'>
                    <h1>Daniel Rocha</h1>
                </div>
                <div className='menu'>
                    <a href='#history'>História</a>
                    <a href='#skills'>Habilidades</a>
                    <a href='#projects'>Projetos</a>
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
                <div className='escurecer'>
                    <h1 id='skills'>O que eu sei fazer</h1>
                    <ul>
                        <li>
                            <h2>Skills Principais</h2>
                            <ProgresBar skill='JavaScript' width='160' />
                            <ProgresBar skill='HTML' width='100' />
                            <ProgresBar skill='CSS' width='200' />
                            <ProgresBar skill='Java' width='250' />
                        </li>
                        <li>
                            <h2>Desenvolvimento</h2>
                            <ProgresBar skill='Front-End' width='210' />
                            <ProgresBar skill='Mobile' width='235' />
                            <ProgresBar skill='Backend' width='110' />
                        </li>
                        <li>
                            <h2>Outros</h2>
                            <ProgresBar skill='Firebase' width='210' />
                            <ProgresBar skill='Eletrônica' width='135' />
                            <ProgresBar skill='Backend' width='100' />
                        </li>
                    </ul>
                </div>
            </div>

            <div className='projects'>
                <h1 id='projects'>Meus projetos</h1>
                <div className='groupButtons'>
                    <button id='web' onClick={handleClick} className='active'>Web</button>
                    <button id='mobile' onClick={handleClick}>Mobile</button>
                    <button id='othes' onClick={handleClick}>Desktop</button>
                </div>

                <ul>
                    {projects.map(project => (
                        <li className='animation' key={project.id}>
                            <img src={project.img} alt='project' />
                            <img src={fundo} alt='fundo' />
                            <p>{project.nome}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='contact'>
                <h2>Minhas redes sociais</h2>
                <div className='networks'>
                    <a href='https://github.com/DanielSoaresRocha'>
                        <img src={github} alt='github' />
                    </a>
                    <a href='https://www.linkedin.com/in/daniel-soares-rocha-1a71101a9/'>
                        <img src={linkedin} alt='linkedin' />
                    </a>
                    <a href='https://www.instagram.com/dan_.rocha/'>
                        <img src={instagran} alt='instagran' />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Home;
