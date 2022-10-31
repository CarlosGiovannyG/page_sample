import { combineReducers } from "redux";
import {
  featuredProperties,
  houseProperties,
  apartmentProperties,
  apartmentPropertiesRent,
  apartmentPropertiesVent,
  housePropertiesRent,
  housePropertiesVent,
  apartmentNews,
  apartmentUsed,
  houseNews,
  houseUsed,
} from "./propertiesreducers";
const reducer = combineReducers({
  featuredProperties,
  houseProperties,
  apartmentProperties,
  apartmentPropertiesRent,
  apartmentPropertiesVent,
  housePropertiesRent,
  housePropertiesVent,
  apartmentNews,
  apartmentUsed,
  houseNews,
  houseUsed,
});

export default reducer;
