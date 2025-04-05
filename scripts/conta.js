document.getElementById("forms-cadastro").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("data-nascimento").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
  
    const novoUsuario = {
      nome,
      dataNascimento,
      email,
      senha,
      cpf,
      telefone
    };

    document.querySelector("form").addEventListener("submit", function (e) {
      const dataNascimento = document.getElementById("data-nascimento").value;
      const hoje = new Date();
      const nascimento = new Date(dataNascimento);
    
      const idade = hoje.getFullYear() - nascimento.getFullYear();
      const mes = hoje.getMonth() - nascimento.getMonth();
    
      if (
          idade < 18 ||
          (idade === 18 && mes < 0) ||
          (idade === 18 && mes === 0 && hoje.getDate() < nascimento.getDate())
      ) {
          e.preventDefault(); // Impede o envio do formulário
          alert("Você precisa ter 18 anos ou mais para se cadastrar.");
          return; // Sai da função
      }
    
      // Se passou na validação, aí sim exibe a mensagem
      alert("Cadastro realizado com sucesso!");
    });
  
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    // Verifica se o email já está cadastrado
    if (usuarios.some((u) => u.email === email)) {
      alert("Email já cadastrado.");
      return;
    }
  
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
  });

  const inputTelefone = document.getElementById("telefone");

  inputTelefone.addEventListener("input", () => {
    let valor = inputTelefone.value;
  
    // Remove tudo que não for número
    valor = valor.replace(/\D/g, "");
  
    // Aplica a máscara: (XX) XXXXX-XXXX
    if (valor.length > 0) {
      valor = "(" + valor;
    }
    if (valor.length > 3) {
      valor = valor.slice(0, 3) + ") " + valor.slice(3);
    }
    if (valor.length > 10) {
      valor = valor.slice(0, 10) + "-" + valor.slice(10, 14);
    }
  
    // Limita a 15 caracteres (com formatação)
    valor = valor.slice(0, 15);
  
    inputTelefone.value = valor;
  });

  const inputCPF = document.getElementById("cpf");

inputCPF.addEventListener("input", () => {
  let valor = inputCPF.value;

  // Remove tudo que não for número
  valor = valor.replace(/\D/g, "");

  // Aplica a máscara: XXX.XXX.XXX-XX
  if (valor.length > 3) {
    valor = valor.slice(0, 3) + "." + valor.slice(3);
  }
  if (valor.length > 7) {
    valor = valor.slice(0, 7) + "." + valor.slice(7);
  }
  if (valor.length > 11) {
    valor = valor.slice(0, 11) + "-" + valor.slice(11, 13);
  }

  // Limita a 14 caracteres (com pontuação)
  valor = valor.slice(0, 14);

  inputCPF.value = valor;
});





  