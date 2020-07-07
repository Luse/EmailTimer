import axios from 'axios';

export const mailListReducer = (state = {
    submited: false,
}, action) => {
    switch (action.type) {
        case 'POST_EMAIL_TO_LIST_SUCCESS':
            return state = {
                ...state,
                submited: true
            };
        default:
            return state
    }
};

export const registerForMailList = (email) => {
    return function (dispatch) {
        return axios(`/api/ca/Interest/add/${email}`, {
            method: "post",
        }).then(
            () => dispatch(postMailToListSuccess())
        )
            .catch ((err) => (err))
    }
}

export const postMailToListSuccess = () => ({
    type: "POST_EMAIL_TO_LIST_SUCCESS"
});