document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("forms-logar");
  
    if (formLogin) {
      formLogin.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário
  
        const emailInput = document.getElementById("email").value.trim().toLowerCase();
        const senhaInput = document.getElementById("senha").value;
  
        // Tenta recuperar os usuários do localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
        // Procura por um usuário com e-mail e senha correspondentes
        const usuarioLogado = usuarios.find(
          (user) =>
            user.email.toLowerCase().trim() === emailInput &&
            user.senha === senhaInput
        );
  
        if (usuarioLogado) {
          alert("Login realizado com sucesso!");
  
          // Salva o usuário logado no localStorage (simulando sessão)
          localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
  
          // Redireciona para a página inicial
          window.location.href = "/pages/inicio.html";
        } else {
          alert("Usuário não encontrado ou senha incorreta. Tente novamente.");
        }
      });
    }
  });
  