
const formulario = document.getElementById("formulario-login");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;


    const usuarioCorreto = "user";
    const senhaCorreta = "123";


    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login feito com sucesso!");


        // Aqui você pode redirecionar para outra página:
        // window.location.href = "inicio.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});


document.getElementById("esqueci-senha").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Entre em contato com o administrador para recuperar sua senha.");
});


document.getElementById("registrar").addEventListener("click", function (event) {
    event.preventDefault();
    alert("A página de cadastro ainda não foi criada.");
});
