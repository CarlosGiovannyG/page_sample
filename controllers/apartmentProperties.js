import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const apartmentProperties = catchAsyncErrors(async (req, res, next) => {
  const data = await Property.find({ subTypeText: "Apartment" })
 
  res.status(200).json({
    success: true,
    data,
  });
});

export default apartmentProperties;
