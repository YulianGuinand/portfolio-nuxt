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

    <section
      id="textSection"
      class="flex h-screen w-full flex-col items-center justify-around bg-[#2d2d2d] md:flex-row"
    >
      <div class="container flex max-w-[700px] items-center px-8 text-2xl">
        <div class="wrapper">
          <p ref="pRef" class="white text-white">
            "Carpe diem, quam minimum credula postero" est un célèbre vers latin
            tiré d'un poème d'Horace, signifiant : « Cueille l'instant présent
            sans te préoccuper de ce que le lendemain te réserve. »
          </p>
        </div>
      </div>
      <div class="image_container h-1/2 w-[90%] overflow-hidden md:w-1/3">
        <img
          class="h-full w-full scale-125 object-cover transition-transform hover:scale-100"
          src="/img/horace.jpg"
          alt="image of Horace"
        />
      </div>
    </section>
  </main>
</template>

<style>
.s-about .slider-wrapper {
  height: calc(90vw * 16 / 9);
}

.white > .line > .word {
  opacity: 0.3;
  transition: all 0.3s ease-in-out;
}
</style>

<script setup>
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Slider from "~/components/Slider.vue";
const pRef = ref();
const squareSize = 50;
let canvas = ref();
let context;
let hoveredSquare = { x: -1, y: -1 };
let animationSquares = [];
const easingDuration = 300; // Durée de l'animation (en ms)

useSeoMeta({
  title: "À propos - Yulian Guinand",
  description:
    "Découvrez la philosophie de Yulian Guinand autour du Carpe Diem, son histoire et sa passion pour le montage vidéo à travers des œuvres inspirantes.",
  ogTitle: "À propos - Yulian Guinand",
  ogDescription:
    "Plongez dans l'univers de Yulian Guinand, sa philosophie Carpe Diem, ses vidéos montées avec passion et l'histoire inspirante de cette célèbre citation.",
  ogUrl: "https://yulianguinand.fr/about",
  twitterTitle: "À propos - Yulian Guinand",
  twitterDescription:
    "Explorez la philosophie Carpe Diem de Yulian Guinand, ses créations vidéo et l'histoire de cette citation emblématique.",
  twitterCard: "summary",
});

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
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  context = canvas.value.getContext("2d");
  canvas.value.style.position = "absolute";

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  canvas.value.addEventListener("mousemove", handleMouseMove);

  // Démarrer la boucle de dessin
  drawSquares();

  useSplitText(pRef, {
    splitBy: "lines, words",
  });

  const char = document.querySelectorAll(".wrapper p .line .word");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#textSection",
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
      },
    })
    .set(
      char,
      {
        opacity: 1,
        stagger: 0.1,
      },
      0.1,
    );
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
  canvas.value.removeEventListener("mousemove", handleMouseMove);
});
</script>
