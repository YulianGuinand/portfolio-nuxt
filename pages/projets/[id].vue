<template>
  <main class="mb-[400px]">
    <ProjetView :data="projets[id - 1]" :id="id" class="pb-8" />
  </main>
</template>

<style></style>

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
</script>
