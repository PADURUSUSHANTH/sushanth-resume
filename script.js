/* Typing animation for tagline */
document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".tagline");
  const text = tagline.textContent;
  tagline.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});

/* Binary Matrix Rain Effect */
const canvas = document.getElementById("matrixRain");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let binary = "01010110010101011010010101";
binary = binary.split("");

let fontSize = 16;
let columns = canvas.width / fontSize;

let drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = fontSize + "px Courier";

  for (let i = 0; i < drops.length; i++) {
    let text = binary[Math.floor(Math.random() * binary.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 33);
