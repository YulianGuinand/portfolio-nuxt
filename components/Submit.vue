<template>
  <div
    v-if="show"
    class="fixed left-[50%] top-[50%] z-10 block h-[60%] max-h-[600px] w-[50%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start gap-4 bg-white shadow-lg"
    ref="submitContainer"
  >
    <div
      v-if="message == 'success'"
      class="flex h-[50%] w-full items-center justify-center bg-[#97c15b] text-white"
    >
      <h2 class="text-3xl uppercase">merci</h2>
    </div>

    <div
      v-else
      class="flex h-[50%] w-full items-center justify-center bg-red-400 text-white"
    >
      <h2 class="text-center uppercase md:text-3xl">
        Il y a quelque chose qui cloche...
      </h2>
    </div>

    <div
      v-if="message == 'success'"
      class="flex h-[50%] w-full flex-col items-center justify-around"
    >
      <p class="text-xl text-[#2d2d2d]">Votre message a bien été envoyé !</p>
      <button
        @click="onClick"
        class="bg-[#97c15b] px-[2rem] py-[1rem] font-bold text-white"
      >
        Continuer
      </button>
    </div>

    <div
      v-else
      class="flex h-[50%] w-full flex-col items-center justify-around"
    >
      <p class="text-xl text-[#2d2d2d]">Votre message n'a pas été envoyé ! !</p>
      <button
        @click="onClick"
        class="bg-red-400 px-[2rem] py-[1rem] font-bold text-white"
      >
        Continuer
      </button>
    </div>
  </div>
</template>

<style></style>

<script setup>
const props = defineProps(["show", "message"]);
const event = defineEmits(["onClick"]);

const submitContainer = ref();
</script>
