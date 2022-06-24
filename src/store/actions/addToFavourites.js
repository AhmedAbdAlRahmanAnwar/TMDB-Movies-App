export const ADD_FAVOURITES = "ADD_FAVOURITES"
export const addToFavourites = (payload) => {
  return {
      type: ADD_FAVOURITES,
      payload,
  }
}