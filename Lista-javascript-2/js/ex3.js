//Ver o maior entre tres
let n1, n2, n3;

n1=+prompt("Digite um número?");
n2=+prompt("Digite um número?");
n3=+prompt("Digite um número?");

if(n1 > n2  && n1 > n3){
    document.write("O número é o maior:" +n1);
}else if(n2 > n1  && n2 > n3){
    document.write("O número é o maior:" +n2);
}else if (n3 > n1  && n3 > n2){
    document.write("O número é o maior:" +n3);
}else{
    document.write("Algo deu errado");  
}