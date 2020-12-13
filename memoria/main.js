//renderizando/capiturar html
const cardBoard = document.querySelector("#cardboard");
const placar = document.querySelector('#pontos');
const erros = document.querySelector('#erro');
let pontos = 0;
let errro =0;
//audio de iniciar

//array para armazenar imagens
const imgs = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg"
];
//função para sortear 
function generateRan() {
  var max = 6;
  var random = [];
  for (var i = 0; i < max; i++) {
    var temp = Math.floor(Math.random() * max);
    if (random.indexOf(temp) == -1) {
      random.push(temp);
    }
    else
    i--;
}
return random
}

const valores1 = generateRan();
const valores2 = generateRan();
//criar hmtl com imagnes
let cardHTML1 = "";
let cardHTML2 = "";

for (var i = 0; i < 6; i++) {
  //concatenar o html e renderizar as classes
  //a cada ineteração ele busca uma imagem no array
cardHTML1 += `<div class="memory-card" data-card="${imgs[valores1[i]]}">
<img class="front-face" src="img/${imgs[valores1[i]]}"/>
<img class="back-face" src="img/lava.jpg">
</div>`

cardHTML2 += `<div class="memory-card" data-card="${imgs[valores2[i]]}">
<img class="front-face" src="img/${imgs[valores2[i]]}"/>
<img class="back-face" src="img/shark.jpg">
</div>`
}
//somar/receber o html/cardhtml
cardBoard.innerHTML = cardHTML1 + cardHTML2;

// Fim da Renderização HTML //

const cards = document.querySelectorAll(".memory-card");
//pegar todos os memories card
//para alterar as imagens
let firstCard, secondCard;
let lockCards = false; //trancar as cartas e so abrir duas
//funçao para receber um card novo/troca de posição
function flipCard() {
  
  if (lockCards) return false;
  //pegar a lista flip
  this.classList.add("flip");
//texte
  if (!firstCard) {
    firstCard = this;
    return false;
  }
//teste 2
  secondCard = this;

  checkForMatch();
}
//checar se corresponde card do primeiro é o card igual do segundo
function checkForMatch() {
  //verificar se o card do primeiro é igaul ao card do segundo
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : pontuarCartas();
}
//funcão para pontuar
function pontuarCartas(){
    pontos++;
    placar.innerText = 'PONTUAÇÃO: '+pontos;
    resetCards(false);
    if(pontos==6){
      setTimeout(()=>{
        if(pontos>errro){
          placar.innerText ="VOCÊ GANHOU!!"
          placar.style.color = 'blue'
        }else if(pontos == errro){
          placar.style.color = 'darkcyan'
          placar.innerText = "EMPATE!"
        }else if(pontos<errro){
          placar.innerText = "VOCÊ PERDEU!!"
          placar.style.color = 'red'
        }
      },2000)
    }
  }
  //funcção para remover flip
  function unFlipCards() {
    lockCards = true;
    errro++
    erro.innerText = 'ERROS: '+ errro;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
  
      resetCards();
    }, 1000);
  }
  //resetar as cards
  function resetCards(isMatch = false) {
    if (isMatch) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    }
  
    [firstCard, secondCard, lockCards] = [null, null, false];
    console.log('4')
  }
  
  cards.forEach(card => card.addEventListener("click", flipCard));