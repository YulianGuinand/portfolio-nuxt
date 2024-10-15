<template>
  <section id="competencesSection" class="mt-40 overflow-hidden bg-[#2d2d2d]">
    <div class="competences_container_one">
      <div class="comptences_list">
        <p>NextJs</p>
        <p>ReactJs</p>
        <p>Javascript</p>
        <p>TypeScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>VueJs</p>
        <p>NuxtJs</p>
        <p>AstroJs</p>
        <p>Figma</p>
      </div>
    </div>
    <div class="competences_container_two">
      <div class="comptences_list">
        <p>HTML</p>
        <p>AstroJs</p>
        <p>Figma</p>
        <p>Javascript</p>
        <p>CSS</p>
        <p>TypeScript</p>
        <p>NextJs</p>
        <p>VueJs</p>
        <p>NuxtJs</p>
        <p>ReactJs</p>
      </div>
    </div>
    <div class="competences_container_three">
      <div class="comptences_list">
        <p>NextJs</p>
        <p>ReactJs</p>
        <p>Javascript</p>
        <p>TypeScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>VueJs</p>
        <p>NuxtJs</p>
        <p>AstroJs</p>
        <p>Figma</p>
      </div>
    </div>
  </section>
</template>

<style>
.competences_container_one,
.competences_container_three,
.competences_container_two {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comptences_list {
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  flex: none;
  color: #fff;
}

.comptences_list p {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 0 6rem;
  align-items: center;
  font-size: 5rem;
  transition: all 0.3s ease;
}
@media (max-width: 1000px) {
  .comptences_list p {
    font-size: 2rem;
    padding: 0 2rem;
  }
}
.comptences_list p:hover {
  background: #414040;
}
</style>

<script setup>
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
  gsap.fromTo(
    "#competencesSection .competences_container_one",
    { x: "0%" },
    {
      x: "-50%",
      scrollTrigger: {
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        trigger: "#competencesSection",
      },
    },
  );
  gsap.fromTo(
    "#competencesSection .competences_container_three",
    { x: "-50%" },
    {
      x: "0%",
      scrollTrigger: {
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        trigger: "#competencesSection",
      },
    },
  );
  gsap.fromTo(
    "#competencesSection .competences_container_two",
    { x: "-50%" },
    {
      x: "-5%",
      scrollTrigger: {
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        trigger: "#competencesSection",
      },
    },
  );
});
</script>
