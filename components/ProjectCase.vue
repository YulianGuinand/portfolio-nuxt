<template>
  <a
    :href="data.link"
    class="group/case w-full h-full flex flex-col gap-4 text-[#2d2d2d] transition-all"
  >
    <div class="bg-[#2d2d2d] w-full h-[300px] z-0 overflow-hidden">
      <img
        :src="data.imageUrl"
        class="w-full h-full object-cover transition-all hover/case:scale-110"
        alt="image"
      />
    </div>

    <div class="projet_description">
      <h3>{{ data.title }}</h3>
      <p>{{ data.tag }}</p>
    </div>
  </a>
</template>

<style></style>

<script setup>
const props = defineProps({
  data: Object,
});
console.log(props.data);
</script>
