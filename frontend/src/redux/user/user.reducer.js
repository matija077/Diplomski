import {userActionTypes} from './user.types';

var initialState = {
    currentUser: null,
    userNumber: null,
};

function userReducer(currentState = initialState, action) {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER: {
            console.log(action.payload);
            return {
                ...currentState,
                currentUser: action.payload.user ,
                userNumber: action.payload.userNumber
            };
        }
        default: {
            return currentState;
        }
    }
}

export default userReducer;