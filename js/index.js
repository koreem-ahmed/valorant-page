window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        document.querySelector('.nav').classList.remove('blur');
    } else if (window.scrollY > 0) {
        document.querySelector('.nav').classList.add('blur');
    }
});
document.getElementById('cross').addEventListener('click', ()=> {
    document.getElementById("review").classList.add("hidden");
})

document.getElementById('blog1').addEventListener('click', ()=> {
    document.getElementById("review").classList.remove("hidden");
    document.getElementById("img-veiw").src = "imgs/patch.jpg";
})
document.getElementById('blog2').addEventListener('click', ()=> {
    document.getElementById("review").classList.remove("hidden");
    document.getElementById("img-veiw").src = "imgs/tips.jpeg";
})
document.getElementById('blog3').addEventListener('click', ()=> {
    document.getElementById("review").classList.remove("hidden");
    document.getElementById("img-veiw").src = "imgs/blog 3.avif";
})
document.getElementById('blog4').addEventListener('click', ()=> {
    document.getElementById("review").classList.remove("hidden");
    document.getElementById("img-veiw").src = "imgs/blog 4.avif";
})