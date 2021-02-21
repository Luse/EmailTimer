import axios from "axios";

export const campaignsReducer = (
  state = {
    list: [],
    lastUpdated: Date.now(),
    fetching: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CAMPAIGNS_PENDING":
      return (state = {
        ...state,
        fetching: true,
      });
    case "FETCH_CAMPAIGNS_SUCCESS":
      return (state = {
        ...state,
        lastUpdated: Date.now(),
        list: action.payload.response,
        fetching: false,
      });
    case "FETCH_CAMPAIGNS_FAILURE":
      return (state = {
        ...state,
        fetching: false,
      });
    case "POST_CAMPAIGN_SUCCESS":
      return (state = {
        ...state,
        list: action.payload.response,
        fetching: false,
      });
    default:
      return state;
  }
};

export const fetchCampaigns = () => {
  return function (dispatch) {
    dispatch(pendingFetchingCampaigns());
    return axios("/api/ca/campaigns/All", {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    })
      .then((result) => dispatch(fetchCampaignSuccess(result)))
      .catch((err) => dispatch(err));
  };
};
export const postNewCampaign = (campaignName) => {
  return function (dispatch) {
    return axios(`/api/ca/campaigns/New/${campaignName}`, {
      method: "post",
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((result) => dispatch(postCampaignSuccess(result)))
      .then(dispatch(fetchCampaigns()))
      .catch((err) => err);
  };
};

export const pendingFetchingCampaigns = () => ({
  type: "FETCH_CAMPAIGNS_PENDING",
});

export const fetchCampaignSuccess = (response) => ({
  type: "FETCH_CAMPAIGNS_SUCCESS",
  payload: {
    response: response.data,
  },
});

export const fetchCampaignFailure = (error) => ({
  type: "FETCH_CAMPAIGNS_FAILURE",
  error: error,
});

export const postCampaignSuccess = (response) => ({
  type: "POST_CAMPAIGN_SUCCESS",
  payload: {
    response: response.data,
  },
});
