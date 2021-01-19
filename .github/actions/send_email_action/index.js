require("dotenv").config();
const nodemailer = require("nodemailer");
const core = require("@actions/core");
const email_to_send = core.getInput("email_to_send");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

var mailOptions = {
  from: process.env.EMAIL_USER,
  to: email_to_send,
  subject: "Correo desde la Action personalizada",
  text:
    "Este correo verifica la correcta ejecución de la Action que hemos creado",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    core.setOutput("response", error);
  } else {
    core.setOutput("response", info.response);
  }
});
