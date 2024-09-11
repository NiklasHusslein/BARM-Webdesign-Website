// Canvas und Zeichenkontext initialisieren
const canvas = document.getElementById("pizzaCanvas");
const ctx = canvas.getContext("2d");

// Pizza Margherita (Basis) zeichnen
function drawPizza() {
  // Pizzaboden
  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, 2 * Math.PI); // Kreis für den Pizzaboden
  ctx.fillStyle = "#F5D6A4"; // Pizzateigfarbe
  ctx.fill();
  ctx.closePath();

  // Tomatensauce
  ctx.beginPath();
  ctx.arc(200, 200, 130, 0, 2 * Math.PI); // Kleinere Kreisfläche für die Tomatensauce
  ctx.fillStyle = "#A12312"; // Tomatensaucenfarbe
  ctx.fill();
  ctx.closePath();

  // Käse
  ctx.beginPath();
  ctx.arc(200, 200, 120, 0, 2 * Math.PI); // Kleinster Kreis für den Käse
  ctx.fillStyle = "#FFD700"; // Käsefarbe
  ctx.fill();
  ctx.closePath();

  // Smiley-Salami (Positionierung)
  drawSalami(150, 150);
  drawSalami(250, 150);
  drawSalami(200, 250);
  drawSalami(170, 230);
  drawSalami(230, 230);
}

// Salami zeichnen (als Kreise)
function drawSalami(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI); // Kreise für Salami
  ctx.fillStyle = "#CE4836"; // Salami Farbe
  ctx.fill();
  ctx.closePath();
}

// Pizza zeichnen beim Laden der Seite
drawPizza();
