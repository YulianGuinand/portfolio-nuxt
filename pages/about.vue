<template>
  <main class="mb-[400px]">
    <section class="s-about block h-full w-full overflow-hidden pb-8 pt-40">
      <canvas ref="canvas" id="canvas"></canvas>
      <div
        class="slider-wrapper relative m-auto flex h-[80vh] max-h-[90vh] w-full max-w-[calc(90vh_*_9/16)] items-center justify-center overflow-hidden rounded-lg bg-black"
      >
        <!-- SLIDER -->
        <Slider />
      </div>
    </section>

    <!-- <section id="textSection" class="w-full h-screen bg-[#2d2d2d] flex items-center justify-around">
      <div class="container max-w-[700px] flex items-center text-2xl px-8">
        <p>Your text content goes here.</p>
      </div>
      <div class="image_container w-1/3 h-1/2 overflow-hidden">
        <img class="w-full h-full object-cover scale-125 transition-all duration-300 ease-out" src="path-to-your-image.jpg" alt="image" />
      </div>
    </section> -->
  </main>
</template>

<style>
.s-about .slider-wrapper {
  height: calc(90vw * 16 / 9);
}

.white > .line > .word > .char {
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}
</style>

<script setup>
import Slider from "~/components/Slider.vue";

const squareSize = 50;
let canvas = ref();
let context;
let hoveredSquare = { x: -1, y: -1 };
let animationSquares = [];
const easingDuration = 300; // Durée de l'animation (en ms)

// Fonction pour redimensionner le canvas
function resizeCanvas() {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  drawSquares();
}

// Fonction d'animation pour l'effet d'easing
function easeOutQuad(t) {
  return t * (2 - t);
}

// Fonction pour démarrer la transition de couleur
function startColorTransition(x, y, fromColor, toColor) {
  const startTime = Date.now();
  const square = { x, y, fromColor, toColor, startTime };
  animationSquares.push(square);
}

// Fonction pour dessiner tous les carrés
function drawSquares() {
  const width = canvas.value.width;
  const height = canvas.value.height;

  context.clearRect(0, 0, width, height); // Nettoyer le canvas

  for (let y = 0; y < height; y += squareSize) {
    for (let x = 0; x < width; x += squareSize) {
      const squareColor = getSquareColor(x, y);
      context.fillStyle = `rgb(${squareColor.r}, ${squareColor.g}, ${squareColor.b})`;
      context.fillRect(x, y, squareSize, squareSize);
    }
  }

  updateAnimations(); // Mettre à jour les carrés en animation
  requestAnimationFrame(drawSquares); // Boucle de dessin continue
}

// Fonction pour obtenir la couleur actuelle d'un carré
function getSquareColor(x, y) {
  // Vérifier si un carré est en train d'être animé
  const animatingSquare = animationSquares.find(
    (square) => square.x === x && square.y === y,
  );
  if (animatingSquare) {
    const { fromColor, toColor, startTime } = animatingSquare;
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / easingDuration, 1);
    const easedProgress = easeOutQuad(progress);

    return {
      r: Math.round(fromColor.r + (toColor.r - fromColor.r) * easedProgress),
      g: Math.round(fromColor.g + (toColor.g - fromColor.g) * easedProgress),
      b: Math.round(fromColor.b + (toColor.b - fromColor.b) * easedProgress),
    };
  }

  return { r: 255, g: 255, b: 255 }; // Couleur de base : #ebebeb
}

// Fonction pour mettre à jour les animations de carrés
function updateAnimations() {
  // Supprimer les animations terminées
  animationSquares = animationSquares.filter((square) => {
    const elapsedTime = Date.now() - square.startTime;
    return elapsedTime < easingDuration;
  });
}

// Fonction pour détecter la position de la souris et gérer la transition de couleur
function handleMouseMove(event) {
  const rect = canvas.value.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Trouver les coordonnées du carré correspondant à la position de la souris
  const x = Math.floor(mouseX / squareSize) * squareSize;
  const y = Math.floor(mouseY / squareSize) * squareSize;

  // Si la souris passe sur un nouveau carré, lancer la transition de couleur
  if (hoveredSquare.x !== x || hoveredSquare.y !== y) {
    hoveredSquare = { x, y };
    startColorTransition(
      x,
      y,
      { r: 235, g: 235, b: 235 },
      { r: 65, g: 64, b: 64 },
    ); // De #ebebeb à #414040
  }
}

onMounted(() => {
  context = canvas.value.getContext("2d");
  canvas.value.style.position = "absolute";

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  canvas.value.addEventListener("mousemove", handleMouseMove);

  // Démarrer la boucle de dessin
  drawSquares();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
  canvas.value.removeEventListener("mousemove", handleMouseMove);
});
</script>
