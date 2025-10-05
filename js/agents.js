window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        document.querySelector('.nav').classList.remove('blur');
    } else if (window.scrollY > 0) {
        document.querySelector('.nav').classList.add('blur');
    }
});