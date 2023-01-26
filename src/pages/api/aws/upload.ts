import { NextApiRequest, NextApiResponse } from "next";
import { apiRoute } from "../../../services/apiRoute";
import { upload } from "../../../storage/upload";

interface RequestRouter extends NextApiRequest {
  file: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    bucket: string;
    key: string;
    acl: string;
    contentType: string;
    contentDisposition: null;
    contentEncoding: null;
    storageClass: string;
    serverSideEncryption: null;
    metadata: { fieldName: string };
    location: string;
    etag: string;
  };
}

apiRoute.use(upload.single("file"));

apiRoute.post(async (req: RequestRouter, res: NextApiResponse) => {
  res.status(201).json({
    file: {
      key: req.file.key,
      location: req.file.location,
    },
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
