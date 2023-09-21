document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede a ação padrão do envio do formulário

    // Limpa as mensagens de erro anteriores
    document.getElementById('emailError').textContent = '';
    document.getElementById('senhaError').textContent = '';

    // Validação do campo de e-mail
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('emailError').textContent = 'O campo E-mail deve ser preenchido.';
    }

    // Validação do campo de senha
    const senha = document.getElementById('senha').value;
    if (senha.trim() === '') {
        document.getElementById('senha').style.border = '1px solid red';
        document.getElementById('senhaError').textContent = 'O campo Senha deve ser preenchido.';
    }
});
