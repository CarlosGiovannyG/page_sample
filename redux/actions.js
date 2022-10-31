import axios from "axios";
import absoluteUrl from "next-absolute-url";
import { FaRegFontAwesomeLogoFull } from "react-icons/fa";
import {
  GET_APARTMENTS_NEWS,
  GET_APARTMENTS_NEWS_FAIL,
  GET_APARTMENTS_PROPERTIES,
  GET_APARTMENTS_PROPERTIES_FAIL,
  GET_APARTMENTS_RENT,
  GET_APARTMENTS_RENT_FAIL,
  GET_APARTMENTS_USED,
  GET_APARTMENTS_USED_FAIL,
  GET_APARTMENTS_VENT,
  GET_APARTMENTS_VENT_FAIL,
  GET_FEATURED_PROPERTIES,
  GET_FEATURED_PROPERTIES_FAIL,
  GET_HOUSE_NEWS,
  GET_HOUSE_NEWS_FAIL,
  GET_HOUSE_PROPERTIES,
  GET_HOUSE_PROPERTIES_FAIL,
  GET_HOUSE_RENT,
  GET_HOUSE_RENT_FAIL,
  GET_HOUSE_USED,
  GET_HOUSE_USED_FAIL,
  GET_HOUSE_VENT,
  GET_HOUSE_VENT_FAIL,
  GET_PROPERTY_DETAIL,
  GET_PROPERTY_DETAIL_FAIL,
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
export const apartmentProperties = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/apartamentos`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_APARTMENTS_PROPERTIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APARTMENTS_PROPERTIES_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const apartmentPropertiesRent = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/apartamentos/apartmentRent`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_APARTMENTS_RENT,
      payload: data,
    });
  } catch (error) {
    console.log({ error });
    dispatch({
      type: GET_APARTMENTS_RENT_FAIL,
      payload: error,
    });
  }
};
export const apartmentPropertiesVent = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/apartamentos/apartmentVent`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_APARTMENTS_VENT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APARTMENTS_VENT_FAIL,
      payload: error,
    });
  }
};
export const houseNews = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/casas/houseNews`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_HOUSE_NEWS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOUSE_NEWS_FAIL,
      payload: error,
    });
  }
};
export const houseUsed = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/casas/houseUsed`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_HOUSE_USED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOUSE_USED_FAIL,
      payload: error,
    });
  }
};
export const apartmentNews = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/apartamentos/apartmentNews`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_APARTMENTS_NEWS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APARTMENTS_NEWS_FAIL,
      payload: error,
    });
  }
};
export const apartmentUsed = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/apartamentos/apartmentUsed`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_APARTMENTS_USED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APARTMENTS_USED_FAIL,
      payload: error,
    });
  }
};
export const housePropertiesVent = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/casas/houseVent`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_HOUSE_VENT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOUSE_VENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const housePropertiesRent = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/casas/houseRent`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_HOUSE_RENT,
      payload: data,
    });
  } catch (error) {
    console.log({error});
    dispatch({
      type: GET_HOUSE_RENT_FAIL,
      payload: error,
    });
  }
};
export const propertyDetail = (req,url) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    let link = `${origin}/api/${url}`;
    const { data } = await axios.get(link);
  
    dispatch({
      type: GET_PROPERTY_DETAIL,
      payload: data,
    });
  } catch (error) {
    console.log({error});
    dispatch({
      type: GET_PROPERTY_DETAIL_FAIL,
      payload: error,
    });
  }
};
