import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const featuredProperties = catchAsyncErrors(async (req, res, next) => {
  const data = await Property.find()
    .limit(20)
    .select("json_data")
    .select("name")
    .select("url")
    .select("city")
    .select("postalCode")
    .select("property_yearBuilt")
    .select("property_area")
    .select("subTypeText")
    .select("geo_county");
  res.status(200).json({
    success: true,
    data,
  });
});

export default featuredProperties;
