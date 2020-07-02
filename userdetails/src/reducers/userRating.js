import SET_RATING from '../constants'
const initialState = {
    rating: []
  };
const userRating = (state = initialState, action) => {
    console.log("state",state)
   
    switch (action.type) {
        case SET_RATING:
        console.log();
        return {
            ...state,
            // arr: [...state.arr, action.newItem]
            rating:[...state.rating,action.payload]
            // rating:[action.payload],
          };
        default:
            return state
    }
}

export default userRating