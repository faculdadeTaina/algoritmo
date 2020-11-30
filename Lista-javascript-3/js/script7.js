//receber da previdencia
//falta terminar
function previdencia() {
var valor= document.getElementById('valor').value;
var idade= document.getElementById('idade').value;
var tempo= document.getElementById('tempo').value;
//variaveis para ver o valor na tela
var receber=document.getElementById('receber')
var saber=document.getElementById('saber');
var previdencia= '';
aposentadoria='';

      previdencia = (valor * (1+0.0375) **tempo);
      //calculo total
      receber.innerHTML=previdencia.toFixed((2));
      //valor por mes
      var aposentadoria = previdencia/(tempo/12);
      saber.innerHTML=aposentadoria.toFixed((2));

}
