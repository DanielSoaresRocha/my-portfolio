import React from 'react';
import './styles.css'

import { BsDownload } from "react-icons/bs";

import fundo from '../../assets/images/fundo.jpg'
import myImage from '../../assets/images/eu.jpg'

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
                        É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>

                    <div className='donwloadCV'>
                        <button>Meu currículo</button>
                        <BsDownload color={"white"} size={17} />
                    </div>
                </div>
                <img src={myImage} alt='Minha imagem' />

            </div>
        </div>
    );
}

export default Home;
