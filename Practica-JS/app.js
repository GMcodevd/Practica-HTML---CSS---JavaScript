//Primeros ejercicios:
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

//console.log(invertirCadena("probando si si"))


//      ***Tabla de multiplicar (del 1 al 10), concatenación y template literals***
function tablaMult(num){
    for (let i = 1; i <=10; i++){
        console.log(num + " * " + i + " = " + i*num)
    }
}
//tablaMult(9)

//Solucion con template literals:
function multiplicar(num){
    for (let i = 1; i <=10; i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
//multiplicar(8)


//          ***Escribí una función que reciba un array y devuelva la suma de todos los elementos numéricos***

function sumaArreglo(arreglo){
    let resultado = 0;
    for (let i = 0; i < arreglo.length; i++){
        let posicion = arreglo[i];

        if(typeof posicion === "number" && Number.isFinite(posicion)){
            resultado += posicion
        }
        else{
            console.warn(`Elemento no tenido en cuenta '${posicion}' porque es de tipo: ${typeof posicion}`)
        }
    }
    return `El resultado de la suma es ${resultado}`
}

/* pruebaSumaArreglo = sumaArreglo([1, 18, 22, "hola", true, 9 , "ocho", "dos", 5, "3"])
console.log(pruebaSumaArreglo)
 */

//          ***Buscar el mayor de un array***

function findMax(arreglo){
    let maximo = 0

    for (let i = 0; i < arreglo.length; i++){
        let comparar = arreglo[i]

        if (typeof comparar === "number"){
            if (comparar > maximo){
                maximo = comparar
            }
        }
        else{
            console.warn(`Este elemento: '${comparar}', se ignoró porque es de tipo ${typeof comparar}`)
        }
    }
    return `El numero mayor en el arreglo es el ${maximo}`
}
arregloPrueba = [1, 18, 22, "hola", true, 9 , "ocho", "dos", 5, "3"]
console.log(findMax(arregloPrueba))
