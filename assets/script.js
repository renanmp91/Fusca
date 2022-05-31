function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function decidirMenuScroll(){
    if (window.scrollY === 0) {
        document.querySelector('header').style.display='flex';
    } else {
        document.querySelector('header').style.display='none';
    }
}

window.addEventListener('scroll', decidirMenuScroll);

