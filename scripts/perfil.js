document.addEventListener("DOMContentLoaded", function () {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
    if (usuarioLogado) {
      document.getElementById("nome").value = usuarioLogado.nome || "";
      document.getElementById("email").value = usuarioLogado.email || "";
      document.getElementById("telefone").value = usuarioLogado.telefone || "";
      document.getElementById("senha").value = usuarioLogado.senha || "";
    }
  
    document.getElementById("editarBtn").addEventListener("click", function () {
      document.getElementById("nome").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("telefone").disabled = false;
      document.getElementById("senha").disabled = false;
  
      this.textContent = "Salvar Alterações";
      this.addEventListener("click", salvarAlteracoes);
    });
  
    function salvarAlteracoes() {
        const novoUsuario = {
          nome: document.getElementById("nome").value,
          email: document.getElementById("email").value,
          telefone: document.getElementById("telefone").value,
          senha: document.getElementById("senha").value
        };
      
        // Atualiza o localStorage do usuário logado
        localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));
      
        // Atualiza na lista de usuários cadastrados
        let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
      
        usuarios = usuarios.map((user) => {
          // Comparando pelo email antigo (antes de editar)
          if (user.email === JSON.parse(localStorage.getItem("usuarioLogado")).email) {
            return novoUsuario; // substitui pelo novo
          }
          return user;
        });
      
        localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));
      
        alert("Dados atualizados com sucesso!");
      
        // Desabilita os campos novamente
        document.getElementById("nome").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("telefone").disabled = true;
        document.getElementById("senha").disabled = true;
      
        document.getElementById("editarBtn").textContent = "Editar Dados";
        document.getElementById("editarBtn").removeEventListener("click", salvarAlteracoes);
      }
      
  });
  