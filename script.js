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
