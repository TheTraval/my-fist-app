
"use strict";

// ===== Seleccionar elementos del HTML =====
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");
const titleInput = document.getElementById("title-input");
const eventTitle = document.getElementById("event-title");

// ===== Estado inicial =====
let count = 0;

// ===== Actualizar el contador en pantalla =====
function updateCounter() {
    counterDisplay.textContent = count;
}

// ===== Incrementar el contador =====
incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

// ===== Disminuir el contador sin permitir negativos =====
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// ===== Reiniciar el contador =====
resetButton.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

// ===== Cambiar el título en tiempo real =====
titleInput.addEventListener("input", () => {
    const newTitle = titleInput.value.trim();

    eventTitle.textContent = newTitle || "Contador de Eventos";
});

// ===== Inicializar la interfaz =====
updateCounter();
