//falta terminar
//melhor taxa de juros
var melhorT, taxaI, taxaII, taxaIII, taxaIV;
//quantas taxas serão verificadas
//var quantidade= +prompt("Quantas empresas para testar a melhor taxa?");
var valorInvestido=+prompt("Qual o valor a investir?")
   // for (i=0; i<quantidade; i++){
       //somente 4 taxas para comparação
       taxaI=+prompt("Qual o valor do juros?");

      taxaI=+prompt("Qual o valor do juros?");

      taxaIII=+prompt("Qual o valor do juros?");

      taxaIV=+prompt("Qual o valor do juros?");

     //testando a melhor taxa
if(valorInvestido < taxaI){
    document.write("A melhor taxa é= "+taxaI+ "O seu valor investido foi"+valorInvestido);
}else if(valorInvestido >= taxaI && valorInvestido <= taxaII){
    document.write("A melhor taxa é ="+taxaII+ "O seu valor investido foi"+valorInvestido);
}else if(valorInvestido >= taxaII && valorInvestido <= taxaIII){
    document.write("A melhor taxa é ="+taxaIII+ "O seu valor investido foi"+valorInvestido);
}else{
   document.write("A melhor taxa é ="+taxaIV+ "O seu valor investido foi"+valorInvestido);
}


/*document.write("O valor da taxa 1 é:" +taxaI)
document.write("O valor da taxa 1 é:" +taxaII)
document.write("O valor da taxa 1 é:" +taxaIII)
document.write("O valor da taxa 1 é:" +taxaIV)*/
