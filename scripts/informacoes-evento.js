let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

eventos.forEach((evento, index) => {
  const eventoCard = document.createElement('div');
  eventoCard.classList.add('evento-card');
  eventoCard.innerHTML = `
    <h3>${evento.nome}</h3>
    <p>${evento.data} - ${evento.horario}</p>
    <button class="ver-detalhes" data-index="${index}">Ver Detalhes</button>
  `;
  document.getElementById('eventos-container').appendChild(eventoCard);
});

// Ação ao clicar no botão
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('ver-detalhes')) {
    const index = e.target.getAttribute('data-index');
    // salva o index do evento no localStorage
    localStorage.setItem('eventoSelecionado', index);
    window.location.href = 'evento.html';
  }
});
