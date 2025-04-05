const formEvent = document.getElementById('events-forms');

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
    const bannerFoto = document.getElementById('foto').value;

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
        banner: bannerFoto
    };

    let eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];
    eventosSalvos.push(novoEvento);
    localStorage.setItem('eventos', JSON.stringify(eventosSalvos));
    
    alert("Criado com sucesso!");
    window.location.href = 'inicio.html';
    formEvent.reset();
});
