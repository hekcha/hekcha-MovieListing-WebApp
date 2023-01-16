// reducers are pure function so it says that you initially pass the state
const initialData = {
    favMovieData: []
}


const addFavReducer = (state = initialData, action) => {
    switch (action.type) {
        case "favourites/addToFav":
            const data = action.payload

            return {
                ...state,
                data: [
                ...state.favMovieData,
                    {
                        data
                    }
                ],
                favMovieData : [
                ...state.favMovieData,
                    {
                        data
                    }
                ],
            }
        default:
            return state;

    }
}
export default addFavReducer;