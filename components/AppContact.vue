<template>
  <Submit :show="isSubmit" :message="submitMessage" :onClick="hideMessage" />
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

        <Button ref="sendBtn" title="Envoyer" />
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
const form = ref();
const name = ref();
const email = ref();
const subject = ref();
const message = ref();
const isSubmit = ref(false);
const submitMessage = ref("");

const sendBtn = ref();

function formSubmit(e) {
  e.preventDefault();
  sendBtn.value.$el.disabled = true;
  sendEmail();
}

function sendEmail() {
  const body = {
    name: name.value.value,
    email: email.value.value,
    subject: subject.value.value,
    text: message.value.value,
  };
  fetch("/api/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      switch (data.statut) {
        case 200:
          submitMessage.value = "success";
          name.value.value = "";
          email.value.value = "";
          subject.value.value = "";
          message.value.value = "";
          break;
        case 400:
          console.log("error : ", data.message);
          submitMessage.value = "error";
          name.value.value = "";
          email.value.value = "";
          subject.value.value = "";
          message.value.value = "";
          break;
      }
      isSubmit.value = true;
      sendBtn.value.$el.disabled = true;
      setTimeout(() => {
        sendBtn.value.$el.disabled = false;
      }, 3000);
    });
}

const hideMessage = () => {
  isSubmit.value = false;
};

onMounted(() => {
  form.value.addEventListener("submit", (e) => {
    formSubmit(e);
  });
});

onBeforeUnmount(() => {
  form.value.removeEventListener("submit", () => {
    formSubmit();
  });
});
</script>
