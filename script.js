const mensaje = document.getElementById("mensaje");
const entradaMensaje = document.getElementById("entradaMensaje");

const botonMostrar = document.getElementById("mostrarMensaje");
const botonLimpiar = document.getElementById("limpiarMensaje");


/* Cargar último mensaje */

const mensajeGuardado = localStorage.getItem("mensajePareja");

if (mensajeGuardado) {
    mensaje.textContent = mensajeGuardado;
}


/* Mostrar mensaje */

botonMostrar.addEventListener("click", () => {

    const nuevoMensaje = entradaMensaje.value.trim();

    if (nuevoMensaje === "") {
        return;
    }

    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(15px)";

    setTimeout(() => {

        mensaje.textContent = nuevoMensaje;

        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";

    }, 250);

    localStorage.setItem(
        "mensajePareja",
        nuevoMensaje
    );

    entradaMensaje.value = "";

});


/* ENTER PARA ENVIAR */

entradaMensaje.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            botonMostrar.click();

        }

    }
);


/* Limpiar */

botonLimpiar.addEventListener(
    "click",
    () => {

        mensaje.textContent = "❤️";

        localStorage.removeItem(
            "mensajePareja"
        );

        entradaMensaje.value = "";

    }
);
