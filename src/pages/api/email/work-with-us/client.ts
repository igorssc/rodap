import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../../../services/transporter";
import { especialCharMask } from "../../../../utils/mask";

type DataProps = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  unit: string;
  file: {
    location: string;
  };
};

const sendEmailClient = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: DataProps =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  if (data === undefined) {
    throw new Error();
  }

  if (
    !(
      "name" in data &&
      "email" in data &&
      "category" in data &&
      "unit" in data &&
      "file" in data
    )
  ) {
    throw new Error();
  }

  const { name, phone, email, category, unit, file } = data;

  const emailBody = ` 
  <p style="padding: 20px 0; line-height: 2rem">
  Olá <strong>${name.split(" ")[0]}${
    name.split(" ")[1] && " " + name.split(" ")[1]
  }</strong>, recebemos sua mensagem, agradecemos o interesse em fazer parte do nosso time! Pedimos que aguarde até que nossa equipe possa analisar os dados e entre em contato
  </p>
  <div
    style="
      padding: 20px;
      background: #83060E;
      color: #fff;
      line-height: 2rem
    "
  >
    <p>
    <strong>Nome: </strong>${name}
      <br />
      <strong>E-mail: </strong>${email}
      ${
        phone
          ? `<br />
      <strong>Telefone: </strong>${phone}`
          : ""
      }
      <br />
      <strong>Unidade: </strong>${unit}
      <br />
      <strong>Categoria: </strong>${category}
    </p>
  </div>
  <div
    style="
      padding: 20px 0;
      text-align: center;
      text-decoration: none;
    "
  >
    <a href="https://www.rodap.com.br" target="_blank" style="text-decoration: none; color: inherit">
    <strong>RODAP</strong> - www.rodap.com.br
    </a>
  </div>
    `;

  const sendEmail = async () =>
    await transporter.sendMail({
      from: `Formulário Web <${process.env.USERMAIL}>`,
      to: email,
      replyTo: process.env.USERMAIL,
      subject: `Confirmação de envio de currículo`,
      text: "Olá, recebemos sua mensagem, agradecemos o interesse em fazer parte do nosso time! Pedimos que aguarde até que nossa equipe possa analisar os dados e entre em contato",
      html: emailBody,
      attachments: [
        {
          filename: `curriculo-${especialCharMask(name.toLowerCase())}.pdf`,
          path: file.location,
        },
      ],
    });

  await sendEmail()
    .then(async (response) => {
      res.send(response);
    })
    .catch((error) => res.send(error))
    .finally(() => {});
};

export default sendEmailClient;
