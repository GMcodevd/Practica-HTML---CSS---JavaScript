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
//tocar un subtitulo
classSubtitulos.forEach(function(subtitulo){        // Para recorrer cada elemento dentro de la clase
    subtitulo.addEventListener("click", function(){
        alert("Tocaste un subtítulo!");
    });

classSubtitulos.forEach(function(subtitulo) {
    // Transición suave para que el cambio se vea mejor
    subtitulo.style.transition = "all 0.5s ease";   //Esto está buenísimo
})
});


//tocar un párrafo
classParrafos.forEach(function(parrafo){
    parrafo.addEventListener("click", function(){
        const colorActual = parrafo.style.color;

        if (colorActual === "" || colorActual === "black") {
            parrafo.style.color = "blue";
        } else if (colorActual === "blue"){
            parrafo.style.color = "black";
        }
    });
});

//boton cambiar fondo
let coloresFondo = ["red", "blue", "green", "orange", "purple", "brown", "yellow", "gray", "pink", "white"];
let indiceColores = 0;
cambiarColor.addEventListener("click", function(){
    let colorActual = coloresFondo[indiceColores]
    document.body.style.backgroundColor = colorActual;
    indiceColores++
    if (indiceColores >= coloresFondo.length){
        indiceColores = 0;
    }
});


//Probando distintos eventos y animaciones
//Primer subtítulo
primerSub.addEventListener("mouseover", function(){
    primerSub.style.fontSize = "2em"; //aumenta su tamaño
    
primerSub.addEventListener("mouseleave", function(){
    primerSub.style.fontSize = "1em"; // vuelve al tamaño original
});
});

//Segundo subtitulo
segundoSub.addEventListener("mouseover", function(){
    segundoSub.style.transform = "translateX(50px)"; // mover a la derecha

segundoSub.addEventListener("mouseleave", function(){
    segundoSub.style.transform = "translateX(0)"; // vuelve al lugar
}) ;
});

//Tercer subtítulo
tercerSub.addEventListener("mouseover", function(){
    tercerSub.style.transform = "translateY(-25px)" //sube sobre el renglón

tercerSub.addEventListener("mouseleave", function(){
    tercerSub.style.transform = "translateY(0)" //vuelve al lugar
});
});

cuartoSub.addEventListener("mouseover", function(){
    cuartoSub.style.textShadow = "10px 10px 10px red"
});

cuartoSub.addEventListener("mouseleave", function(){
    cuartoSub.style.textShadow = "none"
});

botonRojo.addEventListener("click", function(){
    const confirma = confirm("¿Estás seguro que deseas continuar?")
    if (confirma){
        document.body.style.display = "none"

    setTimeout(function(){
        document.body.style.display = "block";
        alert("Bienvnido otra vez!! Casi destruíste la página");
    }, 4000);
    };
    
    
});

botonRojo.addEventListener("mouseover", function(){
    botonRojo.style.cursor = "pointer";
    botonRojo.style.filter = "brightness(1.5)";

botonRojo.addEventListener("mouseleave", function(){
    botonRojo.style.filter = "brightness(1)";
});

});

botonSimple.addEventListener("click", function(){
    alert("Este botón no funciona :P")
})






