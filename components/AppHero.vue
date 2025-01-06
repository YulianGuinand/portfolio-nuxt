<template>
  <section id="home" class="flex w-full items-center justify-around bg-white">
    <div
      class="flex h-full w-full max-w-[1920px] flex-col-reverse items-center justify-around px-4 pt-32 sm:px-0 lg:h-screen lg:flex-row lg:pt-0"
    >
      <div class="flex h-[600px] w-full max-w-[400px] flex-col gap-8 pt-[4rem]">
        <h3 class="text-[25px] font-normal">Etudiant | Alternant</h3>
        <h1 class="text-[45px] font-bold leading-none sm:text-[90px]">
          Yulian <br />Guinand
        </h1>
        <p class="leading-6">
          Je m'appelle Yulian Guinand, j'ai 19 ans, et je suis actuellement
          étudiant en BTS Services Informatiques aux Organisations (SIO) en
          alternance à Pasteur Mont Roland. Passionné par le développement web.
        </p>

        <Button title="Contact" link="#contact" />
      </div>
      <div
        class="h-[600px] w-full overflow-hidden rounded-t-[15rem] bg-red-50 sm:w-[400px]"
      >
        <img
          class="h-full w-full object-cover transition-all duration-[250ms] ease-in hover:scale-110"
          src="/img/profile.jpg"
          alt="image of profile"
        />
      </div>
    </div>
  </section>
</template>
