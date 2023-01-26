import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

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

export const apiRoute = nextConnect({
  onError(
    error,
    req: NextConnectApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    console.log(error);

    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
