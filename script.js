document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const message = document.getElementById("message");

    yesButton.addEventListener("click", () => {
        message.classList.remove("hidden");
    });

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});

//FOTO Y CORAZONES PANTALLA 
document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const message = document.getElementById("message");
    const photo = document.getElementById("photo");
    const heartContainer = document.getElementById("heart-container");

    yesButton.addEventListener("click", () => {
        message.classList.remove("hidden");
        photo.classList.remove("hidden");
        createHearts(); // Llamamos la función para generar corazones
    });

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    function createHearts() {
        for (let i = 0; i < 30; i++) { // Crea 30 corazones
            setTimeout(() => {
                const heart = document.createElement("div");
                heart.innerHTML = "❤️";
                heart.classList.add("heart");
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.animationDuration = `${Math.random() * 2 + 1}s`; // Velocidad aleatoria
                heartContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 2000); // Eliminar corazones después de 2 segundos
            }, i * 100); // Salen poco a poco
        }
    }
});
