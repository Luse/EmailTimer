import axios from 'axios';

export const userReducer = (state = "Not Signed in", action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return state = action.username;
        case 'UNSET_USER':
        case 'UNVERIFIED_USER':
            return state = "";
        default:
            return state
    }
};

export const logout = () => (
    { type: 'UNSET_USER' }
);

export const register = (username, password) => {
    return function (dispatch) {
        return axios('/api/c/Customer/Register', {
            method: "post",
            withCredentials: true,
            responseType: 'json',
            data: {
                Username: username,
                Password: password
            }
        }).then(
            (result) => dispatch(loginSuccess(result, username))
        )
    }
}

export const login = (username, password) => {
    return function (dispatch) {
        return axios('/api/authentication/login', {
            method: "post",
            withCredentials: true,
            data: {
                Username: username,
                Password: password
            }
        }).then(
            (result) => dispatch(loginSuccess(result, username))
        )
    }
};

export const loginSuccess = (response, username) => ({
    type: "LOGIN_SUCCESS",
    username,
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