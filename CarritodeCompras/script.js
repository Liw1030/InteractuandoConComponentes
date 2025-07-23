let contador1 = 0;
let contador2 = 0;
let contador3 = 0;

function actualizarPantalla() {
    document.getElementById('jeanItems').textContent = contador1;
    document.getElementById('chaquetaItems').textContent = contador2;
    document.getElementById('tennisItems').textContent = contador3;
}

document.getElementById('agregarJean').addEventListener('click', function() {
    contador1++;
    actualizarPantalla();
    alertaCompraYResumen();
});

document.getElementById('agregarChaqueta').addEventListener('click', function() {
    contador2++;
    actualizarPantalla();
    alertaCompraYResumen();
});

document.getElementById('agregarTennis').addEventListener('click', function() {
    contador3++;
    actualizarPantalla();
    alertaCompraYResumen();
});

function alertaCompraYResumen(){
    alert('¡Envío gratis aplicado!');
}

//* Creación de la alerta | Mostrar console log 

let precioUnidadJean = 30
let precioUnidadChaqueta = 45
let precioUnidadTennis = 48

function alertaCompraYResumen(){
    let total = (contador1 * precioUnidadJean) + (contador2 * precioUnidadChaqueta) + (contador3 * precioUnidadTennis);
    console.log(
        "Productos en el carrito:",
        `Jean: ${contador1}`,
        `Chaqueta: ${contador2}`,
        `Tennis: ${contador3}`
    );
    if (total > 50) {
        alert('¡Envío gratis aplicado!');
    }
    document.getElementById('resumenCarrito').textContent = `Total: $${total}`;
}


//* limpiar la pantalla | vaciar el carrito 

document.getElementById('vaciarCarrito').addEventListener('click', function() {
    contador1 = 0;
    contador2 = 0;
    contador3 = 0;
    actualizarPantalla();
    alertaVaciar();
});

function alertaVaciar(){
    console.log('Carrito vaciado');
}

