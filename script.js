const mensaje = document.getElementById("mensaje");
const entradaMensaje = document.getElementById("entradaMensaje");

const botonMostrar = document.getElementById("mostrarMensaje");
const botonLimpiar = document.getElementById("limpiarMensaje");

const botonEmoji =
    document.getElementById("botonEmoji");

const selectorEmojis =
    document.getElementById("selectorEmojis");
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
/* =========================
   SELECTOR DE EMOJIS
========================= */

botonEmoji.addEventListener("click", () => {

    selectorEmojis.classList.toggle("activo");

});


const emojis =
    selectorEmojis.querySelectorAll("button");


emojis.forEach((emoji) => {

    emoji.addEventListener("click", () => {

        const emojiSeleccionado =
            emoji.textContent;

        const inicio =
            entradaMensaje.selectionStart;

        const fin =
            entradaMensaje.selectionEnd;

        const textoActual =
            entradaMensaje.value;


        entradaMensaje.value =
            textoActual.substring(0, inicio) +
            emojiSeleccionado +
            textoActual.substring(fin);


        const nuevaPosicion =
            inicio +
            emojiSeleccionado.length;


        entradaMensaje.focus();

        entradaMensaje.setSelectionRange(
            nuevaPosicion,
            nuevaPosicion
        );

    });

});
