// reducers are pure function so it says that you initially pass the state
const initialData = {
    favMovieData: JSON.parse(localStorage.getItem('key_name')) || []
}


export const favReducer = (state = initialData, action) => {
    switch (action.type) {
        case "favourites/addToFav":
            const data = action.payload;

            // check if movie already exists
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
            const removeData = action.payload;

            // check if movie already exists
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