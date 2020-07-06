import React from 'react';
import './styles.css'

import fundo from '../../assets/images/fundo.jpg'
//import logo from '../../assets/images/logo2.jpg'

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
                <button>Começar</button>
            </div>
        </div>
    );
}

export default Home;
