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

            target.forEach((element) => {
                if (windowTop > element.offsetTop) {
                    element.style.width = '200px'
                } else {
                    element.style.width = '0px'
                }
            })
        }

        window.addEventListener('scroll', debounce(() => {
            animeScroll();
        }, 200))

    }, [])

    return (
        <div className='progressBar'>
            <p>Front-end</p>
            <div data-anime='progress' className='progress'>

            </div>
        </div>
    );
}

export default ProgressBar;
