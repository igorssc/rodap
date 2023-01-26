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

const sendEmailHost = async (req: NextApiRequest, res: NextApiResponse) => {
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
    <div
      style="
        padding: 20px;
        line-height: 2rem
      "
    >
      <h1 style="margin-bottom: 20px; font-size: 1.8rem">Formulário Web</h1>
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
      replyTo: email,
      subject: "Envio de currículo",
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

export default sendEmailHost;
