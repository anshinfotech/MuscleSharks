import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_REVIEWS_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SORTED_FAIL,
  GET_SORTED_REQUEST,
  GET_SORTED_SUCCESS,
} from "../action/productAction";

const intialState = {
  products: [],
  singleProduct: {},
  reviews: [],
  isLoading: false,
  error: "",
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS: {
      return { ...state, products: action.payload, isLoading: false };
    }
    case FETCH_PRODUCTS_FAILED: {
      return { ...state, error: action.payload, isLoading: true };
    }

    case GET_SINGLE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, singleProduct: action.payload };
    case GET_SINGLE_PRODUCT_FAIL:
      return { ...state, error: action.payload, isLoading: true };

    case GET_SORTED_REQUEST:
      return { ...state, isLoading: true };
    case GET_SORTED_SUCCESS:
      return { ...state, products: action.payload, isLoading: false };
    case GET_SORTED_FAIL:
      return { ...state, isLoading: true };

    case GET_REVIEWS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_REVIEWS_SUCCESS: {
      return {
        ...state,
        reviews: action.payload.data.reviews,
        isLoading: false,
      };
    }
    case GET_REVIEWS_FAIL: {
      return { ...state, isLoading: true };
    }
    default: {
      return state;
    }
  }
};
