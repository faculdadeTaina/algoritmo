//verificar se é vogal ou consoante
let letra;
letra=prompt("Digite uma letra");

if(letra == "a" || letra == "i"  || letra == "e" || letra == "o" || letra =="u"){
    document.write("Vogal");
}else if(letra == "A" || letra == "E"  || letra == "I" || letra == "O" || letra == "U"){
    document.write("Vogal")
}else{
    document.write("consoante")
}