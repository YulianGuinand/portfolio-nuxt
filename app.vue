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

useSeoMeta({
  ogImage: "/img/profile.jpg",
  twitterImage: "/img/profile.jpg",
});
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>
