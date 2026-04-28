import nodemailer from "nodemailer";

export const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    authMethod: "login",
    secure: false,
    requireTLS: true,
    tls: {
      ciphers: "SSLv3",
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Your Login Code",
    html: `
      <h2>Seu codigo de login é: <strong>${otp}</strong></h2>
      <p>Esse código expira em 10 min. Não compartilhe!</p>
    `,
  });

};
