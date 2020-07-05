import React from 'react';
import './styles.css'

import fundo from '../../assets/images/fundo.jpg'
import logo from '../../assets/images/logo.jpg'

function Home () {
    return (
        <div className='containerHome'>
            <img src={fundo} alt='background' />
            <header>
                <img src={logo} alt='logo' />

            </header>
        </div>
    );
}

export default Home;
