import axios from 'axios';

export const userReducer = (state = {
    authenticated: false,
    username: null,
    error: ""
}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return state = {
                ...state,
                username: action.payload.response,
                authenticated: true,
            };
        case 'LOGOUT_SUCCESS':
            return state = {
                ...state,
                username: "",
                authenticated: false,
            };
        default:
            return state
    }
};

export const register = (username, password) => {
    return function (dispatch) {
        return axios('/api/c/Customer/Register', {
            method: "post",
            withCredentials: true,
            responseType: 'json',
            data: {
                Email: username,
                Password: password
            }
        }).then(
            (result) => dispatch(loginSuccess(result, username))
        )
            .catch(err => err)
    }
}

export const isLoggedIn = () => {
    return function (dispatch) {
        return axios('/api/c/Customer/IsLoggedIn', {
            method: "get",
            withCredentials: true
        }).then(
            (result) => dispatch(loginSuccess(result))
        )
            .catch(err => err)
    }
}

export const login = (username, password) => {
    return function (dispatch) {
        return axios('/api/c/Customer/Login', {
            method: "post",
            withCredentials: true,
            data: {
                Email: username,
                Password: password
            }
        }).then(
            (result) => dispatch(loginSuccess(result, username))
        )
            .catch(err => err)
    }
};

export const logout = () => {
    return function (dispatch) {
        return axios('/api/c/Customer/Logout', {
            method: "post",
            withCredentials: true
        }).then(
            () => dispatch(logoutSuccess())
        )
            .catch(err => err)
    }
};

export const loginSuccess = (response, username) => ({
    type: "LOGIN_SUCCESS",
    username,
    payload: {
        response: response.data
    }
});

export const logoutSuccess = () => ({
    type: "LOGOUT_SUCCESS",
})

export const loginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: {
        error: error
    }
});