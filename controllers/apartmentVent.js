import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const apartmentVent = catchAsyncErrors(async (req, res, next) => {
  const dataDB = await Property.find({ subTypeText: "Apartment" });
  const data = dataDB.filter((ele) => ele.property_type === "RES");

  res.status(200).json({
    success: true,
    data
  });
});

export default apartmentVent;
