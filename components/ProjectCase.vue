<template>
  <a
    :href="data.link"
    class="group/case flex h-full w-full flex-col gap-4 text-[#2d2d2d] transition-all"
  >
    <div class="z-0 h-[300px] w-full overflow-hidden bg-[#2d2d2d]">
      <img
        :src="data.imageUrl"
        class="h-full w-full object-cover transition-all hover/case:scale-110"
        alt="image"
      />
    </div>

    <div class="projet_description">
      <h3 class="text-xl font-bold">{{ data.title }}</h3>
      <p class="text-l">{{ data.tag }}</p>
    </div>
  </a>
</template>

<style></style>

<script setup>
const props = defineProps({
  data: Object,
});
</script>
