<script setup>
import Lenis from "lenis";

onMounted(() => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>
  <div>
    <NuxtLayout/>
  </div>
</template>
