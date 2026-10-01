const fotos = document.querySelectorAll(".photo, #profile-img");

fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        foto.classList.toggle("imagen-grande");

    });

});

const botonModo = document.querySelector("#modo-oscuro");

botonModo.addEventListener("click", function () {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "☀️ Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }

});