import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { apartmentRent } from "../../../controllers";
import { onError } from "../../../middleware";

const handler = nc({ onError });
dbConnect();

handler.get(apartmentRent);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

export default handler;
