<template>
  <main class="mb-[400px]">
    <ProjetView :data="projets[id - 1]" class="pb-8" />
  </main>
</template>

<style></style>

<script setup>
import { projets } from "~/lib/projets";

const route = useRoute();
const id = route.params.id;
if (id > projets.length) {
  throw createError({
    statusCode: 404,
    statusMessage: "Le projet n'est pas trouvé !",
  });
}
</script>
