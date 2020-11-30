//criar um array com valores que o usario digite e mostrar somente os numeros

    //falta mostrar apenas numeros
    var q=+prompt("Quantos dados quer?")
           //digitar varios valores

    for(var i=0; i<q; i++){
        let dados=prompt("Digite vários dados?")
        array=[dados]
    //   let total=array
    //    console.log(array)
    }

    document.write(array)
    if(array==Number){
        document.write("somente number")
    }else{
        document.write("somente letras")
 
    }