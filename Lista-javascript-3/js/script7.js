//receber da previdencia

function previdencia() {
var valor= document.getElementById('valor').value;
var idade= document.getElementById('idade').value;
var tempo= document.getElementById('tempo').value;
var receber=document.getElementById('receber')
var previdencia= '';

      var cal=valor - (100/3.75)
      previdencia =( valor * tempo ) - cal;
     receber.innerHTML=previdencia.toFixed((2));
    
}
