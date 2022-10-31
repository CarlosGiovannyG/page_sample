import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const houseVent = catchAsyncErrors(async (req, res, next) => {
  const dataOne = await Property.find({ subTypeText: "Condominium" });
  const dataTwo = await Property.find({ subTypeText: "Townhouse" });
  let data = dataOne.concat(dataTwo);
  data = data.filter((ele) => ele.property_type === "RES");

  res.status(200).json({
    success: true,
    data,
  });
});

export default houseVent;
