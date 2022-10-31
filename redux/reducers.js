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
  propertyDetail
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
  propertyDetail
});

export default reducer;
