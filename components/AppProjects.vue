<script setup>
import ProjectCase from "./ProjectCase.vue";

const datas = [
  {
    title: "Yotion - Un Notion Clone",
    tag: "NextJs - TypeScript - Tailwind - BDD",
    imageUrl: "./img/yotion.png",
    link: "/projets/1",
  },
  {
    title: "Ping Pong Club",
    tag: "HTML - CSS - JS",
    imageUrl: "./img/ping_website.jpg",
    link: "/projets/2",
  },
  {
    title: "Reseau Social",
    tag: "Django - Python - MySQL - HTML - CSS",
    imageUrl: "./img/social.png",
    link: "/projets/3",
  },
  {
    title: "Site web du vignoble Guinand Vincent",
    tag: "HTML - CSS - JS",
    imageUrl: "./img/Website_Vin.png",
    link: "/projets/4",
  },
  {
    title: "Music Player en NextJs",
    tag: "NextJs - ReactJs - TypeScript",
    imageUrl: "./img/music-player.png",
    link: "/projets/5",
  },
  {
    title: "Site de Voitures",
    tag: "HTML - CSS - JS",
    imageUrl: "./img/Website_Car.png",
    link: "/projets/6 ",
  },
];
</script>

<template>
  <section
    id="projetGalerie"
    class="flex w-full flex-col items-center bg-white"
  >
    <div class="flex h-full w-full flex-col items-center">
      <h1 class="py-[20.28px] text-4xl font-bold">Derniers Travaux</h1>

      <div
        class="grid h-full w-[90%] grid-cols-1 grid-rows-6 gap-4 lg:grid-cols-3 lg:grid-rows-2"
      >
        <ProjectCase v-for="(data, index) in datas" :data="data" :key="index" />
      </div>
    </div>
  </section>
</template>

<style></style>
