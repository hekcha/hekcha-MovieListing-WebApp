import React, { useState } from 'react'
import Moviecontainer from '../components/MovieContainer';
import styled from 'styled-components';
import Loading from '../assets/homepageloading.gif'
import { useSelector } from 'react-redux';


const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

function FavouriteMovie() {

    const data = useSelector((state) => state.addFavReducer.favMovieData);

    return (
        <MovieList >
            {console.log(data)}
            {
                data?.length
                    ? data.map((movie, index) =>

                        <div key={index} movie={movie} > {console.log(movie.data.Title)}</div>)
                    : < img src={Loading} style={{ margin: "150px" }
                    } />
            }
        </MovieList >
    )
}

export default FavouriteMovie