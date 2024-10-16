<template>
  <div class="flex h-full w-full flex-wrap justify-center gap-8">
    <Card
      v-if="data.length > 1"
      v-for="detailData in data"
      :imgLinks="detailData.imgLink"
      :title="detailData.title"
      :description="detailData.description"
      class="mx-4"
    />
  </div>
</template>

<style></style>

<script setup>
import Card from "./Card.vue";

const props = defineProps(["data"]);
</script>
