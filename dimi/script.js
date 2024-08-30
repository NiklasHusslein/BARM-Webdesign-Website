const totalImages = 3;
let currentIndex = 0;

console.log(totalImages);

const currentImage = document.querySelector('.carousel-images img');

function showSlide(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    console.log(currentIndex);
    currentImage.src = 'images/Bild' + currentIndex + '.jpg';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

window.onload = () => {

    showSlide(currentIndex);
};
// Das Canvas-Element abrufen
        const canvas = document.getElementById('japanFlagge');
        const ctx = canvas.getContext('2d');

        // Schatteneffekt einstellen
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;

        // Hintergrund der Flagge (weiß) mit Schatten
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Schatten deaktivieren, bevor der Rand gezeichnet wird
        ctx.shadowColor = 'transparent';

        // Dünner schwarzer Rand um das Rechteck
        ctx.lineWidth = 2; // Dicke des Randes
        ctx.strokeStyle = '#000000'; // Farbe des Randes
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Roter Kreis in der Mitte
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2, false);
        ctx.fillStyle = '#BC002D';
        ctx.fill();