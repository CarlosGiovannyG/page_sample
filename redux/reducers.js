import { combineReducers } from "redux";
import { featuredProperties, houseProperties } from "./propertiesreducers";
const reducer = combineReducers({
  featuredProperties,
  houseProperties,
});

export default reducer;
