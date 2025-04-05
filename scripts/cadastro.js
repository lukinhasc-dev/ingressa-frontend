const formEvent = document.getElementById('events-forms');
localStorage.removeItem('eventos');

const inputPreco = document.getElementById('preco');

inputPreco.addEventListener('input', (e) => {
    let valor = e.target.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, '');

    // Evita erro se apagar tudo
    if (valor.length === 0) {
        e.target.value = '';
        return;
    }

    // Divide por 100 pra colocar os centavos
    let numero = Number(valor) / 100;

    // Formata como moeda brasileira
    let valorFormatado = numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    e.target.value = valorFormatado;
});


formEvent.addEventListener('submit', function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById('nome').value;
  const horarioInput = document.getElementById('horario').value;
  const dataInput = document.getElementById('data').value;
  const precoInput = document.getElementById('preco').value;
  const descricaoInput = document.getElementById('descricao').value;
  const ruaInput = document.getElementById('endereco').value;
  const cidadeInput = document.getElementById('cidade').value;
  const estadoInput = document.getElementById('estado').value;
  const numeroInput = document.getElementById('numero').value;
  const fotoInput = document.getElementById('foto');
  const arquivoImagem = fotoInput.files[0];

  if (!arquivoImagem) {
    alert("Por favor, selecione uma imagem.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const base64Imagem = reader.result;

    const novoEvento = {
      nome: nomeInput,
      descricao: descricaoInput,
      horario: horarioInput,
      data: dataInput,
      preco: precoInput,
      rua: ruaInput,
      cidade: cidadeInput,
      estado: estadoInput,
      numero: numeroInput,
      banner: base64Imagem
    };

    let eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];
    eventosSalvos.push(novoEvento);
    localStorage.setItem('eventos', JSON.stringify(eventosSalvos));

    alert("Criado com sucesso!");
    window.location.href = 'inicio.html';
    formEvent.reset();
  };

  reader.readAsDataURL(arquivoImagem); // converte a imagem em base64
});


