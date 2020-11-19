let litros, tipo, valor, ValorF;
var precoG = 2.50;
var precoA=1.90;
litros=+prompt("Qual a quantidade de litros?");
tipo=prompt("Qual o tipo de gazolina \n Digite A-álcool ou G-gasolina");

switch(tipo)    {
case "Alcool":
    if(litros <= 20){
   valor= precoA * litros;
    ValorF= valor -(valor * (3/100)) ;
    document.write(" O valor total a pagar sem desconto=" +valor.toFixed(2));
    document.write(" O valor total a pagar é=" +ValorF.toFixed(2)); 

    }else if (litros >= 20){

        valor= precoA * litros;
        ValorF=valor - (valor * (5/100));
        document.write(" O valor total a pagar sem desconto=" +valor.toFixed(2));
        document.write(" O valor total a pagar é=" +ValorF.toFixed(2)); 
    }else{
        document.write("Error")
    }
    break;

case "Gasolina":
    if(litros <= 20){
        valor= precoA * litros;
         ValorF=valor - (valor * (4/100));
         document.write(" O valor total a pagar sem desconto=" +valor.toFixed(2));
         document.write(" O valor total a pagar é=" +ValorF.toFixed(2)); 
        }else if (litros >= 20){

            valor= precoA * litros;
            ValorF=valor - (valor * (6/100));
            document.write(" O valor total a pagar sem desconto=" +valor.toFixed(2));
            document.write(" O valor total a pagar é=" +ValorF.toFixed(2)); 
       
        }else{
            document.write("Error")
        }
    break;

    default:
}