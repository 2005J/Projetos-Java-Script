let musicas = [
    {titulo: 'Guitar Solo', artista: 'Joan Jett', src: './audios/Outreach - Go By Ocean _ Ryan McCaffrey.mp3', img: './img/hector-bermudez-iIWDt0fXa84-unsplash.jpg'},

    {titulo: 'Hip-Hop', artista: '2 Pac', src: './audios/Forest Find - TrackTribe.mp3', img: './img/yohann-libot-G85pYRDxmbc-unsplash.jpg'},

    {titulo: 'Orquestra Sinfonia', artista: 'Orquetra', src: './audios/Abroad Again - Jeremy Blake.mp3', img: './img/zach-lezniewicz-czPs0z3-Ggg-unsplash.jpg'}
];



let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(renderizarMusica);

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', ()  =>{
 if(renderizarMusica > 0){
  renderizarMusica = 2;
 }

 renderizarMusica--;
  
   renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', ()  =>{
  if(renderizarMusica < 2){
    renderizarMusica = 0;
  }

  renderizarMusica++;
 
  renderizarMusica(indexMusica);  
});

// Funções

function renderizarMusica(index){
 musica.setAttribute('src', musicas[index].src);
 musica.addEventListener('loadeddata', () => {
  nomeMusica.textContent = musicas[index].titulo;
  nomeArtista.textContent = musicas[index].artista;
  imagem.src = musicas[index].img;
  duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
 });
}

function tocarMusica(){
  musica.play();
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
  document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra .style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos (Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
   let campoMinutos = Math.floor(segundos / 60);
   let campoSegundos = segundos % 60;
   if(campoSegundos < 10){
    campoSegundos = '0' + campoSegundos;
   }

   return campoMinutos+ ":" +campoSegundos;
}


