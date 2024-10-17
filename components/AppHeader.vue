<script setup>
import gsap from "gsap";
const burger = ref();
const link1 = ref();
const link2 = ref();
const link3 = ref();
const link4 = ref();
const link5 = ref();
const link6 = ref();

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
    "<",
  );
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
  <header class="flex w-full justify-center">
    <nav
      class="t-0 l-[50%] fixed z-[99999] flex w-full max-w-[1920px] items-center justify-between px-[2em] py-[1.5em] text-white mix-blend-difference"
    >
      <div class="info flex-1">
        <p>Portfolio.</p>
      </div>
      <div class="flex-1 text-center uppercase">
        <p>
          <NuxtLink to="/" class="text-[12px] sm:text-[30px]"
            >Le Portfolio de Yulian</NuxtLink
          >
        </p>
      </div>

      <div class="toggle-menu flex flex-1 justify-end">
        <button
          @click="onClick"
          ref="burger"
          class="burger buttonLink"
        ></button>
      </div>
    </nav>
  </header>
  <div
    class="overlay fixed left-0 top-0 z-[9999] flex h-full w-screen bg-[#2d2d2d] will-change-transform"
  >
    <div
      class="overlay-menu fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4"
    >
      <div class="menu-item">
        <p>
          <NuxtLink
            to="/"
            @click="onClick"
            ref="link1"
            class="menu-item-link buttonLink"
            >Home</NuxtLink
          >
        </p>
      </div>
      <div class="menu-item">
        <p>
          <NuxtLink
            to="/about"
            @click="onClick"
            class="menu-item-link buttonLink"
            >A Propos</NuxtLink
          >
        </p>
      </div>
      <div class="menu-item">
        <p>
          <NuxtLink
            @click="onClick"
            href="/#projetGalerie"
            ref="link2"
            class="menu-item-link buttonLink"
            >Galerie de Projet</NuxtLink
          >
        </p>
      </div>
      <div class="menu-item">
        <p>
          <NuxtLink
            href="/#competencesSection"
            ref="link3"
            class="menu-item-link buttonLink"
            @click="onClick"
            >Compétences</NuxtLink
          >
        </p>
      </div>
      <div class="menu-item">
        <p>
          <NuxtLink
            @click="onClick"
            to="/#contact"
            ref="link4"
            class="menu-item-link buttonLink"
            >Contact</NuxtLink
          >
        </p>
      </div>
    </div>

    <div class="sub-nav">
      <p>
        <NuxtLink
          external
          @click="onClick"
          target="_blank"
          ref="link5"
          to="https://www.linkedin.com/in/yulian-guinand/"
        >
          LinkedIn
        </NuxtLink>
      </p>
      <p>.</p>
      <p>
        <NuxtLink
          external
          @click="onClick"
          target="_blank"
          ref="link6"
          to="https://github.com/YulianGuinand"
        >
          Github
        </NuxtLink>
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
