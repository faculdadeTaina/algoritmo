//Calculo de notas por alunos, e mensagem 
let quatidade, nome, media, nota1, nota2;
quatidade=+prompt("Quatidade de alunos?")

for (let i=0; i<quatidade; i++ ){
nome= prompt("Qual seu nome?")
nota1 =  +prompt("Digite uma nota?");
nota2 =  +prompt("Digite uma nota?");
media = (nota1 + nota2) /2;
if(media == 10){
   // console.log("Aluno aprovado com distinção: "+media);
   document.write("Aluno aprovado com distinção: "+media+ "Aluno:" +nome)
}else if(media >= 7 && media < 10){
   // console.log("Aluno aprovado: "+media);
    document.write("Aluno aprovado: " +media+ "Aluno:" +nome)
}else if(media <= 7 && media >= 0){
    //console.log("Aluno reprovado: "+media);
    document.write("Aluno reprovado: "+media+ "Aluno:" +nome)
}else{
    //console.log("Algo deu errado");
    document.write("Algo deu errado")
}
}