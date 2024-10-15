<template>
  <a
    v-if="link"
    class="w-fit cursor-pointer border-none bg-[#2d2d2d] px-8 py-4 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#414040]"
    :href="link"
  >
    {{ title }}
  </a>
  <button
    v-else
    class="w-fit cursor-pointer border-none bg-[#2d2d2d] px-8 py-4 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#414040]"
  >
    {{ title }}
  </button>
</template>

<style></style>

<script setup>
const props = defineProps(["title", "link"]);
</script>
