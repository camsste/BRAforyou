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


document.getElementById('email').addEventListener('input', function() {
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(emailField.value)) {
        emailError.textContent = ''; // Limpa a mensagem de erro se o e-mail é válido
    } else {
        emailError.textContent = 'Email inválido, por favor confira'; // Exibe a mensagem de erro
    }
});

document.getElementById('mensagem').addEventListener('input', function() {
    var mensagemField = document.getElementById('mensagem');
    var mensagemError = document.getElementById('mensagem-error');

    if (mensagemField.value.trim() === '') {
        mensagemError.textContent = 'Por favor, insira uma mensagem'; // Exibe a mensagem de erro se o campo estiver vazio
    } else {
        mensagemError.textContent = ''; // Limpa a mensagem de erro se o campo não está vazio
    }
});





function validateForm() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var contato = document.getElementById('contato').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    console.log("oi");
    if (!nome || !emailRegex.test(email) || !contato || !mensagem) {
        // Se qualquer campo não passar na validação, impede o envio
        console.log("se");
        return false;
    } else {
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        console.log('Obrigado por entrar em contato! Responderemos em breve.');
        // Limpa o formulário
        console.log("senot");
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contato').value = '';
        document.getElementById('mensagem').value = '';
        return false; // Retorne false para não enviar o formulário e não recarregar a página
    }
}


