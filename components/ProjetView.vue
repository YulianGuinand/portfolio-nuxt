<template>
  <section
    id="projet_section"
    class="mt-[200px] flex flex-col gap-8 lg:mt-[100px]"
  >
    <div class="relative flex h-screen w-full flex-col gap-8">
      <div class="flex h-full flex-col gap-4 bg-cover lg:flex-row">
        <div
          class="ml-4 h-[calc(100%-300px)] w-[90%] rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
          :style="{ backgroundImage: image }"
        ></div>
        <div
          class="flex w-full items-end rounded-lg bg-white shadow-lg md:absolute md:bottom-[6rem] md:right-[4rem] md:w-3/4 lg:bottom-[8rem] lg:w-1/2 lg:px-0"
        >
          <div class="flex h-full flex-col gap-4 p-8 md:h-[60%]">
            <h2 class="text-2xl text-[#2d2d2d] lg:text-4xl">
              {{ data.title }}<br />
              {{ data.description ? data.description : null }}
            </h2>
            <p
              v-html="data.detail"
              class="w-full max-w-[900px] pr-8 text-sm lg:text-lg"
            ></p>
            <div
              class="mt-4 flex h-fit w-full flex-col justify-around sm:flex-row"
            >
              <Tags v-for="tag in data.tags" :tag="tag" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Cards v-if="data.imgsLinks" :data="data.imgsLinks" />
  </section>
</template>

<style></style>

<script setup>
import Cards from "./Cards.vue";

const props = defineProps(["data"]);
const image = ref("url(" + props.data.imagePreview + ")");
</script>
