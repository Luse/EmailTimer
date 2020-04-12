export const configurationReducer = (state = {
    configuration: {},
}, action) => {
    switch (action.type) {
        case 'FETCH_CONFIGURATION_SUCCESS':
            return state = {
                ...state,
                configuration: action.payload.response,
            };
        default:
            return state
    }
};


export const postNewConfiguration = (campaignId, configuration) => {
    return function (dispatch) {
        return axios(`/api/cg/New/${campaignId}`, {
            method: "post",
            withCredentials: true,
            headers: {
                Authorization: "Bearer " +localStorage.getItem('token')
            },
        }).then(
            (result) => dispatch(postConfigurationSuccess(result))
        )
            .catch(err => err)
    }
}

export const postConfigurationSuccess = (response) => ({
    type: "FETCH_CONFIGURATION_SUCCESS",
    payload: {
        response: response.data
    }
});
