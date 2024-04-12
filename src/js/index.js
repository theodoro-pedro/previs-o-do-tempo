const key = "ffb0ac28b8edefafc1da0c2c37081e28";

const btnPesquisa = document.querySelector('.btn-pesquisa');

const respostaInativa = document.querySelector('.resposta');

function exibirDados(dados){
    document.querySelector(".linha.cidade").innerHTML = dados.name + ' <i class="fa-solid fa-location-dot"></i>';
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + 'ºC <i class="fa-solid fa-temperature-three-quarters">';
    document.querySelector(".umid").innerHTML = dados.main.humidity + '% <i class="fa-solid fa-droplet"></i>';
    document.querySelector(".prec").innerHTML = dados.weather[0].description;
    
    console.log(dados);
}

async function buscaCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json());
    exibirDados(dados);
}

function clickBtn() {
        const cidade = document.querySelector(".input").value;
        buscaCidade(cidade);
        mostrarMais();
}

btnPesquisa.addEventListener('click', () => {
    pesquisa();
    esconderBotao();
});

function pesquisa() {
    respostaInativa.classList.add('ativo');
}

function esconderBotao() {
    btnresposta.classList.add('remover');
}
