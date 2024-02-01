const ingresoTexto = document.querySelector(".texto");
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const mensajeFinal = document.querySelector("#textoFinal");
const muneco = document.querySelector("#muneco");
const tituloMensaje = document.querySelector(".titulo-mensaje");
const encriptado = document.querySelector('.encriptado');
const mensajeAjustado = document.querySelector(".mensaje-encriptado");
const mensajeInicial = document.querySelector(".parrafo");
const botonCopiar = document.querySelector(".btn-copiar");

let reemplazo = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]

const resultadoFinal = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muneco.style.display = "none";
    tituloMensaje.style.display = "none";
    encriptado.classList.add("encriptado-ajustar");
    mensajeAjustado.classList.add("encriptado-ajustar");
    mensajeFinal.style.display = "block";
    mensajeInicial.style.display = "none";
    botonCopiar.style.display = "block";
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value;

    if (texto !== texto.toLowerCase()) {
        Swal.fire({
            icon: "warning",
            title: "¡Advertencia!",
            text: "Por favor, ingresa solo texto en minúsculas.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });

    } else if (texto.trim() === "") {
        Swal.fire({
            icon: "warning",
            title: "¡Advertencia!",
            text: "Por favor, ingresa un texto antes de encriptar.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });
    }

    else {

        const encriptar = (nuevoTexto) => {
            for (let i = 0; i < reemplazo.length; i++) {
                if (nuevoTexto.includes(reemplazo[i][0])) {
                    nuevoTexto = nuevoTexto.replaceAll(reemplazo[i][0], reemplazo[i][1])
                }
            }
            return nuevoTexto;

        }
        resultadoFinal(encriptar(texto));
    }



})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value;

    if (texto !== texto.toLowerCase()) {
        Swal.fire({
            icon: "warning",
            title: "¡Advertencia!",
            text: "Por favor, ingresa solo texto en minúsculas.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });

    }
    else if (texto.trim() === "") {

        Swal.fire({
            icon: "warning",
            title: "¡Advertencia!",
            text: "Por favor, ingresa un texto antes de desencriptar.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });

    } else {

        const desencriptar = (nuevoTexto) => {
            for (let i = 0; i < reemplazo.length; i++) {
                if (nuevoTexto.includes(reemplazo[i][1])) {
                    nuevoTexto = nuevoTexto.replaceAll(reemplazo[i][1], reemplazo[i][0])
                }
            }
            return nuevoTexto;

        }

        resultadoFinal(desencriptar(texto));
    }




})

botonCopiar.addEventListener("click", () => {

    mensajeFinal.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado al portapapeles",
        showConfirmButton: false,
        timer: 1500
    });


});