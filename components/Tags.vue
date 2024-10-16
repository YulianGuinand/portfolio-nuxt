<template>
  <div class="tag">
    <p class="text-xl font-bold">{{ tag }}</p>
  </div>
</template>

<style>
.tag {
  width: fit-content;
  height: fit-content;
  border-left: 5px #2d2d2d solid;
}

.tag p {
  padding-left: 1rem;
}
</style>

<script setup>
const props = defineProps(["tag"]);
</script>
