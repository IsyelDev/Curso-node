// Función para pedir un número válido mayor que 1
function pedirNumeroMayorQueUno() {
    let numero;
    do {
        numero = +(prompt("Me indicas un número mayor que 1 para determinar el rango del número secreto:"));
        if (isNaN(numero) || numero <= 1) {
            alert("Por favor, ingresa un número válido mayor que 1.");
        }
    } while (isNaN(numero) || numero <= 1);
    return numero;
}

// Función para pedir un número al usuario y validarlo
function pedirNumeroUsuario(rangoMaximo) {
    let numeroUsuario;
    do {
        numeroUsuario = +(prompt(`Intenta adivinar el número secreto entre 1 y ${rangoMaximo}:`));
        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > rangoMaximo) {
            alert(`Por favor, ingresa un número válido entre 1 y ${rangoMaximo}.`);
        }
    } while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > rangoMaximo);
    return numeroUsuario;
}

// Función principal del juego
function jugar() {
    const numeroEscogido = pedirNumeroMayorQueUno();  // Obtener el rango del número secreto
    const numeroSecreto = Math.floor(Math.random() * numeroEscogido) + 1;
    const maximoIntentos = 3;

    let contador = 1;

    while (contador <= maximoIntentos) {
        const numeroUsuario = pedirNumeroUsuario(numeroEscogido);  // Obtener el número del usuario

        if (numeroUsuario === numeroSecreto) {
            alert(`¡Acertaste el número ${numeroSecreto}! Lo lograste en ${contador} ${contador === 1 ? 'vez' : 'veces'}.`);
            return;  // Sale del juego si el usuario acierta
        } else {
            alert(numeroUsuario > numeroSecreto 
                ? 'El número es menor que el secreto.'
                : 'El número es mayor que el secreto.');
        }

        contador++;

        if (contador > maximoIntentos) {
            alert('Lo siento, has superado el número de intentos permitidos.');
            return;  // Sale del juego si se exceden los intentos
        }
    }
}

// Iniciar el juego
jugar();
