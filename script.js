document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const message = document.getElementById("message");
    const photo = document.getElementById("photo");
    const loveMessage = document.getElementById("love-message");
    const heartContainer = document.getElementById("heart-container");

    yesButton.addEventListener("click", () => {
        message.classList.remove("hidden");
        photo.classList.remove("hidden");
        loveMessage.classList.remove("hidden");
        noButton.remove(); // Elimina el botón "No"
        createHearts(); // Llamamos la función para generar corazones
    });

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

function createHearts() {
    for (let i = 0; i < 50; i++) { // Generar 50 corazones
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");

            // Posición aleatoria en la parte superior
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `-10px`; // Empiezan fuera de la pantalla arriba

            // Tamaño aleatorio para variedad
            heart.style.fontSize = `${Math.random() * 30 + 10}px`;

            // Velocidad aleatoria
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

            document.getElementById("heart-container").appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000); // Los corazones desaparecen después de caer
        }, i * 200); // Salen poco a poco
    }
}
});
