//calcular numero n de pessoas, fazer a média e dizer se é  uma turma jovem, idosa e ou adulta.
let quatidadeP=0, total=0, idade=0;
quatidadeP=+prompt("digite a quantidade de pessoas");
for(let i=0;  i<quatidadeP; i++){
    idade=+prompt("Qual sua idade");
      total+=idade;
  
}
document.write("O total de pessoas=" +quatidadeP+ "<br/>")

if(total >= 60){
    document.write("Idoso")
}else if(total >= 25.26 && total < 60){
    document.write("Adulto")
}else{
    document.write("jovem")
}

