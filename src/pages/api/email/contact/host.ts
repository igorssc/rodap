import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../../../services/transporter";

type DataProps = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  message: string;
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
      "message" in data
    ) ||
    data.message.length < 5
  ) {
    throw new Error();
  }

  const emailBody = ` 
    <div
      style="
        padding: 20px;
        background: #83060E;
        color: #fff;
        line-height: 2rem
      "
    >
      <h1 style="margin-bottom: 20px; font-size: 1.8rem">Formulário Web</h1>
      <p>
        <strong>Nome: </strong>${data.name}
        <br />
        <strong>E-mail: </strong>${data.email}
        ${
          data.phone
            ? `<br />
        <strong>Telefone: </strong>${data.phone}`
            : ""
        }
        <br />
        <strong>Assunto: </strong>${data.category}
      </p>
    </div>
    <p style="padding: 20px; line-height: 2rem">${data.message.replaceAll(
      "\n",
      "<br/>"
    )}</p>
    <div
      style="
        padding: 20px;
        background: #83060E;
        color: #fff;
        text-align: center;
      "
    >
      <a href="https://www.rodap.com.br" target="_blank" style="text-decoration: none; color: #fff">
      <strong>RODAP</strong> - www.rodap.com.br
      </a>
    </div>
    `;

  const sendEmail = async () =>
    await transporter.sendMail({
      from: `Formulário Web <${process.env.USERMAIL}>`,
      to: process.env.USERMAIL,
      replyTo: data.email,
      subject: data.category,
      text: data.message,
      html: emailBody,
    });

  await sendEmail()
    .then(async (response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
};

export default sendEmailClient;
