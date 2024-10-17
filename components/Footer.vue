<template>
  <footer id="footer" class="footer pointer-events-none relative z-0">
    <div
      class="footer-wrapper pointer-events-auto fixed bottom-0 left-0 h-[400px] w-full bg-[#ebebeb]"
    >
      <div class="content__inner mx-auto my-0 w-[90%] p-[100px]">
        <div class="nav flex justify-between">
          <div class="col">
            <li>
              <NuxtLink to="/#home"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about.html"> A Propos </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#projetGalerie"> Projets </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#competencesSection"> Compétences </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contact"> Contact </NuxtLink>
            </li>
          </div>

          <div class="col">
            <li>
              <NuxtLink
                external
                target="_blank"
                to="https://www.linkedin.com/in/yulian-guinand/"
              >
                LinkedIn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                external
                target="_blank"
                to="https://github.com/YulianGuinand"
              >
                Github
              </NuxtLink>
            </li>
          </div>
        </div>

        <div
          class="copyright mt-[6em] flex justify-between text-[0.8em] uppercase leading-[30px] opacity-50"
        >
          <span>2024. All right reserved.</span>
          <span>Site by <u>Yulian</u>.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer * {
  pointer-events: auto;
}

.last-section {
  position: relative;
  z-index: 1;
  background-color: #fff;
  padding-bottom: 400px;
  margin-bottom: -400px;
}

.nav li {
  list-style: none;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.1px;
  line-height: 30px;
}

.nav li:first-child {
  cursor: pointer;
  font-weight: bolder;
}

.nav li a {
  text-decoration: none;
  color: #2d2d2d;
}

@media (max-width: 900px) {
  .content__inner {
    padding: 20px;
  }
}
</style>

<script setup>
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
  gsap.from(".footer-wrapper", {
    y: -500,
    scrollTrigger: {
      start: "bottom bottom",
      scrub: true,
    },
  });
});
</script>
