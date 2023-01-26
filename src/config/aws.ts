import { S3, S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3({
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  },
  region: "sa-east-1",
});

export const s3Client = new S3Client({
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
  },
  region: "sa-east-1",
});
