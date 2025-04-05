// Seleciona o container onde os cards serão exibidos
const containerCards = document.getElementById('cards');

// Recupera os eventos salvos do localStorage
const eventosSalvos = JSON.parse(localStorage.getItem('eventos')) || [];

// Percorre todos os eventos e cria os cards
eventosSalvos.forEach(evento => {
    const card = document.createElement('section');
    card.classList.add('cards-junction');

    card.innerHTML = `
         <section class="cards-junction">
            <section id="cards-content">
                <div class="cards-image">
                    <img src="${evento.banner}" alt="Foto do Evento/Show">
                </div>

                <div class="cards-title-description">
                    <span class="title-card">${evento.nome}</span>
                    <p class="description-card">${evento.descricao}</p>
                </div>

                <div class="cards-information">
                    <div class="cards-date">
                        <div class="cards-dayweek">
                            <span>${getDiaSemana(evento.data)}</span>
                        </div>
                        <span>${formatarDataPorExtenso(evento.data)}</span>
                        <span> - </span>
                        <span>${formatarHorario(evento.horario)}</span>
                    </div>

                    <div class="cards-ingresso">
                        <button>Ingressos</button>
                    </div>
                </div>
            </section>
        </section>
    `;

    containerCards.appendChild(card);
});

// Função auxiliar para converter data em dia da semana
function getDiaSemana(dataString) {
    const dias = ['Dom', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const data = new Date(dataString);
    return dias[data.getDay()];
}

function formatarDataPorExtenso(dataString) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const data = new Date(dataString + 'T00:00:00'); // garantir compatibilidade
    const dia = data.getDate();
    const mes = meses[data.getMonth()];

    return `${dia} de ${mes}`;
}

function formatarHorario(horarioString) {
    const [hora, minuto] = horarioString.split(':');

    if (minuto === '00') {
        return `${hora}h`;
    } else {
        return `${hora}h${minuto}`;
    }
}


