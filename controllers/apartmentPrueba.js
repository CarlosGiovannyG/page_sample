import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const apartmentPrueba = catchAsyncErrors(async (req, res, next) => {
  const dataDB = await Property.find({ subTypeText: "Apartment" }).limit(10);
  const data = dataDB.filter((ele) => ele.property_type === "RNT");

  res.status(200).json({
    success: true,
    data
  });
});

export default apartmentPrueba;
