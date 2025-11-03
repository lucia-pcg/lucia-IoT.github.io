function cambiar(power) {
    const fondo = document.getElementById("fondo");
    const personaje = document.getElementById("personaje");

    fondo.className = ""; // limpia cualquier clase anterior

    switch (power) {
        case "estrella":
            personaje.src = "img/estrella_mario.png";
            personaje.width = 420;
            fondo.classList.add("estrella");
            break;
        case "monedas":
            personaje.src = "img/monedas_mario.png";
            personaje.width = 420;
            fondo.classList.add("monedas");
            break;
        case "flor":
            personaje.src = "img/florfuego_mario.png";
            personaje.width = 420;
            fondo.classList.add("flor");
            break;
        case "champiñon":
            personaje.src = "img/champiñon_mario.png";
            personaje.width = 420;
            fondo.classList.add("champiñon");
            break;
    }
    // Al hacer clic en Mario, vuelve al fondo blanco y al Mario normal
    personaje.onclick = function() {
        fondo.className = "";
        personaje.src = "img/mario_bros.avif";
        personaje.width = 600;
    };
}
