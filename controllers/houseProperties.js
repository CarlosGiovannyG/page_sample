import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const houseProperties = catchAsyncErrors(async (req, res, next) => {
  const dataOne = await Property.find({ subTypeText: "Condominium" });
  const dataTwo = await Property.find({ subTypeText: "Townhouse" });
  const data = dataOne.concat(dataTwo);

  res.status(200).json({
    success: true,
    data,
  });
});

export default houseProperties;
