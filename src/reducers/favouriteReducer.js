/**
 * favReducer - Reducer for managing the favorites state
 *
 * @param {Object} state - The current state of the store
 * @param {Object} action - The action object that was dispatched
 *
 * @returns {Object} - The new state of the store
 */
const initialData = {
    favMovieData: JSON.parse(localStorage.getItem('key_name')) || []
}

export const favReducer = (state = initialData, action) => {
    switch (action.type) {
        case "favourites/addToFav":
            // extract payload data
            const data = action.payload;
            // check if movie already exists in favMovieData
            const movieExists = state.favMovieData.find(movie => movie.imdbID === data.imdbID);
            if (movieExists) {
                // movie already exists, return state as it is
                return state;
            } else {
                // movie does not exist, add it to favMovieData
                return {
                    ...state,
                    favMovieData: [
                        ...state.favMovieData,
                        {
                            ...data
                        }
                    ],
                }
            }
        case "favourites/removeFromFav":
            // extract payload data
            const removeData = action.payload;
            // check if movie exists in favMovieData
            const findMovie = state.favMovieData.find(movie => movie.imdbID === removeData.imdbID);
            if (findMovie) {
                // movie exists, remove it from favMovieData
                return {
                    ...state,
                    favMovieData: state.favMovieData.filter(movie => movie.imdbID !== removeData.imdbID)
                }
            } else {
                // movie does not exist, return state as it is
                return state;
            }
        default:
            return state;
    }
}
