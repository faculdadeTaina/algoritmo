//tabuada do 1 a 10 

function tabuada() {
 var num  = document.getElementById("num").value;
var resultado =document.getElementById('resultado');
var tabuada='';
    for(var i=1; i<=10; i++)
  tabuada += num+ 'x' +i+ "=" +num*i +"<br/>";
    resultado.innerHTML = tabuada;
}