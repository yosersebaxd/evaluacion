let fotos = [
"assets/img/Fennec.jpg",
"assets/img/octane.webp",
"assets/img/zion.webp",
"assets/img/lenox.webp"
];
let nombres = [
"Fennec",
"octane",
"zion",
"lenox"
];

let posicion = 0;

function retroceder(){

    posicion--;

    if (posicion < 0){
    posicion = fotos.length - 1;
    }
    document.getElementById("carro").src = fotos[posicion];
    
}
function siguiente() {

    posicion++;

    if (posicion >= fotos.length) {
        posicion = 0;
    }

    document.getElementById("carro").src = fotos[posicion];
    } 
  
