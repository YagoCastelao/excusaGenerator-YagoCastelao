const dice = document.getElementsByClassName('dice')

window.onload = function() {

    let comenzo = "Un ";
    let adj = ["dos cabezas ", "nuclear ", "enfadado ", "solo ", "loco ", "encendido ", "hediondo"];
    let sus = ["corredor ", "mapache ", "perro ", "vendedor ", "motorista ", "comediante "];
    let accion = ["tomó mi ", "me tiró ", "me gritó ", "me pateó ", "me robó ", "me quemó ", "me mordió "];
    let pose = ["dedo del pie ", "coche ", "relogio ", "zapato ", "cartera ", "camisa ", "llaves ", "computadora ", "móvil ", "sanduiche "];
    let donde = ["en la calle", "en mi casa", "en mi camino de entrada", "en frente de la oficina", "cerca del centro comercial", "cerca del baño", "en la estación de autobuses"];
  
    let rdm1 = Math.floor(Math.random() * adj.length);
    let rdm2 = Math.floor(Math.random() * sus.length);
    let rdm3 = Math.floor(Math.random() * accion.length);
    let rdm4 = Math.floor(Math.random() * pose.length);
    let rdm5 = Math.floor(Math.random() * donde.length);
  
    document.querySelector("#excuse").innerHTML = comenzo +  sus[rdm1] + adj[rdm2] + accion[rdm3] + pose[rdm4] + donde[rdm5];
    
  }
  
