<script setup>
import gsap from "gsap";
const burger = ref();
const link1 = ref();
const link2 = ref();
const link3 = ref();
const link4 = ref();
const link5 = ref();
let isOpen = false;
const timeline = gsap.timeline({ paused: true });
const onClick = () => {
  if (isOpen) {
    timeline.reverse();

    burger.value.classList.toggle("active");
  } else {
    burger.value.classList.toggle("active");
    timeline.play();
  }
  isOpen = !isOpen;
};
onMounted(() => {
  const toggleButton = ref([burger, link1, link2, link3, link4, link5]);
  gsap.set(".menu-item p", { y: -225 });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.out",
  });

  timeline.to(".menu-item p", {
    delay: -0.9,
    duration: 1,
    y: 0,
    ease: "power4.out",
    stagger: -0.2,
  });

  timeline.to(
    ".sub-nav",
    {
      bottom: "10%",
      opacity: 1,
      duration: 0.2,
      delay: 0.5,
    },
    "<"
  );

  toggleButton.value.forEach((button) => {
    button.value.addEventListener("click", () => {
      onClick();
    });
  });
});

onUnmounted(() => {
  toggleButton.value.forEach((button) => {
    button.value.removeEventListener("click", () => {
      onClick();
    });
  });
});
</script>

<template>
  <header class="w-full flex justify-center">
    <nav
      class="fixed w-full max-w-[1920px] t-0 l-[50%] flex justify-between items-center py-[1.5em] px-[2em] text-white mix-blend-difference z-[99999]"
    >
      <div class="flex-1 info">
        <p>Portfolio. 1</p>
      </div>
      <div class="flex-1 text-center uppercase">
        <p><a href="#" class="text-[30px]">Le Portfolio de Yulian</a></p>
      </div>

      <div class="flex-1 flex justify-end toggle-menu">
        <button ref="burger" class="burger buttonLink"></button>
      </div>
    </nav>
  </header>
  <div
    class="overlay z-[9999] fixed top-0 left-0 w-screen h-full flex bg-[#2d2d2d] will-change-transform"
  >
    <div
      class="overlay-menu fixed top-0 left-0 w-screen h-screen flex gap-4 flex-col justify-center items-center"
    >
      <div class="menu-item">
        <p><a href="#home" class="menu-item-link buttonLink">Home</a></p>
      </div>
      <div class="menu-item">
        <p>
          <a href="/about.html" class="menu-item-link buttonLink">A Propos</a>
        </p>
      </div>
      <div class="menu-item">
        <p>
          <a href="#projetGalerie" ref="link1" class="menu-item-link buttonLink"
            >Galerie de Projet</a
          >
        </p>
      </div>
      <div class="menu-item">
        <p>
          <a
            href="#competencesSection"
            ref="link2"
            class="menu-item-link buttonLink"
            >Compétences</a
          >
        </p>
      </div>
      <div class="menu-item">
        <p>
          <a href="#contact" ref="link3" class="menu-item-link buttonLink"
            >Contact</a
          >
        </p>
      </div>
    </div>

    <div class="sub-nav">
      <p>
        <a
          target="_blank"
          ref="link4"
          href="https://www.linkedin.com/in/yulian-guinand/"
        >
          LinkedIn
        </a>
      </p>
      <p>.</p>
      <p>
        <a target="_blank" ref="link5" href="https://github.com/YulianGuinand">
          Github
        </a>
      </p>
      <p>.</p>
    </div>
  </div>
</template>

<style>
.burger {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.75em 2em 1.5em 2em;
  background: #000;
  outline: none;
  border: none;
  width: 28px;
  height: 20px;
  transition: all 250ms ease-out;
  cursor: pointer;
}

.burger:before,
.burger:after {
  content: "";
  width: 40px;
  height: 2px;
  position: absolute;
  background: #fff;
  transition: all 250ms ease-out;
  will-change: transform;
}

.burger:before {
  transform: translateY(-3px);
}

.burger:after {
  transform: translateY(3px);
}

.active.burger:before {
  transform: translateY(0) rotate(45deg);
}

.active.burger:after {
  transform: translateY(0) rotate(-45deg);
}

.overlay {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.menu-item {
  display: flex;
  gap: 1rem;
  cursor: pointer;
  clip-path: polygon(0 -50%, 100% 0, 100% 100%, 0% 100%);
}

.menu-item p {
  position: relative;
  text-align: center;
  font-family: "Epilogue", sans-serif;
  font-size: 5vw;
  line-height: 80%;
  will-change: transform;
  transition: letter-spacing 0.3s;
}

.menu-item p:hover {
  letter-spacing: 0.075em;
}

.menu-item p a {
  text-decoration: none;
  color: #fff;
}

.sub-nav {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5em;
  opacity: 0;
}

.sub-nav p {
  font-family: "Epilogue", sans-serif;
  font-size: 20px;
}

.sub-nav p a {
  text-decoration: none;
  color: #fff;
}
</style>
