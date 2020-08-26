import {createSelector} from 'reselect';

function selectUser(state) {
    return state.user;
}

export var selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export var selectCurrentUserNumber = createSelector(
    [selectUser],
    (user) => user.userNumber
)