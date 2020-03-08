import axios from 'axios';

export const gifsReducer = (state = {
    list: [],
}, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
            return state = {
                ...state,
                list: action.payload.response,
            };
        default:
            return state
    }
};

export const fetchList = () => {
    return function (dispatch) {
        return axios('/api/c/Customer/List', {
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

export const loginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: {
        error: error
    }
});