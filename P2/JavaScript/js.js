function iniciar(){

    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    var imagen = new Image();
    imagen.src = "../P1/Recursos/img1.png";
    imagen.addEventListener("load", modificarimagen, false);
    
   } 