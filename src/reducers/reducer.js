import constants from "../constants/index";

const intialState =
  localStorage.getItem("isAuthentication") == null ? false : true;
export default (state = intialState, action) => {
  switch (action.type) {
    case constants.AUTH_SUCCESS:
      return {
        ...state,
        isAuthentication: action.data.isAuthentication,
        message: action.data.message
      };

    case constants.AUTH_FAIL:
      return {
        ...state,
        isAuthentication: action.data.isAuthentication,
        message: action.data.message
      };

    case constants.AUTH_ERROR:
      return {
        ...state,
        error: action
      };

    case constants.TABLE_DATA_SUCCESS:
      return {
        ...state,
        data: action.data
      };

    case constants.TABLE_DATA_ERROR:
      return {
        ...state,
        error: action
      };

    default:
      return {
        isAuthentication: intialState,
        message: "",
        data: []
      };
  }
};
