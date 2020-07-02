import SET_RATING from '../constants'

// export const setRating = (payload) => ({
//     type: SET_RATING,
//     payload
// })

export function setRating(account,rating) {  
    console.log("payload",account,rating)
    return {
      type: SET_RATING,
      payload: {
        account,
        rating
      },
    };
  }