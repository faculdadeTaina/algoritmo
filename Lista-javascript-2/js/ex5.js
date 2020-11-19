
let salario, novoSalario, percentual;

salario=+prompt("Qual o valor do seu salário?");

if(salario <= 280 ){
    percentual=salario*0.20;
    novoSalario = salario+percentual;

    document.write("Salario antigo=" +salario);
    
    document.write("Percentual aplicado" +"<br>"+  +percentual);

    document.write("novo salario=" +"<br>"+ +novoSalario);

}else if(salario >= 280  || salario <= 700 ){
    percentual=salario*0.15;
    novoSalario = salario+percentual;

    document.write("Salario antigo=" +"<br>"+ +salario);
    
    document.write("Percentual aplicado" +"<br>"+ +percentual);

    document.write("novo salario=" +"<br>"+ +novoSalario);

}else if(salario >= 701 || salario <= 1500){

  percentual=salario*0.10;
    novoSalario = salario+percentual;

    document.write("Salario antigo=" +"<br>"+ +salario);
    
    document.write("Percentual aplicado" +"<br>"+ +percentual);

    document.write("novo salario=" +"<br>"+ +novoSalario);

}else if(salario > 1500){
  percentual=salario*0.05;
    novoSalario = salario+percentual;

    document.write("Salario antigo=" +"<br>"+ +salario);
    
    document.write("Percentual aplicado"  +"<br>"+ +percentual);

    document.write("novo salario=" +"<br>"+ +novoSalario);

}else{
  document.write("Erro")
}