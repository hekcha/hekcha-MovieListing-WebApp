// First we have to tell that what actions we have to perform

export const addFav = (data) => {
    return {
        type: 'favourites/addToFav',
        payload: data,

    }
}

export const removeFav = (data) => {
    return {
        type: 'favourites/removeFromFav',
        payload: data,

    }
}
