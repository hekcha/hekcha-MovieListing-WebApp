/**
 * addFav - Action creator for adding an item to favorites
 *
 * @param {Object} data - The data of the item to add to favorites
 *
 * @returns {Object} - Action object with type 'favourites/addToFav' and payload 'data'
 */
export const addFav = (data) => {
    return {
        type: 'favourites/addToFav',
        payload: data
    }
}


export const removeFav = (data) => {
    return {
        type: 'favourites/removeFromFav',
        payload: data
    }
}
