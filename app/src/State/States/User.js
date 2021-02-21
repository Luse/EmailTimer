import axios from 'axios';

export const userReducer = (state = {
    authenticated: false,
    authenticating: false,
    username: null,
    error: ""
}, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return state = {
                ...state,
                error: "",
                authenticating: true
            }
        case 'LOGIN_VERIFY':
            return state = {
                ...state,
                username: action.payload.response,
                authenticating: false
            }
        case 'LOGIN_SUCCESS':
            return state = {
                ...state,
                authenticated: true,
                authenticating: false,
                error: ""
            };
        case 'LOGIN_FAILURE':
            return state = {
                ...state,
                error: action.payload.error?.response?.data?.detail,
                authenticating: false,
                authenticated: false
            }
        case 'LOGOUT_SUCCESS':
            return state = {
                ...state,
                username: "",
                authenticated: false,
                authenticating: false
            };
        case 'REGISTER_SUCCESS':
            return state = {
                ...state,
                authenticated: true,
                authenticating: false,
            };
        case 'REGISTER_FAILURE':
            return state = {
                ...state,
                error: action.payload.error?.response?.data?.detail
            };
        default:
            return state
    }
};

const saveTokenToStorage = token => (
    localStorage.setItem('token', token)
)

export const register = (username, password) => {
    return function (dispatch) {
        return axios('/api/c/Customer/Register', {
            method: "post",
            responseType: 'json',
            data: {
                Email: username,
                Password: password
            }
        })
            .then((res) => saveTokenToStorage(res.data.token))
            .then(() => dispatch(registerSuccess()))
            .catch((err) => dispatch(registerFailure(err)))
    }
}

export const isLoggedIn = () => {
    return function (dispatch) {
        dispatch(loginPending())
        return axios('/api/c/Customer/IsLoggedIn', {
            method: "get",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            },
            withCredentials: true
        })
            .then(
                (result) => dispatch(loginVerify(result))
            )
            .catch(err => dispatch(loginFailure(err)))
    }
}

export const login = (username, password) => {
    return function (dispatch) {
        dispatch(loginPending())
        return axios('/api/c/Customer/Login', {
            method: "post",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            },
            data: {
                Email: username,
                Password: password
            }
        })
            .then((res) => saveTokenToStorage(res.data.token))
            .then(
                () => dispatch(loginSuccess(username))
            )
            .catch(err => dispatch(loginFailure(err)))
    }
};

export const logout = () => {
    return function () {
        localStorage.removeItem('token')
    }
};

export const loginPending = () => ({
    type: "LOGIN_PENDING",
});

export const loginSuccess = (username) => ({
    type: "LOGIN_SUCCESS",
    username
});

export const loginVerify = (response) => ({
    type: "LOGIN_VERIFY",
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
export const registerSuccess = (error) => ({
    type: "REGISTER_SUCCESS",
});

export const registerFailure = (error) => ({
    type: "REGISTER_FAILURE",
    payload: {
        error: error
    }
});