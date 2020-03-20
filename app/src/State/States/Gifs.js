import axios from 'axios';

export const gifsReducer = (state = {
    list: [],
}, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
        case 'POST_TIMER_SUCCESS':
            console.log('action.payload', action.payload)
            return state = {
                ...state,
                list: action.payload.response,
            };
        default:
            return state
    }
};

export const postNewTimer = (targetTime) => {
    return function (dispatch) {
        return axios(`/api/g/New/${targetTime}`, {
            method: "post",
            withCredentials: true
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
            withCredentials: true
        }).then(
            (result) => dispatch(postDeleteSuccess(result))
        )
            .catch(err => err)
    } 
}

export const fetchList = () => {
    return function (dispatch) {
        return axios('/api/g/List', {
            method: "get",
            withCredentials: true
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