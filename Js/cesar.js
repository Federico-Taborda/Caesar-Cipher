// Algoritmo de encriptado tipo simetrico donde cada letra del texto a cifrar se mueve un numero de posiciones a la derecha en el abecedario.
// Para el descifrado solo se mueven la misma cantidad de posiciones pero hacia la izquierda del abecedario.

const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let posiciones = 13;
let cadena = document.getElementById("campo-cifrado-decifrado");
let resultado = document.getElementById("campo-resultado");
let cifrar = document.getElementById("btn-cifrar");
let decifrar = document.getElementById("btn-decifrar");

cifrar.addEventListener("click", cifrarTexto);
decifrar.addEventListener("click", decifrarTexto);

function cifrarTexto() {
    const cifrado = [];
    let texto = cadena.value;

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == " ") {
            cifrado.push(" ");
        }else if(texto[i] == ",") {
            cifrado.push(",");
        }else if(texto[i] == ".") {
            cifrado.push(".");
        }else if(!isNaN(texto[i])) {
            cifrado.push(buscarIndiceNumero("sumar", texto[i]))
        }else if(isNaN(texto[i])) {
            cifrado.push(buscarIndiceLetra("sumar", texto[i]));
        };
    };

    return resultado.innerHTML = cifrado.join("");
};

function decifrarTexto() {
    const descifrado = [];
    let texto = cadena.value;

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == " ") {
            descifrado.push(" ");
        }else if(texto[i] == ",") {
            descifrado.push(",");
        }else if(texto[i] == ".") {
            descifrado.push(".");
        }else if(!isNaN(texto[i])) {
            descifrado.push(buscarIndiceNumero("restar", texto[i]));
        }else if(isNaN(texto[i])) {
            descifrado.push(buscarIndiceLetra("restar", texto[i]));
        };
    };

    descifrado[0] = descifrado[0].toUpperCase();
    return resultado.innerHTML = descifrado.join("");
};

// Busca el indice de la letra en el abecedario y le suma un numero de posiciones. (Esta funcion se usa tambien para descifrar).
function buscarIndiceLetra(op, letra) {
    let i;
    
    abc.map((letraArr, indice) => {
        if(op == "sumar") {
            if(letra.toLowerCase() == letraArr) {
                i = indice + posiciones;
            };
        }else if(op == "restar") {
            if(letra.toLowerCase() == letraArr) {
                i = indice - posiciones;
            };
        }
    });
    
    // Si i es mas grande que el numero de letras en el abecedario empezara desde el comienzo.
    // Si i es mas bajo que el numero de letras en el abecedario empezara desde el final.
    if(i > abc.length - 1) {
        i = i - abc.length
    }else if(i < 0) {
        i = abc.length - Math.abs(i);
    };
    
    return abc[i];
};

// Busca el indice del numero en el arr de numeros y le suma un numero de posiciones. (Esta funcion se usa tambien para descifrar).
function buscarIndiceNumero(op, numero) {
    let i;
    
    nums.map((numeroaArr, indice) => {
        if(op == "sumar") {
            if(numero == numeroaArr) {
                i = indice + posiciones;
            };
        }else if(op == "restar") {
            if(numero == numeroaArr) {
                i = indice - posiciones;
            };
        }
    });

    if(i > nums.length - 1) {
        i = i - nums.length
    }else if(i < 0) {
        i = nums.length - Math.abs(i);
    };
    
    return nums[i];
};