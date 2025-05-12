// Primero seleccionar el elemento
const saludo = document.getElementById('unSaludo');

// Agregar evento
saludo.addEventListener('click', function(){
    alert('Tocaste el título de la página!! :p')
});


//seleccionamos elementos
const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");

//agregamos un listener
formulario.addEventListener("submit", function(evento){
    //Prevenir que se envie por default
    evento.preventDefault();

    //primero validará
    if (nombreInput.value === ""){
        alert("Por favor, ingresa tu nombre");
        return;
    }
    else if (emailInput.value === ""){
        alert("Por favor, ingresa tu email");
        return;
    }

    // Luego podrá enviar
    console.log("Formulario enviado:", {
        nombre: nombreInput.value,
        email: emailInput.value
    });
    confirm("Se enviarán los datos")
    alert("Tus datos se enviaron con éxito ;)")
});

//Agregamos mas elementos: clases and ids
const classSubtitulos = document.querySelectorAll(".subtitulo");
const classParrafos = document.querySelectorAll(".parrafo");
const cambiarColor = document.querySelector("#cambiarColor");
const primerSub = document.getElementById("primerSubtitulo");
const segundoSub = document.getElementById("segundoSubtitulo");
const tercerSub = document.getElementById("tercerSubtitulo");
const cuartoSub = document.getElementById("cuartoSubtitulo");
const botonRojo = document.getElementById("botonRojo");
const botonSimple = document.querySelector(".boton");

//Agregamos eventos:
classSubtitulos.forEach(function(subtitulo){        // Para recorrer cada elemento dentro de la clase
    subtitulo.addEventListener("click", function(){
        alert("Tocaste un subtítulo!");
    });
});

classParrafos.forEach(function(parrafo){
    parrafo.addEventListener("click", function(){
        const colorActual = parrafo.style.color;

        if (colorActual === "" || colorActual === "black") {
            parrafo.style.color = "blue";
        } else if (colorActual === "blue"){
            parrafo.style.color = "black";
        }
    })
})
