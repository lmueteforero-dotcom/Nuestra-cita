const abrir = document.getElementById("abrir");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const acepto = document.getElementById("acepto");

abrir.onclick = () => {
    document.querySelector(".pantalla-inicio").style.display = "none";
    sobre.classList.remove("oculto");
};

sobre.onclick = () => {
    sobre.classList.add("oculto");
    carta.classList.remove("oculto");
    crearCorazones();
};

acepto.onclick = () => {
    alert("🥹 ¡Sabía que aceptarías! ❤️\n\nTe espero esta noche a las 7:00 p. m. en Campesinos. 🧡");
};

function crearCorazones() {
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.className = "corazon";
        corazon.innerHTML = "🧡";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = (20 + Math.random() * 25) + "px";

        document.getElementById("corazones").appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 6000);

    }, 350);
}
