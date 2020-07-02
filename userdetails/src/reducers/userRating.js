import SET_RATING from '../constants'
const initialState = {
    rating: []
};
const userRating = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATING:
            return {
                ...state,
                rating: [...state.rating, action.payload]
            };
        default:
            return state
    }
}

export default userRating