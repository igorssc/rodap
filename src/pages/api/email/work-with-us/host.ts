import fs from "fs";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import nodemailer from "nodemailer";
import { especialCharMask } from "../../../../utils/mask";

type DataProps = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  unit: string;
  file: File;
};

export type SuccessfulResponse<T> = {
  data: T;
  error?: never;
  statusCode?: number;
};
export type UnsuccessfulResponse<E> = {
  data?: never;
  error: E;
  statusCode?: number;
};

export type ApiResponse<T, E = unknown> =
  | SuccessfulResponse<T>
  | UnsuccessfulResponse<E>;

interface NextConnectApiRequest extends NextApiRequest {
  files: Express.Multer.File[];
}

type ResponseData = ApiResponse<string[], string>;

interface RequestRouter extends NextApiRequest {
  file: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  };
}

const oneMegabyteInBytes = 1048576;
const outputFolderName = "./tmp";

const upload = multer({
  limits: { fileSize: oneMegabyteInBytes * 2 },
  storage: multer.diskStorage({
    destination: outputFolderName,
    filename: (req, file, cb) => cb(null, `${new Date().getTime()}`),
  }),
  fileFilter: (req, file, cb) => {
    const acceptFile: boolean = ["application/pdf"].includes(file.mimetype);
    cb(null, acceptFile);
  },
});

const apiRoute = nextConnect({
  onError(
    error,
    req: NextConnectApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("file"));

apiRoute.post(async (req: RequestRouter, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOSTMAIL,
    port: 587,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
  });

  const data: DataProps =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  if (data === undefined) {
    throw new Error();
  }

  if (
    !("name" in data && "email" in data && "category" in data && "unit" in data)
  ) {
    throw new Error();
  }

  const { name, phone, email, category, unit } = data;

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
          content: fs.readFileSync(req.file.path),
        },
      ],
    });

  await sendEmail()
    .then(async (response) => {
      res.send(response);
    })
    .catch((error) => res.send(error))
    .finally(() => {
      fs.unlink(req.file.path, function (err) {
        if (err) throw err;
        console.log("Arquivo deletado!");
      });
    });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
