import axios from 'axios';

export const campaignsReducer = (state = {
    list: [],
    fetching: false
}, action) => {
    switch (action.type) {
        case 'FETCH_CAMPAIGNS_PENDING':
            return state = {
                ...state, fetching: true
            }
        case 'FETCH_CAMPAIGNS_SUCCESS':
            return state = {
                ...state,
                list: action.payload.response,
                fetching: false
            };
        case 'FETCH_CAMPAIGNS_FAILURE': 
            return state = {
                ...state, fetching: false
            }
        default:
            return state
    }
};

export const fetchCampaigns = () => {
    return function (dispatch) {
        dispatch(pendingFetchingCampaigns())
        return axios('/api/ca/campaigns', {
            method: "get",
            headers: {
                Authorization: "Bearer " +localStorage.getItem('token')
            },
            withCredentials: true
        }).then(
            (result) => dispatch(fetchCampaignSuccess(result))
        )
            .catch(err => dispatch(err))
    }
}

export const pendingFetchingCampaigns = () => ({
    type: "FETCH_CAMPAIGNS_PENDING"
});


export const fetchCampaignSuccess = (response) => ({
    type: "FETCH_CAMPAIGNS_SUCCESS",
    payload: {
        response: response.data
    }
});

export const fetchCampaignFailure = (error) => ({
    type: "FETCH_CAMPAIGNS_FAILURE",
    error: error
});