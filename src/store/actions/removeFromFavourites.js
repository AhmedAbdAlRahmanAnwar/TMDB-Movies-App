export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES"
export const removeFromFavourites = (payload) => {
  return {
      type: REMOVE_FAVOURITES,
      payload,
  }
}