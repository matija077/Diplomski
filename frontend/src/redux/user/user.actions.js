import {userActionTypes} from './user.types';

export function setCurrentUser(user, userNumber) {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: {
            user: user,
            userNumber: userNumber
        }
    };
}