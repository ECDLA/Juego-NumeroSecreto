let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio.';

function botonConsola() {
    console.log('El botón fue clicado.');
}

function botonSolicitud() {
    let ciudad = prompt('Escibre una ciudad en México.');
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}

function botonAlerta() {
    alert('Yo amo JS.');
}

function botonSuma() {
    let numeroUno = parseInt(prompt('Inserta un número.')),
        numeroDos = parseInt(prompt('Inserta otro número.'));

    alert(`El resultado de la suma es: ${resultadoSuma = numeroUno + numeroDos}`);
}