//A media das temperaturas
function temperatura( ){

let ValorT, quantidadeT=0; MediaT=0, total=0, maior=0, menor=0;

quantidadeT=+prompt("Quantas temperaturas avaliadas?");

for(let i=0; i<quantidadeT; i++){
    ValorT=+prompt("Valor da temperatura?");
    maior=Math.max(maior, ValorT);
    menor=Math.min(menor, ValorT)
    total+=ValorT;
    
}
  MediaT=total/quantidadeT;
  document.write("A maior temperatura é=" +maior+ "<br/>");
  document.write("A menor temperatura é=" +menor+ "<br/>");
  document.write("A média=" +MediaT.toFixed(2));
}
//chamando a funçaõ
temperatura();


