document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#002776'; // Azul da bandeira do Brasil
            nav.style.transition = '0.3s';
        } else {
            nav.style.backgroundColor = '#ffdf00'; // Amarelo da bandeira do Brasil
        }
    });
});
