const initialState = {
    friend: [],
}

const FriendReducer = (state = initialState, action) => {

    console.log("FriendReducer", state, action);

    switch (action.type) {
        case "ADD_FRIEND":

            return {
                ...state,
            }

        default:
            return state;
    }

};

export default FriendReducer;