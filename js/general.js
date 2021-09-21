window.onscroll = () => {
    if (window.scrollY === 0) {
        document.querySelector('nav').classList.remove('fondo-verde');
    } else {
        document.querySelector('nav').classList.add('fondo-verde');
    }
};