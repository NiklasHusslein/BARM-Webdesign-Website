var canvas = document.getElementById("airplaneCanvas");
var plane = canvas.getContext("2d");

plane.beginPath();
plane.moveTo(10, 10);
plane.lineTo(10, 50);
plane.lineTo(60, 50);
plane.lineTo(70, 80);
plane.lineTo(80, 50);
plane.lineTo(110, 50);
plane.lineTo(130, 40);
plane.lineTo(110, 30);
plane.lineTo(80, 30);
plane.lineTo(70, 10);
plane.lineTo(60, 30);
plane.lineTo(30, 30);
plane.closePath();
plane.stroke();
plane.strokeStyle = "#FFFFFF";
plane.stroke();
