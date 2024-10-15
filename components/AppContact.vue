<template>
  <div
    class="left-[50%] top-[50%] z-10 hidden h-[60%] max-h-[600px] w-[50%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start gap-4 bg-white"
    ref="thank"
  >
    <div
      class="flex h-[50%] w-full items-center justify-center bg-[#97c15b] text-white"
    >
      <h2 class="text-3xl uppercase">merci</h2>
    </div>
    <div class="flex h-[50%] w-full flex-col items-center justify-around">
      <p class="text-xl text-[#2d2d2d]">Votre message à bien été envoyé !</p>
      <button
        ref="continueBtn"
        class="bg-[#97c15b] px-[2rem] py-[1rem] font-bold text-white"
      >
        Continuer
      </button>
    </div>
  </div>
  <section
    id="contact"
    class="flex w-full flex-col items-center justify-center gap-4 pt-8"
  >
    <div
      class="contact_container flex h-screen w-full flex-col items-center justify-center gap-4 p-8 lg:w-[35%] lg:p-0"
    >
      <h1 class="text-3xl font-bold">Contact</h1>
      <form
        ref="form"
        class="contact_form flex w-full flex-col gap-8"
        action="#"
      >
        <div class="contact_form_detail">
          <input
            type="text"
            placeholder="Nom"
            id="name"
            required
            autocomplete="off"
            ref="name"
          />
        </div>

        <input
          type="email"
          placeholder="Votre email"
          id="email"
          autocomplete="off"
          required
          ref="email"
        />
        <input
          type="text"
          placeholder="Objet"
          id="subject"
          autocomplete="off"
          required
          ref="subject"
        />
        <textarea
          placeholder="Contenu"
          id="message"
          required
          ref="message"
        ></textarea>

        <Button title="Envoyer" />
      </form>
    </div>
  </section>
</template>

<style>
.contact_container .contact_form input {
  outline: none;
  padding: 1rem 2rem;
  border: 1px solid #2d2d2d;
  letter-spacing: 2px;
  color: #2d2d2d;
  font-weight: 500;
}
.contact_container .contact_form textarea {
  outline: none;
  padding: 2rem;
  width: 100%;
  height: 150px;
  min-height: 150px;
  max-height: 400px;
  font-family: "Epilogue", sans-serif;
  border: 1px solid #2d2d2d;
  color: #2d2d2d;
  font-weight: 500;
  letter-spacing: 2px;
  max-width: 100%;
  min-width: 100%;
}
.contact_container .contact_form .contact_form_detail input {
  width: 100%;
  padding: 1rem 2rem;
}
</style>

<script setup>
import Email from "~/assets/smtp/smtp";

const form = ref();
const name = ref();
const email = ref();
const subject = ref();
const message = ref();
const thank = ref();
const continueBtn = ref();

function formSubmit(e) {
  e.preventDefault();

  sendEmail();
}

function hideMessage() {
  thank.value.classList.add("hidden");
  thank.value.style.position = "fixed";
  thank.value.style.display = "none";
}

function sendEmail() {
  const body = `[PORTFOLIO-EMAIL] Name : ${name.value.value} <br>Email : ${email.value.value} <br>Sujet : ${subject.value.value} <br>Message : ${message.value.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yulianguinand365@gmail.com",
    Password: "D0502270E8F25604C116DD5D972ACA365BB4",
    To: "yulianguinand365@gmail.com",
    From: "yulianguinand365@gmail.com",
    Subject: "Portfolio-Email",
    Body: body,
  }).then((message) => {
    if (message === "OK") {
      thank.value.classList.remove("hidden");
      thank.value.style.position = "fixed";
      thank.value.style.display = "flex";
    } else {
      console.log(message);
    }
  });
}

onMounted(() => {
  form.value.addEventListener("submit", (e) => {
    formSubmit(e);
  });

  continueBtn.value.addEventListener("click", () => hideMessage());
});

onUnmounted(() => {
  form.value.removeEventListener("submit", () => {
    formSubmit();
  });
  continueBtn.value.removeEventListener("click", () => hideMessage());
});
</script>
