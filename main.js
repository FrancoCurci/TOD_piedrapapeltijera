var puntuacion_jugador = 0;
var puntuacion_computadora = 0;
var seleccion_jugador = '';
var seleccion_maquina = '';
var container_imagen_jugador = document.getElementById('imagen-usuario-seleccionada');
var container_imagen_maquina = document.getElementById('imagen-computadora-seleccionada');
var container_resultados = document.getElementById('texto-partida');
var container_puntuacion_jugador = document.getElementById('puntuacion-del-jugador');
var container_puntuacion_maquina = document.getElementById('puntuacion-del-computador');
var container_button = document.getElementById('buttonPlay');

container_puntuacion_jugador.innerHTML = puntuacion_jugador
container_puntuacion_maquina.innerHTML = puntuacion_computadora

function llamarAfuncion(elemento) {

    switch (elemento) {
        case 'piedra': container_imagen_jugador.innerHTML = '<img src="img/piedra.png">';
            seleccion_jugador = 'piedra'
            container_button.classList.remove('disable-button')

            break;
        case 'papel': container_imagen_jugador.innerHTML = '<img src="img/papel.png">';
            seleccion_jugador = 'papel'
            container_button.classList.remove('disable-button')

            break;
        case 'tijera': container_imagen_jugador.innerHTML = '<img src="img/tijera.png">';
            seleccion_jugador = 'papel'
            container_button.classList.remove('disable-button')

            break;
    }


}

function jugar() {


    if (seleccion_jugador == '') {
        alert('debes seleccionar primero')
        return
    }
    container_button.classList.add('disable-button')
    debugger
    seleccion_de_maquina();

    let resultado = verificar_partida(seleccion_jugador, seleccion_maquina)
    //container_resultados.innerHTML = `<p> ${resultado} </p> `
    container_puntuacion_jugador.innerHTML = puntuacion_jugador
    container_puntuacion_maquina.innerHTML = puntuacion_computadora
    setTimeout(limpiar, 3000)


}


function seleccion_de_maquina() {
    let seleccion_numero = Math.floor(Math.random() * 3);
    switch (seleccion_numero) {
        case 0: container_imagen_maquina.innerHTML = '<img src="img/piedra.png">';
            seleccion_maquina = 'piedra'

            break;
        case 1: container_imagen_maquina.innerHTML = '<img src="img/papel.png">';
            seleccion_maquina = 'papel'
            break;
        case 2: container_imagen_maquina.innerHTML = '<img src="img/tijera.png">';
            seleccion_maquina = 'tijera'
            break;
    }
}

function verificar_partida(selecc_jugador, selecc_maquina) {

    if (selecc_jugador == 'piedra' && selecc_maquina == 'tijera') {
        puntuacion_jugador += 1
        return 'jugador'
    }
    else if (selecc_jugador == 'tijera' && selecc_maquina == 'piedra') {
        puntuacion_computadora += 1;
        return 'maquina'
    }
    else if (selecc_jugador == 'piedra' && selecc_maquina == 'piedra') {
        return 'empate'
    }
    else if (selecc_jugador == 'tijera' && selecc_maquina == 'tijera') {
        return 'empate'
    }
    else if (selecc_jugador == 'papel' && selecc_maquina == 'tijera') {
        puntuacion_computadora += 1;
        return 'maquina'
    }
    else if (selecc_jugador == 'papel' && selecc_maquina == 'papel') {
        return 'empate'
    }
    else if (selecc_jugador == 'tijera' && selecc_maquina == 'papel') {
        puntuacion_jugador += 1

        return 'jugador'
    }

    else if (selecc_jugador == 'piedra' && selecc_maquina == 'papel') {
        puntuacion_computadora += 1;
        return 'maquina'
    }
    else if (selecc_jugador == 'papel' && selecc_maquina == 'piedra') {
        puntuacion_jugador += 1
        return 'jugador'
    }

}

function limpiar() {
    container_imagen_jugador.innerHTML = ''
    container_imagen_maquina.innerHTML = ''

}

