<template>
  <div class="slider h-full w-full">
    <div class="panel red relative h-full w-full overflow-hidden">
      <video
        class="absolute h-[80vh] max-h-[90vh] w-full max-w-[calc(90vh_*_9/16)]"
        ref="video1"
        controls
        loop
        src="/videos/video1.mp4"
      ></video>
    </div>
    <div class="panel purple relative h-full w-full overflow-hidden">
      <video
        class="absolute h-[80vh] max-h-[90vh] w-full max-w-[calc(90vh_*_9/16)]"
        ref="video2"
        controls
        loop
        src="/videos/video2.mp4"
      ></video>
    </div>
    <div class="panel blue relative h-full w-full overflow-hidden">
      <video
        class="absolute h-[80vh] max-h-[90vh] w-full max-w-[calc(90vh_*_9/16)]"
        ref="video3"
        controls
        loop
        src="/videos/video3.mp4"
      ></video>
    </div>
  </div>
</template>

<style>
.panel video {
  height: calc(90vw * 16 / 9);
}
</style>

<script setup>
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
const video1 = ref();
const video2 = ref();
const video3 = ref();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.set(".panel", {
    zIndex: (i, target, targets) => targets.length - i,
  });
  const videos = ref([video1, video2, video3]);

  videos.value.forEach((video) => {
    window.addEventListener("scroll", () => {
      video.value.pause();
    });
  });

  var images = gsap.utils.toArray(".panel:not(.blue)");

  images.forEach((image, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section.s-about",
        start: () => "top -" + window.innerHeight * (i + 0.5),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });

    tl.to(image, { height: 0 });
  });

  ScrollTrigger.create({
    trigger: "section.s-about",
    scrub: true,
    pin: true,
    start: "5% top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    invalidateOnRefresh: true,
  });
});

onUnmounted(() => {
  const videos = ref([video1, video2, video3]);

  videos.value.forEach((video) => {
    window.removeEventListener("scroll", () => {
      video.value.pause();
    });
  });
});
</script>
