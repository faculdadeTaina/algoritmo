        function sorte() {
    var sortear= Math.floor(Math.random()* 6 +1)


    switch (sortear){
    case 1:
     document.getElementById('dado1').src="/img/img1.png";
    
    break;
    case 2:
        document.getElementById('dado1').src="/img/img2.png";
        break;   

       case 3:
        document.getElementById('dado1').src="/img/img3.png";
        break; 

       case 4:
        document.getElementById('dado1').src="/img/img4.png";
        break;  

       case 5:
        document.getElementById('dado1').src="/img/img5.png";
        break;

       case 6:
        document.getElementById('dado1').src="/img/img6.png";
       break;

       default:
    }           
}