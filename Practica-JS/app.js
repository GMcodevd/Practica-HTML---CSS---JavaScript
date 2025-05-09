//Primer ejercicio:
//      ***Crear una función que reciba dos números y devuelva su suma.***
function suma(a, b){
    return (a + b);
}
//Funcion flecha
let sumar = (a, b) => (a + b);

// console.log(sumar(5, 8))
// console.log(suma(9, 7))

//       ***Verificar si un número es par o impar***
function parImpar(num){
    if (num % 2 == 0){
        return "El numero " + num + " es par"
    }
    else
    return "El numero " + num + " es impar"
}
/* pruebaPar = parImpar(200)
console.log(pruebaPar) */


//      *** Contar letras de una cadena***
function contarLetras(frase){
    contador = 0
    cadena = frase.replace(/\s+/g,"");

    for (a in cadena){
        contador ++
    }
    return "La frase tiene "+ contador + " letras"
}
//console.log(contarLetras("Hola, hola, bueno chau"))


//          *** Invertir una cadena***
function invertirCadena(texto){
    return texto.split("").reverse().join("")
}

console.log(invertirCadena("probando si si"))