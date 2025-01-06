<script setup>
useSeoMeta({
  title: "Portfolio - Yulian Guinand",
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});
</script>

<template>
  <main class="z-[999] mb-[400px] scroll-smooth">
    <AppHero />
    <AppProjects />
    <AppCompetences />
    <AppContact />
  </main>
</template>
