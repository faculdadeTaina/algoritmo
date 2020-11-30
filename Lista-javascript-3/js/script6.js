//mostrar lado dos polionos
//let q=+prompt("Quantos poligonos de 3 a 7 lados?")
var nome = prompt("Qual o nome do poligonos?");
//dependo do nome ele parar em um caso
//para realizar o calculo dos lados é preciso no minninp de 3 numeros
switch (nome) {
        case "retangulo":
          var num1, num2, num3, cal;
          num1 = +prompt("Digite um número");
          num2 = +prompt("Digite um número");
          num3 = +prompt("Digite um número");
          cal=num1+num2+num3;
          document.write("Ok, o seu poligono tem" +cal);
        
      break;

        case "circulo":
       var comprimento, raio;
       raio=+prompt("Qual o valor do raio?")
        comprimento=2*raio*3.14;
        document.write("O circulo é: "+comprimento)
          break;;

        case "regular":
          var numeroLado, comprimento, cal;
          numeroLado = +prompt("Digite um número");
          comprimento = +prompt("Digite um número de comprimento?");
          cal=comprimento*numeroLado;
            document.write("Ok baby");

        break;
        default:

}
