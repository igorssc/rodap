import multer from "multer";
import multerS3 from "multer-s3";
import { s3Client } from "../config/aws";

const oneMegabyteInBytes = 1048576;
const outputFolderName = "./tmp";

export const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_BUCKET_NAME || "",
    key: function (req, file, cb) {
      cb(null, "tmp/" + Date.now().toString());
    },
    acl: "public-read",
  }),
  fileFilter: (req, file, cb) => {
    const acceptFile: boolean = ["application/pdf"].includes(file.mimetype);
    cb(null, acceptFile);
  },
  dest: outputFolderName,
  limits: { fileSize: oneMegabyteInBytes * 2 },
});
