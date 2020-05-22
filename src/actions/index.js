import constants from "../constants/index";
import { AuthService, getTableData } from "../services/index";

//get and set Auth
export const setAuth = formData => {
  return dispatch => {
    AuthService(formData)
      .then(data => {
        if (data.isAuthentication) {
          dispatch(success(data));
        } else {
          dispatch(fail(data));
        }
      })
      .catch(e => dispatch(error(e)));
  };
  function success(data) {
    return { type: constants.AUTH_SUCCESS, data };
  }

  function fail(data) {
    return { type: constants.AUTH_FAIL, data };
  }
  function error(e) {
    return { type: constants.AUTH_SUCCESS, e };
  }
};

//get table data

export const tableData = () => {
  return dispatch => {
    getTableData()
    .then(data=>dispatch(success(data)))
    .catch(e => dispatch(error(e)));
  };

  function success(data) {
    return { type: constants.TABLE_DATA_SUCCESS, data };
  }
  function error(e) {
    return { type: constants.TABLE_DATA_ERROR, e };
  }
};
