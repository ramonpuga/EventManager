
// Completar area de Eventos com conteudo do dia selecionado
document.querySelector('body').addEventListener('click', (e) => {
    document.querySelector('.compromissos').innerText = document.querySelector('.vanilla-calendar-date.vanilla-calendar-date--active.vanilla-calendar-date--selected').getAttribute('data-calendar-date').slice(0, 15);
    document.querySelector('.atividade').innerText = document.querySelector('.vanilla-calendar-date.vanilla-calendar-date--active.vanilla-calendar-date--selected').getAttribute('atividade');
    document.querySelectorAll('.vanilla-calendar-date.vanilla-calendar-date--active').forEach((element, index) => {
        if(element.getAttribute('atividade') !== null) {
            element.style.backgroundColor = '#4fff00a1';
//            console.log(element.innerText+' '+element.getAttribute('data-calendar-date').slice(0, 15)+' '+index)
//            console.log(element.innerText, element.getAttribute('atividade'))
        } else {
            element.style.backgroundColor = "";
        }
    });
});

// Botão Limpar Eventos
document.querySelector('.clearativ').addEventListener('click', (e) => {
    document.querySelectorAll('.vanilla-calendar-date.vanilla-calendar-date--active').forEach((element, index) => {
        element.removeAttribute('atividade');    
    });
});

// Botão Remover Evento
document.querySelector('.removativ').addEventListener('click', (e) => {
    document.querySelector('.vanilla-calendar-date.vanilla-calendar-date--active.vanilla-calendar-date--selected').removeAttribute('atividade');    
});

// Botão Marcar Evento
document.querySelector('.addativ').addEventListener('click', (e) => {
    var motivo = prompt('Escreva uma informação/lembrete do evento(opcional)')
    document.querySelector('.vanilla-calendar-date.vanilla-calendar-date--active.vanilla-calendar-date--selected').setAttribute('atividade', motivo);    
});