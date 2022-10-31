import {
 CLEAR_ERRORS,
  GET_FEATURED_PROPERTIES,
  GET_FEATURED_PROPERTIES_FAIL,
  GET_FEATURED_PROPERTIES_REQUEST,
  GET_HOUSE_PROPERTIES,
  GET_HOUSE_PROPERTIES_FAIL,
  GET_HOUSE_PROPERTIES_REQUEST,
} from "./constants";

export const featuredProperties = (state = {}, action) => {
  switch (action.type) {
    case GET_FEATURED_PROPERTIES_REQUEST:
      return {
        loading: true,
      };

    case GET_FEATURED_PROPERTIES:
      return {
        success: action.payload.success,
        data: action.payload.data,
      };

    case GET_FEATURED_PROPERTIES_FAIL:
     return {
      error: action.payload,
    };
    case CLEAR_ERRORS:
     return {
       ...state,
       error: null,
     };
    default:
      return state;
  }
};

export const houseProperties = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUSE_PROPERTIES_REQUEST:
      return {
        loading: true,
      };

    case GET_HOUSE_PROPERTIES:
      return {
        success: action.payload.success,
        data: action.payload.data,
      };

    case GET_HOUSE_PROPERTIES_FAIL:
     return {
      error: action.payload,
    };
    case CLEAR_ERRORS:
     return {
       ...state,
       error: null,
     };
    default:
      return state;
  }
};
