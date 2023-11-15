let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0
const txtempate = document.getElementById('txtempates');
const txtvictoria = document.getElementById('txtvictorias');
const txtderrotas = document.getElementById('txtderrotas');

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//1 es piedra, 2 es papel, 3 es tijera
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "piedra ✊"
    } else if (jugada == 2) {
        resultado = "papel ✋"
    } else if (jugada == 3) {
        resultado = "tijera ✌"
    } else {
        resultado = "Ingrese un valor válido"
    }
    return resultado
}

function restart() {
    triunfos = 0;
    perdidas = 0;
    empates = 0;

    txtempate.textContent = 'Empates: ' + empates + '';
    txtvictoria.textContent = 'Victorias: ' + empates + '';
    txtderrotas.textContent = 'Derrotas: ' + empates + '';
}

function piedra() {
    pc = aleatorio(1, 3)
    jugador = parseInt(document.getElementById('piedra').value);

    if (pc == jugador) {
        Swal.fire({
            title: 'Empate!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'warning',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        empates = empates + 1;
        txtempate.textContent = 'Empates: ' + empates + '';
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        Swal.fire({
            title: 'Ganaste!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'success',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok',
        })
        triunfos = triunfos + 1;
        txtvictoria.textContent = 'Victorias: ' + triunfos + '';

    } else {
        Swal.fire({
            title: 'Perdiste!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'error',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok',
        })
        perdidas = perdidas + 1;
        txtderrotas.textContent = 'Derrotas: ' + perdidas + '';
    }
}

function papel() {
    pc = aleatorio(1, 3)
    jugador = parseInt(document.getElementById('papel').value);

    if (pc == jugador) {
        Swal.fire({
            title: 'Empate!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'warning',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        empates = empates + 1;
        txtempate.textContent = 'Empates: ' + empates + '';
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        Swal.fire({
            title: 'Ganaste!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'success',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        triunfos = triunfos + 1;
        txtvictoria.textContent = 'Victorias: ' + triunfos + '';
    } else {
        Swal.fire({
            title: 'Perdiste!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'error',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        perdidas = perdidas + 1,
            txtderrotas.textContent = 'Derrotas: ' + perdidas + '';
    }
}

function tijera() {
    pc = aleatorio(1, 3)
    jugador = parseInt(document.getElementById('tijera').value);

    if (pc == jugador) {
        Swal.fire({
            title: 'Empate!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'warning',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        empates = empates + 1;
        txtempate.textContent = 'Empates: ' + empates + '';
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        Swal.fire({
            title: 'Ganaste!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'success',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        triunfos = triunfos + 1;
        txtvictoria.textContent = 'Victorias: ' + triunfos + '';
    } else {
        Swal.fire({
            title: 'Perdiste!',
            html: '<p>Elegiste ' + eleccion(jugador) + '</p> <p>Pc eligió ' + eleccion(pc) + '</p>',
            icon: 'error',
            position: 'center',
            allowOutsideClick: false,
            allowEnterKey: true,
            customClass: {
                popup: 'popup-class',
            },
            confirmButtonText: 'Ok'
        })
        perdidas = perdidas + 1;
        txtderrotas.textContent = 'Derrotas: ' + perdidas + '';
    }
}