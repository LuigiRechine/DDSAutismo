let bgInterval;
let textInterval;
let flashInterval;

const texts = [
  "Muito barulho...",
  "Luz forte...",
  "Difícil focar...",
  "Muita informação...",
  "Confuso...",
  "Tudo ao mesmo tempo...",
  "Sem pausa..."
];

function randomColor() {
  const colors = [
    "#ff4d4d", "#4d79ff", "#ffff66",
    "#66ff66", "#cc66ff", "#ff944d"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 🔊 iniciar sons
function startSounds() {
  document.getElementById("cam").volume = 0.3;
  document.getElementById("crowd").volume = 0.4;
  document.getElementById("traffic").volume = 0.3;

  document.getElementById("cam").play();
  document.getElementById("crowd").play();
  document.getElementById("traffic").play();
}

// 🔇 parar sons
function stopSounds() {
  document.getElementById("cam").pause();
  document.getElementById("crowd").pause();
  document.getElementById("traffic").pause();
}

function startExperience() {

  startSounds();

  // Fundo caótico
  bgInterval = setInterval(() => {
    document.body.style.background = randomColor();
  }, 150);

  // Textos espalhados
  const container = document.getElementById("textContainer");

  textInterval = setInterval(() => {
    const text = document.createElement("div");
    text.innerText = texts[Math.floor(Math.random() * texts.length)];

    text.style.position = "absolute";
    text.style.top = Math.random() * window.innerHeight + "px";
    text.style.left = Math.random() * window.innerWidth + "px";

    const effects = ["flash", "shake"];
    text.classList.add(effects[Math.floor(Math.random() * effects.length)]);

    container.appendChild(text);

    setTimeout(() => text.remove(), 1200);

  }, 300);

  // Flash de luz
  const overlay = document.getElementById("overlay");

  flashInterval = setInterval(() => {
    overlay.style.opacity = Math.random() * 0.8;

    setTimeout(() => {
      overlay.style.opacity = 0;
    }, 100);
  }, 400);
}

function stopExperience() {
  clearInterval(bgInterval);
  clearInterval(textInterval);
  clearInterval(flashInterval);

  document.body.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";

  stopSounds();

  document.getElementById("textContainer").innerHTML = "";
}
