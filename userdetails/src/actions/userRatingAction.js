import SET_RATING from '../constants'
export function setRating(account, rating) {
  console.log("payload", account, rating)
  return {
    type: SET_RATING,
    payload: {
      account,
      rating
    },
  };
}