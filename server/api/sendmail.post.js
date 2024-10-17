import nodemailer from "nodemailer";
const runtimeConfig = useRuntimeConfig();
const mail = runtimeConfig.username;
const psw = runtimeConfig.password;

const transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 465,
  secure: true,
  auth: { user: mail, pass: psw },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default defineEventHandler(async (event) => {
  const { name, email, subject, text } = await readBody(event);
  const options = {
    from: mail,
    to: mail,
    subject: "[PORTFOLIO-EMAIL] " + subject,
    text: `
    Nom : ${name}
    Email : ${email},
    Message:
    ${text}`,
  };
  await transporter.sendMail(options);
  return { options };
});
