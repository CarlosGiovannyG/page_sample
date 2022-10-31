import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  GET_FEATURED_PROPERTIES,
  GET_FEATURED_PROPERTIES_FAIL,
  GET_HOUSE_PROPERTIES,
  GET_HOUSE_PROPERTIES_FAIL,
} from "./constants";

export const featuredProperties = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/featuredProperties`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_FEATURED_PROPERTIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_FEATURED_PROPERTIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const houseProperties = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/casas`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_HOUSE_PROPERTIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOUSE_PROPERTIES_FAIL,
      payload: error.response.data.message,
    });
  }
};
