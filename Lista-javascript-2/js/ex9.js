//Verificar a quatidade de votos
let  canditato1=0, canditato2=0, canditato3=0, votosEl=0;
votosEl=prompt("Qauntos eleleitores?");
for(let i=0; i<votosEl; i++){
   
    var voto=prompt("voto \n 1 \n 2 \n 3");

    if(voto==1){
    canditato1= canditato1 +1;

    }else if(voto==2){
    canditato2= canditato2 +1;

    }else{
    canditato3= canditato3 +1;
    
    }
}

document.write("Candidato 1:"  +canditato1+ +"<br/>");

document.write("candidato 2:" +canditato2+ +"<br/>");
document.write("candidato 3:" +canditato3+  +"<br/>");