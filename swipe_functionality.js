let currentPanel = 0; // 0 = sinistra, 1 = destra
const panels = document.querySelectorAll('.panel');

// Funzione per mostrare il pannello selezionato
function showPanel(index) {
    panels.forEach((panel, i) => {
        if (i === index) {
            panel.style.zIndex = 1; // Porta il pannello in primo piano
            panel.classList.add('active');
            panel.classList.remove('hidden');
        } else {
            panel.style.zIndex = 0; // Nasconde il pannello dietro
            panel.classList.add('hidden');
            panel.classList.remove('active');
        }
    });
}


// Eventi di swipe
let startX = 0;

// Rileva l'inizio dello swipe
document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

// Rileva la fine dello swipe
document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) {
        // Swipe verso sinistra
        currentPanel = Math.min(currentPanel + 1, panels.length - 1);
    } else if (endX > startX + 50) {
        // Swipe verso destra
        currentPanel = Math.max(currentPanel - 1, 0);
    }
    showPanel(currentPanel);
});

// Imposta il pannello iniziale
showPanel(currentPanel);
