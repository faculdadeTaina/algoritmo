//Indice de massa corporal
let peso, altura, imc;

peso=+prompt("Informe seu peso");
altura=+prompt("Informe sua altura?");
imc =  peso/(altura*2);
document.write("O imc é: "+imc.toFixed(2));
//console.log("O imc é: "+imc.toFixed(2))