let listaNumerosSorteados = [];
let numeroMaximo = parseInt(prompt('Inserta el numero maximo a sortear'));
let intentos = 1; // Numero de intentos por el usuario.
//let numeroSecreto = generarNumeroSecreto(); // Variable que contendrá el numero secreto.

//console.log(numeroSecreto); // Muestra en numero secreto en la consola.

// Cambia el texto a un elemento de HTML.
function asignarTextoElemento(elemento, texto) {

    // Se selecciona el elemento desde el DOM.
    let titulo = document.querySelector(elemento); 

    // Se cambia el texto.
    titulo.innerHTML = texto; 
    return;
}

function verificarIntento() { // Evalua si el usuario acerto o no.
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // Se obtiene le numero que ingreso el usuario y lo convierte en entero.

    if (numeroUsuario === numeroSecreto) { // Comprueba si el numero del usuario es igual al numero secreto.
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`); // Muestra al usuario si acerto.
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita el boton nuevo juego.
    } else { // Si no acerto el usuario.
        if (numeroUsuario > numeroSecreto) { // Si el numero del usuario es mayor le da una pista.
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }

        intentos++; // Incrementa el numero de intentos.
        limpiarCaja();
    }

    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();

    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();

    // Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = ''; // Obtiene el valor de la caja y lo cambia.
    return;
}

function generarNumeroSecreto() {
    // Genera un numero aleatorio y le quita los decimales.
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    /* Muestra en consola el numero generado pseudo aleatoriamente
    al igual que la lista de numeros que ya se han generado anteriormente. */
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Verifica si la longitud de la lista es igual al numero maximo asignado.
    if (listaNumerosSorteados.length == numeroMaximo) {

        // Cambia el texto de la etiqueta 'p'.
        asignarTextoElemento('p', `Ya se sortearon todos los numeros posibles`);
        document.getElementById('intentar').setAttribute('disabled', 'true');

    } else {

        // Verifica si dentro de la lista esta el nuevo numero generado.
        if (listaNumerosSorteados.includes(numeroGenerado)){

            // Vuelve a generar el numero.
            return generarNumeroSecreto();
    
        } else {

            // Agrega el numero generado a la lista.
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    
        }
    }
}

condicionesIniciales();