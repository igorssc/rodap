import multer from "multer";

const oneMegabyteInBytes = 1048576;
const outputFolderName = "./tmp";

export const upload = multer({
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
