import {
  CLEAR_ERRORS,
  GET_APARTMENTS_NEWS,
  GET_APARTMENTS_NEWS_FAIL,
  GET_APARTMENTS_NEWS_REQUEST,
  GET_APARTMENTS_PROPERTIES,
  GET_APARTMENTS_PROPERTIES_FAIL,
  GET_APARTMENTS_PROPERTIES_REQUEST,
  GET_APARTMENTS_RENT,
  GET_APARTMENTS_RENT_FAIL,
  GET_APARTMENTS_RENT_REQUEST,
  GET_APARTMENTS_USED,
  GET_APARTMENTS_USED_FAIL,
  GET_APARTMENTS_USED_REQUEST,
  GET_APARTMENTS_VENT,
  GET_APARTMENTS_VENT_FAIL,
  GET_APARTMENTS_VENT_REQUEST,
  GET_FEATURED_PROPERTIES,
  GET_FEATURED_PROPERTIES_FAIL,
  GET_FEATURED_PROPERTIES_REQUEST,
  GET_HOUSE_NEWS,
  GET_HOUSE_NEWS_FAIL,
  GET_HOUSE_NEWS_REQUEST,
  GET_HOUSE_PROPERTIES,
  GET_HOUSE_PROPERTIES_FAIL,
  GET_HOUSE_PROPERTIES_REQUEST,
  GET_HOUSE_RENT,
  GET_HOUSE_RENT_FAIL,
  GET_HOUSE_RENT_REQUEST,
  GET_HOUSE_USED,
  GET_HOUSE_USED_FAIL,
  GET_HOUSE_USED_REQUEST,
  GET_HOUSE_VENT,
  GET_HOUSE_VENT_FAIL,
  GET_HOUSE_VENT_REQUEST,
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
export const apartmentProperties = (state = {}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_PROPERTIES_REQUEST:
      return {
        loading: true,
      };

    case GET_APARTMENTS_PROPERTIES:
      return {
        success: action.payload.success,
        data: action.payload.data,
      };

    case GET_APARTMENTS_PROPERTIES_FAIL:
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
export const apartmentPropertiesRent = (state = {}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_RENT_REQUEST:
      return {
        loading: true,
      };

    case GET_APARTMENTS_RENT:
      return {
        data: action.payload.data,
      };

    case GET_APARTMENTS_RENT_FAIL:
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
export const apartmentPropertiesVent = (state = {}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_VENT_REQUEST:
      return {
        loading: true,
      };

    case GET_APARTMENTS_VENT:
      return {
        data: action.payload.data,
      };

    case GET_APARTMENTS_VENT_FAIL:
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
export const apartmentNews = (state = {}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_NEWS_REQUEST:
      return {
        loading: true,
      };

    case GET_APARTMENTS_NEWS:
      return {
        data: action.payload.data,
      };

    case GET_APARTMENTS_NEWS_FAIL:
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
export const apartmentUsed = (state = {}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_USED_REQUEST:
      return {
        loading: true,
      };

    case GET_APARTMENTS_USED:
      return {
        data: action.payload.data,
      };

    case GET_APARTMENTS_USED_FAIL:
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
export const houseNews = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUSE_NEWS_REQUEST:
      return {
        loading: true,
      };

    case GET_HOUSE_NEWS:
      return {
        data: action.payload.data,
      };

    case GET_HOUSE_NEWS_FAIL:
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
export const houseUsed = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUSE_USED_REQUEST:
      return {
        loading: true,
      };

    case GET_HOUSE_USED:
      return {
        data: action.payload.data,
      };

    case GET_HOUSE_USED_FAIL:
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
export const housePropertiesVent = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUSE_VENT_REQUEST:
      return {
        loading: true,
      };

    case GET_HOUSE_VENT:
      return {
        data: action.payload.data,
      };

    case GET_HOUSE_VENT_FAIL:
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

export const housePropertiesRent = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUSE_RENT_REQUEST:
      return {
        loading: true,
      };

    case GET_HOUSE_RENT:
      return {
        data: action.payload.data,
      };

    case GET_HOUSE_RENT_FAIL:
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
