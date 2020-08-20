import {userActionTypes} from './user.types';

var initialState = {
    currentUser: null,
};

function userReducer(currentState = initialState, action) {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER: {
            return {
                ...currentState,
                currentUser: action.payload
            };
        }
        default: {
            return currentState;
        }
    }
}

export default userReducer;