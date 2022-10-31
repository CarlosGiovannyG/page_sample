import { catchAsyncErrors } from "../middleware";
import { Property } from "../models";

const queryId = catchAsyncErrors(async (req, res, next) => {
  const data = await Property.find({ url: req.query.url });

  res.status(200).json({
    success: true,
    data,
  });
});

export default queryId;
