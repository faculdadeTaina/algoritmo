//fatorial de número
    var fatorial=1;
    var num=parseInt(prompt("Digite um número inteiro"));
    
    for(var x=1; x<=num; x++)
    {
      fatorial=fatorial*x;
      
    }
    
    document.write(num+"! = "+num+"x"+(num--)+"="+fatorial);