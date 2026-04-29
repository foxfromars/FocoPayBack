import nodemailer from "nodemailer";

export async function sendBillCreationEmailNotification( billId, billData, userEmail ) {
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
    to: "johhanes@hotmail.com",
    subject: `Novo Título ${billId}`,
    html: `
      <p>Olá,<p>
      <p>O título número ${billId}, referente ao ${billData?.documentIdentificationId} ${billData?.documentNumber}, foi cadastrado pelo usuário de Email ${userEmail}.<p>
      <p>Att,<p>
      <p><strong>FocoPay</strong><p>
    `,
  });
}
