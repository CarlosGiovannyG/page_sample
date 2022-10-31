import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const featuredProperties = catchAsyncErrors(async (req, res, next) => {
  const data = await Property.find().limit(10).select("json_data").select("name")
  res.status(200).json({
    success: true,
    data,
  });
});

export default featuredProperties;
