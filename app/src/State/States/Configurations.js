import axios from "axios";

export const configurationsReducer = (
  state = {
    configuration: {},
    lastUpdated: Date.now(),
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CONFIGURATION_SUCCESS":
      return (state = {
        ...state,
        lastUpdated: Date.now(),
        configuration: action.payload.response,
      });
    default:
      return state;
  }
};

export const postNewConfiguration = (configurationId, configuration) => {
  return function (dispatch) {
    return axios(`/api/cg/configurations/${configurationId}`, {
      method: "post",
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: configuration,
    })
      .then((result) => dispatch(postConfigurationSuccess(result)))
      .catch((err) => err);
  };
};

export const postConfigurationSuccess = (response) => ({
  type: "FETCH_CONFIGURATION_SUCCESS",
  payload: {
    response: response.data,
  },
});
