import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const housePrueba = catchAsyncErrors(async (req, res, next) => {
  const dataOne = await Property.find({ subTypeText: "Condominium" }).limit(5)
  const dataTwo = await Property.find({ subTypeText: "Townhouse" }).limit(5)
  const data = dataOne.concat(dataTwo);

  res.status(200).json({
    success: true,
    data,
  });
});

export default housePrueba;
