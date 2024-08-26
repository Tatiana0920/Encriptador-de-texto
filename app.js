function checkInput(text) {
    const regex = /^[a-z\s]*$/;

    if (!regex.test(text)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Solo se aceptan letras minúsculas y sin acentos.");
        return false;
    }
    return true;
}

function encriptar() {
    const inputText = document.querySelector(".input-text").value;
    const withoutText = document.getElementById("output-text");
    const imagen = document.querySelector(".imagen");

    if (!checkInput(inputText)) {
        return;
    }

    let textoEncriptado = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    withoutText.value = textoEncriptado;

    if (textoEncriptado) {
        imagen.style.display = 'none';
    }

    // Limpia el campo de entrada
    document.querySelector(".input-text").value = "";
}

function desencriptar() {
    const inputText = document.querySelector(".input-text").value;
    const withoutText = document.getElementById("output-text");
    const imagen = document.querySelector(".imagen");

    if (!checkInput(inputText)) {
        return;
    }

    let textoDesencriptado = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    withoutText.value = textoDesencriptado;

    if (textoDesencriptado) {
        imagen.style.display = 'none';
    }

    // Limpia el campo de entrada
    document.querySelector(".input-text").value = "";
}

function copiar() {
    const withoutText = document.getElementById("output-text");
    const imagen = document.querySelector(".imagen");
    withoutText.select();
    document.execCommand("copy");

    // Limpia el textarea y restablece el placeholder
    withoutText.value = "";

    // Muestra la imagen si el textarea está vacío
    if (!withoutText.value) {
        imagen.style.display = 'block';
    }
    
}