let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

function actualizarPantalla() {
    document.getElementById('contadorVotos1').textContent = contador1;
    document.getElementById('contadorVotos2').textContent = contador2;
    document.getElementById('contadorVotos3').textContent = contador3;
}

document.getElementById('buttonVotar1').addEventListener('click', function() {
    contador1++;
    actualizarPantalla();
    alertaVoto();
});

document.getElementById('buttonVotar2').addEventListener('click', function() {
    contador2++;
    actualizarPantalla();
    alertaVoto();
});

document.getElementById('buttonVotar3').addEventListener('click', function() {
    contador3++;
    actualizarPantalla();
    alertaVoto();
});

function alertaVoto(){
    alert('Gracias por tu voto');
    let votosAcumulados = contador1 + contador2 + contador3
    if ( votosAcumulados % 5 == 0) {
        console.log('Total votos acumulados: ', votosAcumulados);
    }
}