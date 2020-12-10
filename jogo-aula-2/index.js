var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');
var imagem = new Image();

imagem.src = './img/spritesheet3.png';
var faseJogo = {

    tamanhoSprite : 53,
    linhas : 14,
    colunas : 14,
    
    mapaFase :
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,2,3,3,1,1,1,2,2,2,3,3,1,1,1,
    1,3,3,1,1,1,1,1,1,3,3,1,1,1,1,3,3,1,1,1,1,1,1,3,3,3,3,3,2,1,1,1,3
    ,1,1,1,1,4,3,3,1,1,2,2,1,1,3,1,2,2,3,3,3,1,1,3,3,3,3,3,3,1,3,3,3,
    3,3,1,1,1,1,2,2,1,1,1,3,3,3,3,3,2,2,1,1,1,1,1,1,1,3,1,1,3,3,1,1,1
    ,1,3,1,2,1,1,1,1,1,3,3,2,3,3,1,3,1,1,3,3,3,3,1,3,3,2,3,1,1,3,1,1,
    3,1,1,1,1,3,3,1,1,1,1,3,1,1,3,1,1,1,2,3,3,3,3,3,3,3,3,1,3,3,3,3,3
    ,3]
    };

    function obtemJson(objeto) {
        let xmlhttp = new XMLHttpRequest();
        let fase = '';
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        fase = JSON.parse(JSON.stringify(
        this.responseText));
        console.log('Dados do Json: ', fase);
        };
    };

    xmlhttp.open("GET", "jsonDemo.txt", true);
xmlhttp.send();
};

function geraJson(objeto) {
//converte o objeto JavaScript em uma String Json
let faseJson = JSON.stringify(objeto);
console.log(faseJson);
};
obtemJson(faseJogo);
geraJson(faseJogo);
function desenhaJogo() {
    window.requestAnimationFrame(desenhaJogo);
    for(let x = 0; x < faseJogo.colunas; x++) {
    for(let y = 0; y < faseJogo.linhas; y++) {
    let fase = faseJogo.mapaFase[y *
    faseJogo.colunas + x];
    let spriteX = x * faseJogo.tamanhoSprite;
    let spriteY = y * faseJogo.tamanhoSprite;
    contexto.drawImage(imagem, fase *
        faseJogo.tamanhoSprite, 0,
        faseJogo.tamanhoSprite,
        faseJogo.tamanhoSprite, spriteX, spriteY,
        faseJogo.tamanhoSprite,
        faseJogo.tamanhoSprite);
        }
        }
        };
        
        desenhaJogo();
        
    
