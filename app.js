let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromMaximo = 10;
let intentosMaximos = 3;
function verificarIntento(){  
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  
  
    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p', `Acertastes el número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');

    }

    else{
        if( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        if(intentos === intentosMaximos){
            asignarTextoElemento('p', 'Ya utilizaste todos tus intentos, el número secreto era ' + numeroSecreto);
            document.querySelector('#reiniciar').removeAttribute('disabled');
            document.querySelector('#valorUsuario').setAttribute('disabled', true);

        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('valorUsuario');
    valorCaja.value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeromMaximo) + 1;
    //Si el numero generado esta incluido en la lista 

    //console.log(listaNumerosSorteados);
    //console.log(numeroGenerado);

    if(listaNumerosSorteados.length == numeromMaximo){
        asignarTextoElemento('p', 'No hay más números disponibles');
    }

    else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeromMaximo}`);
    document.querySelector('#valorUsuario').removeAttribute('disabled');
    numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    //Indicar  mensaje de intervalo de numeros
    //Generar nuevo numero secreto
    //Desabilitar el boton nuevo juego
    //Inicializar el número de intentos
   limpiarCaja();
   condicionesIniciales();

   document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();


