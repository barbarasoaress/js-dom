function saudar() {
    const nome = document.getElementById('nome')
    const tecnologia = document.getElementById('tecnologia')
    const msg = document.getElementById('msg')
    const card = document.getElementById('card')

    if (nome.value === '') {
        alert('Digite seu nome!');
        return; //O cógido para aqui e não executa o que vem depois.
    }

    if (tecnologia.value === '') {
        alert('Digite uma tecnologia!');
        return;
    }
    msg.innerHTML = `Olá, ${nome.value}, você está apredendo ${tecnologia.value}!` // .value Acessa/pega o que foi digitado.
    card.innerHTML = `<h2>${nome.value}</h2><p>Tecnologia: ${tecnologia.value}</p>`

}

function limpar() {
    document.getElementById('nome').value='';
    document.getElementById('tecnologia').value='';
    document.getElementById('card').innerHTML='';
    document.getElementById('msg').innerHTML='';
}