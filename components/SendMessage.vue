<template>
  <div
    class="left-[50%] top-[50%] z-10 hidden h-[60%] max-h-[600px] w-[50%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start gap-4 bg-white">
    <div class="flex h-[50%] w-full items-center justify-center bg-[#97c15b] text-white">
      <h2 class="text-3xl uppercase">merci</h2>
    </div>
    <div class="flex h-[50%] w-full flex-col items-center justify-around">
      <p class="text-xl text-[#2d2d2d]">Votre message à bien été envoyé !</p>
      <button ref="btnContinueRef" class="bg-[#97c15b] px-[2rem] py-[1rem] font-bold text-white">
        Continuer
      </button>
    </div>
  </div>
</template>