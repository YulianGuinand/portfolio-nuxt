<script setup>
import ProjectCase from "./ProjectCase.vue";

const datas = [
  {
    title: "Yotion - Un Notion Clone",
    tag: "NextJs - TypeScript - Tailwind - BDD",
    imageUrl: "./img/yotion.png",
    link: "",
  },
  {
    title: "Ping Pong Club",
    tag: "HTML - CSS - JS",
    imageUrl: "./img/ping_website.jpg",
    link: "",
  },
  {
    title: "Reseau Social",
    tag: "Django - Python - MySQL - HTML - CSS",
    imageUrl: "./img/social.png",
    link: "",
  },
  {
    title: "Site web du vignoble Guinand Vincent",
    tag: "HTML - CSS - JS",
    imageUrl: "./img/Website_Vin.png",
    link: "",
  },
  {
    title: "Music Player en NextJs",
    tag: "NextJs - ReactJs - TypeScript",
    imageUrl: "./img/music-player.png",
    link: "",
  },
  {
    title: "Site de Voitures",
    tag: "HTML - CSS - JS",
    imageUrl: "./img/Website_Car.png",
    link: "",
  },
];
</script>

<template>
  <section
    id="projetGalerie"
    class="w-full flex items-center flex-col bg-white"
  >
    <div class="w-full h-full flex items-center flex-col">
      <h1 class="py-[20.28px] 0">Derniers Travaux</h1>

      <div
        class="w-[90%] h-full grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 gap-4"
      >
        <ProjectCase v-for="(data, index) in datas" :data="data" :key="index" />
      </div>
    </div>
  </section>
</template>

<style></style>
