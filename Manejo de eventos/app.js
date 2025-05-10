// Primero seleccionar el elemento
const saludo = document.getElementById('unSaludo');

// Agregar evento
saludo.addEventListener('click', function(){
    alert('Hola desde JavaScript!!')
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
});

