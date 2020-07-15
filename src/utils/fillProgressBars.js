const porcentagens = [160, 100, 200, 250, 210, 235, 210, 210, 135, 100]

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


function animeScroll () {
    const target = document.querySelectorAll('[data-anime]')

    const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4)

    if (windowTop > target[0].offsetTop) {
        for (let i = 0; i < target.length; i++) {
            target[i].style.width = `${porcentagens[i]}px`
        }
    } else {
        console.log('voltou')
        target.forEach(element => element.style.width = '0px')
    }
}

const fillProgressBars = () => {
    window.addEventListener('scroll', debounce(() => {
        animeScroll();
    }, 200))
}

export default fillProgressBars

