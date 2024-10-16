<template>
  <section
    id="projet_section"
    class="mt-[200px] flex flex-col gap-8 lg:mt-[100px]"
  >
    <div class="flex h-full w-full flex-col gap-8 lg:h-screen">
      <div class="flex h-full flex-col gap-4 lg:flex-row">
        <div class="h-full w-full overflow-hidden lg:w-[50%]">
          <img
            :src="data.imagePreview"
            alt="IMG"
            class="h-full w-full scale-110 object-cover transition-transform hover:scale-100"
          />
        </div>
        <div class="flex h-full w-full items-end px-8 lg:w-[50%] lg:px-0">
          <div class="flex h-[60%] flex-col gap-4">
            <h2 class="text-2xl text-white mix-blend-difference lg:text-6xl">
              {{ data.title }}<br />
              {{ data.description }}
            </h2>
            <p class="w-full max-w-[900px] pr-8">
              {{ data.detail }}<br />{{ data.detail2 }}<br /><br />{{
                data.detail3
              }}
            </p>
            <div
              class="mt-4 flex h-[100px] w-full flex-col justify-around sm:flex-row"
            >
              <Tags v-for="tag in data.tags" :tag="tag" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Cards :data="data.imgsLinks" />
  </section>
</template>

<style></style>

<script setup>
import Cards from "./Cards.vue";

const props = defineProps(["data"]);
</script>
