import { s3 } from "../config/aws";

export const remove = async (key: string) => {
  try {
    await s3.deleteObject({
      Bucket: process.env.AWS_BUCKET,
      Key: key,
    });
  } catch (err) {
    throw err;
  }

  return true;
};
