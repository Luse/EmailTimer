import axios from 'axios';

export const gifsReducer = (state = {
    list: [],
}, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
        case 'POST_TIMER_SUCCESS':
            return state = {
                ...state,
                list: action.payload.response,
            };
        default:
            return state
    }
};

export const postNewTimer = (campaignId, targetTime) => {
    return function (dispatch) {
        return axios(`/api/g/${campaignId}/New/${targetTime}`, {
            method: "post",
            withCredentials: true,
            headers: {
                Authorization: "Bearer " +localStorage.getItem('token')
            },
        }).then(
            (result) => dispatch(postTimerSuccess(result))
        )
            .catch(err => err)
    }
}

export const deleteTimer = (id) => {
    return function (dispatch) {
        return axios(`/api/g/Delete/${id}`, {
            method: "post",
            withCredentials: true,
            headers: {
                Authorization: "Bearer " +localStorage.getItem('token')
            },
        }).then(
            (result) => dispatch(postDeleteSuccess(result))
        )
            .catch(err => err)
    } 
}

export const fetchList = (campaignId) => {
    return function (dispatch) {
        return axios(`/api/g/List/${campaignId}`, {
            method: "get",
            withCredentials: true,
            headers: {
                Authorization: "Bearer " +localStorage.getItem('token')
            },
        }).then(
            (result) => dispatch(fetchListSuccess(result))
        )
            .catch(err => err)
    }
}

export const fetchListSuccess = (response) => ({
    type: "FETCH_LIST_SUCCESS",
    payload: {
        response: response.data
    }
});

export const postTimerSuccess = (response) => ({
    type: "POST_TIMER_SUCCESS",
    payload: {
        response: response.data
    }
});

export const postDeleteSuccess = (response) => ({
    type: "POST_LIST_SUCCESS",
    payload: {
        response: response.data
    }
});

export const postNewTimerSuccess = (response) => ({
    type: "POST_NEW_TIMER_SUCCESS",
    payload: {
        response: response.data
    }
});