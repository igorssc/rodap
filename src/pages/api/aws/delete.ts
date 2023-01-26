import { NextApiRequest, NextApiResponse } from "next";
import { remove } from "../../../storage/remove";

type DataProps = {
  file: {
    key: string;
  };
};

const removeFileAWS = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: DataProps =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  if (data === undefined) {
    throw new Error();
  }

  const { file } = data;

  try {
    await remove(file.key);
    res.status(204).end();
  } catch {
    res.status(500).end();
  }
};

export default removeFileAWS;
