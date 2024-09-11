// Das Canvas-Element aus dem HTML-Dokument abrufen
const canvas = document.getElementById("japanFlagge");
// Den 2D-Kontext des Canvas-Elements abrufen, um darauf zu zeichnen
const ctx = canvas.getContext("2d");

// Schatteneffekt einstellen
ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Farbe des Schattens (halbtransparentes Schwarz)
ctx.shadowBlur = 10; // Unschärfe des Schattens
ctx.shadowOffsetX = 5; // Horizontale Verschiebung des Schattens
ctx.shadowOffsetY = 5; // Horizontale Verschiebung des Schattens

// Hintergrund der Flagge (weiß) mit Schatten
ctx.fillStyle = "#FFFFFF"; // Farbe des Rechtecks (weiß)
ctx.fillRect(0, 0, canvas.width, canvas.height); // Rechteck zeichnen, das die gesamte Fläche des Canvas abdeckt

// Schatten deaktivieren, bevor der Rand gezeichnet wird
ctx.shadowColor = "transparent"; // Schattenfarbe auf transparent setzen, um den Schatten zu deaktivieren

// Dünner schwarzer Rand um das Rechteck
ctx.lineWidth = 2; // Dicke des Randes
ctx.strokeStyle = "#000000"; // Farbe des Randes
ctx.strokeRect(0, 0, canvas.width, canvas.height); // Rechteck umranden

// Roter Kreis in der Mitte
ctx.beginPath(); // Einen neuen Pfad beginnen, um den Kreis zu zeichnen
ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2, false); // Kreis in der Mitte des Canvas zeichnen
ctx.fillStyle = "#BC002D"; // Farbe des Kreises im rot der Japanflagge
ctx.fill(); // Kreis mit der roten Farbe füllen

//Anzahl der Fotos im Ordner
const totalImages = 6;

//Index vom derzeit angezeigten Bild
const currentImageIndices = [0, 0, 0];

//Pfad der Bilder der jeweiligen Stadt
const directoryPath = [
  "assets/images/Tokyo/Bild",
  "assets/images/Kyoto/Bild",
  "assets/images/Osaka/Bild",
];

//Wählt die 3 Bilder Carousel Klassen aus
const currentImageClasses = document.querySelectorAll(".carousel-images img");

//Methode zum Auswählen des passenden Bilds
function showSlide(nextSlide, i) {
  //berechnet den neuen Index, nextSlide == true -> index + 1, nextSlide == false -> index - 1
  const newIndex = nextSlide
    ? currentImageIndices[i] + 1
    : currentImageIndices[i] - 1;
  //wenn der neue Index höher ist als die Anzahl der Bilder, setze den dezeitigen Index auf 0
  if (newIndex >= totalImages) {
    currentImageIndices[i] = 0;
    //wenn der neue Index negativ ist, setze den dezeitigen Index auf das letzte Bild
  } else if (newIndex < 0) {
    currentImageIndices[i] = totalImages - 1;
    //sonst setze den derzeitigen Index auf den neuen Index
  } else {
    currentImageIndices[i] = newIndex;
  }
  //setze den Pfad des Bildes im jeweiligen Bild Carousel
  currentImageClasses[i].src =
    directoryPath[i] + currentImageIndices[i] + ".jpg";
}

//setze das nächste Bild von Tokyo
function nextSlideTokyo() {
  showSlide(true, 0);
}
//setze das vorherige Bild von Tokyo
function prevSlideTokyo() {
  showSlide(false, 0);
}

//setze das nächste Bild von Tokyo
function nextSlideKyoto() {
  showSlide(true, 1);
}
//setze das vorherige Bild von Tokyo
function prevSlideKyoto() {
  showSlide(false, 1);
}

//setze das nächste Bild von Tokyo
function nextSlideOsaka() {
  showSlide(true, 2);
}
//setze das vorherige Bild von Tokyo
function prevSlideOsaka() {
  showSlide(false, 2);
}

// Event Listener hinzufügen, der den Code ausführt, sobald das Document Object Model vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
  // Referenz zum Button-Element mit der ID "nara-button" abrufen
  const naraButton = document.getElementById("nara-button");
  // Referenz zum Video-Element mit der ID "nara-video" abrufen
  const naraVideo = document.getElementById("nara-video");
  // Event Listener zum Button hinzufügen, der auf einen Klick wartet
  naraButton.addEventListener("click", () => {
    // Überprüfen, ob das Video derzeit ausgeblendet ist
    if (naraVideo.style.display === "none") {
      // Wenn das Video ausgeblendet ist, es sichtbar machen
      naraVideo.style.display = "block";
    } else {
      // Wenn das Video sichtbar ist, es ausblenden
      naraVideo.style.display = "none";
    }
  });
  // Referenz zum Button-Element mit der ID "osaka-button" abrufen
  const osakaButton = document.getElementById("osaka-button");
  // Referenz zum Bild-Element mit der ID "osaka-bild" abrufen
  const osakaBild = document.getElementById("osaka-bild");
  // Event Listener zum Button hinzufügen, der auf einen Klick wartet
  osakaButton.addEventListener("click", () => {
    // Überprüfen, ob das Video derzeit ausgeblendet ist
    if (osakaBild.style.display === "none") {
      // Wenn das Video ausgeblendet ist, es sichtbar machen
      osakaBild.style.display = "block";
    } else {
      // Wenn das Video sichtbar ist, es ausblenden
      osakaBild.style.display = "none";
    }
  });
  // Ein neues Audio-Objekt erstellen und die Audiodatei "tokyo_audio.m4a" aus dem Verzeichnis "assets/audio" laden
  const audio = new Audio(
    "assets/audio/tokyo_audio.mp3",
    "assets/audio/tokyo_audio.ogv",
    "assets/audio/tokyo_audio.wav"
  );
  // Referenz zum Button-Element mit der ID "tokyo-button" abrufen
  const tokyoButton = document.getElementById("tokyo-button");
  // Referenz zum Bild-Element mit der ID "tokyo-bild" abrufen
  const tokyoBild = document.getElementById("tokyo-bild");
  // Event Listener zum Button hinzufügen, der auf einen Klick wartet
  tokyoButton.addEventListener("click", () => {
    // Überprüfen, ob das Video derzeit ausgeblendet ist
    if (tokyoBild.style.display === "none") {
      // Wenn das Video ausgeblendet ist, es sichtbar machen
      tokyoBild.style.display = "block";
    } else {
      // Wenn das Video sichtbar ist, es ausblenden
      tokyoBild.style.display = "none";
    }
    //Die Audiodatei wird abgespielt
    audio.play();
  });
  // Referenz zum Button-Element mit der ID "kyoto-button" abrufen
  const kyotoButton = document.getElementById("kyoto-button");
  // Referenz zum Bild-Element mit der ID "kyoto-bild" abrufen
  const kyotoBild = document.getElementById("kyoto-bild");
  // Event Listener zum Button hinzufügen, der auf einen Klick wartet
  kyotoButton.addEventListener("click", () => {
    // Überprüfen, ob das Video derzeit ausgeblendet ist
    if (kyotoBild.style.display === "none") {
      // Wenn das Video ausgeblendet ist, es sichtbar machen
      kyotoBild.style.display = "block";
    } else {
      // Wenn das Video sichtbar ist, es ausblenden
      kyotoBild.style.display = "none";
    }
  });
});
