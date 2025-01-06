<script setup>
useSeoMeta({
  title: "Portfolio - Yulian Guinand",
  description:
    "Découvrez le portfolio de Yulian Guinand, développeur spécialisé en Next.js, React.js, TypeScript et autres technologies modernes. Explorez ses projets innovants, ses compétences variées et contactez-le pour collaborer.",
  ogTitle: "Portfolio - Yulian Guinand",
  ogDescription:
    "Explorez le portfolio de Yulian Guinand, développeur full-stack passionné par les technologies modernes comme Next.js et TypeScript. Découvrez ses projets et ses compétences.",
  ogUrl: "https://yulianguinand.fr/",
  twitterTitle: "Portfolio - Yulian Guinand",
  twitterDescription:
    "Développeur spécialisé en Next.js, React.js et plus, Yulian Guinand présente ses projets et compétences. Contactez-le pour en savoir plus.",
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
