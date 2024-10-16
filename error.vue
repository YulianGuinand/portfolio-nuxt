<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

import Lenis from "lenis";

onMounted(() => {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>
  <NuxtLayout>
    <main
      class="mb-[400px] flex h-screen w-full flex-col items-center justify-center gap-8"
    >
      <h1 class="text-4xl">
        Erreur :
        <span class="uppercase">
          {{
            error?.statusCode === 404 ? "quatre-cent-quatre" : error?.statusCode
          }}
        </span>
      </h1>
      <p>{{ error?.statusMessage }}</p>
      <NuxtLink
        to="/"
        class="w-fit cursor-pointer border-none bg-[#2d2d2d] px-8 py-4 text-sm font-semibold text-white outline-none transition-colors hover:bg-[#414040]"
        >HOME</NuxtLink
      >
    </main>
  </NuxtLayout>
</template>
