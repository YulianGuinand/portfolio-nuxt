<template>
  <main class="mb-[400px]">
    <ProjetView :data="projets[id - 1]" :id="id" class="pb-8" />
  </main>
</template>

<script setup>
import { projets } from "~/lib/projets";

const route = useRoute();
let id = route.params.id;

definePageMeta({
  middleware: [
    function (to, from) {
      if (to.params.id === "0") {
        throw createError({
          statusCode: 404,
          statusMessage: "Le projet n'est pas trouvé !",
        });
      }
      if (to.params.id > projets.length) {
        return navigateTo("/projets/1");
      }
    },
  ],
});

// Génération des métadonnées dynamiques
if (id > 0 && id <= projets.length) {
  const project = projets[id - 1];

  useSeoMeta({
    title: `${project.title} - Projet de Yulian Guinand`,
    description: `${project.detail.replace(/<br\/?>/g, " ").slice(0, 160)}...`,
    ogTitle: `${project.title} - Projet de Yulian Guinand`,
    ogDescription: project.detail.replace(/<br\/?>/g, " ").slice(0, 200),
    ogUrl: `https://yulianguinand.fr/projets/${id}`,
    twitterTitle: `${project.title} - Projet de Yulian Guinand`,
    twitterDescription: `${project.detail.replace(/<br\/?>/g, " ").slice(0, 160)}...`,
    twitterCard: "summary",
  });
}
</script>
