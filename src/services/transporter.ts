import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
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
