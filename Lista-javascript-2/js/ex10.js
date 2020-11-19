//Verifiacar media e valor total
let cd, valor, media;
cd=+prompt("Qual a quantidade de cada cd?");

for(let i=0; i<cd; i++ ){

valor=+prompt("Qual o valor de cada cd?");
media=cd+valor;

}
document.write("Valor total gasto. "+media);