//Mostrar números impares de 1 a 50 
var cont =1 ;
while (cont<=50) {
    var resto = cont%2;
    if (resto ==0){
    document.write("Impar" + cont);
    }
    cont = cont - 1;
}
document.write("FIM");