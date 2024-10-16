<template>
  <main class="mb-[400px]">
    <ProjetView :data="projets[0]" class="pb-8" />
  </main>
</template>

<style></style>

<script setup>
import { projets } from "~/lib/projets";

const route = useRoute();

console.log(route.params);
</script>
