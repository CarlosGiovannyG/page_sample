import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const houseRent = catchAsyncErrors(async (req, res, next) => {
  const dataOne = await Property.find({ subTypeText: "Condominium" });
  const dataTwo = await Property.find({ subTypeText: "Townhouse" });
  let data = dataOne.concat(dataTwo);
  data = data.filter((ele) => ele.property_type === "RNT");

  res.status(200).json({
    success: true,
    data,
  });
});

export default houseRent;
