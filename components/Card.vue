<template>
  <div class="mx-auto flex h-fit w-fit flex-col items-center gap-4 overflow-hidden rounded-lg shadow-lg">
    <div class="flex h-fit w-full max-w-[600px] items-center gap-2">
      <img v-for="link in imgLinks" :src="link" alt="" class="h-full max-h-[600px] w-full max-w-[600px] object-cover" />
    </div>
    <div class="mx-auto flex w-full max-w-[600px] flex-col gap-4 px-8 pb-8 text-left">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p v-html="description"></p>
    </div>
  </div>
</template>


<script setup>
const props = defineProps(["imgLinks", "title", "description"]);
</script>
