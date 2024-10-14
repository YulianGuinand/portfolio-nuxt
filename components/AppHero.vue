<template>
  <section id="home" class="w-full flex items-center justify-around bg-white">
    <div
      class="h-full lg:h-screen w-full max-w-[1920px] flex flex-col-reverse lg:flex-row items-center justify-around pt-32 lg:pt-0"
    >
      <div class="w-full max-w-[400px] h-[600px] pt-[4rem] flex gap-8 flex-col">
        <h3 class="text-[25px] font-normal">Etudiant | Alternant</h3>
        <h1 class="text-[90px] font-bold leading-none">Yulian <br />Guinand</h1>
        <p class="leading-6">
          Je m'appelle Yulian Guinand, j'ai 19 ans, et je suis actuellement
          étudiant en BTS Services Informatiques aux Organisations (SIO) en
          alternance à Pasteur Mont Roland. Passionné par le développement web.
        </p>

        <a
          class="w-fit bg-[#2d2d2d] text-white font-semibold outline-none border-none py-4 px-8 transition-colors cursor-pointer text-sm hover:bg-[#414040]"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div
        class="w-[400px] h-[600px] overflow-hidden rounded-t-[15rem] bg-red-50"
      >
        <img
          class="w-full h-full object-cover transition-all hover:scale-110"
          src="/img/profile.jpg"
          alt="profileImage"
        />
      </div>
    </div>
  </section>
</template>
