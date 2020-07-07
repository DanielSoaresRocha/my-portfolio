import React, { useEffect } from 'react';
import './styles.css'


function ProgressBar () {
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

            if (windowTop > target[0].offsetTop) {
                target[0].style.width = '250px'
                target[1].style.width = '90px'
                target[2].style.width = '200px'
                target[3].style.width = '150px'
            } else {
                target.forEach(element => element.style.width = '0px')
            }
        }

        window.addEventListener('scroll', debounce(() => {
            animeScroll();
        }, 200))

    }, [])

    return (
        <>
            <div className='progressBar'>
                <p>Front-end</p>
                <div data-anime='frontend' className='progress' />
            </div>
            <div className='progressBar'>
                <p>HTML</p>
                <div data-anime='backend' className='progress' />
            </div>
            <div className='progressBar'>
                <p>CSS</p>
                <div data-anime='backend' className='progress' />
            </div>
            <div className='progressBar'>
                <p>Javascript</p>
                <div data-anime='backend' className='progress' />
            </div>
        </>
    );
}

export default ProgressBar;
