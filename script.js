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
    for (let i = 0; i < 50; i++) { // Más corazones
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            
            // Posición aleatoria en toda la pantalla
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`; 
            
            // Tamaño aleatorio para más variedad
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;

            heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // Diferentes velocidades
            document.getElementById("heart-container").appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000); // Desaparecen después de 4 segundos
        }, i * 100); // Salen poco a poco
    }
}
});
