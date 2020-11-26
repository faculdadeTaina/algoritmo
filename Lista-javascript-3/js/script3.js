//mcd de um número
function MDC(num1, num2) {
  var num1= document.getElementById("num1").value;
  var num2= document.getElementById("num2").value;
  var resposta=document.getElementById('resposta');
  var resto;

  while(num2 !==0){
      resto = num1 % num2;
      num1 =num2;
      num2=resto;
{
  resposta.innerHTML= num1;
}

  }
}