import React, { useState } from 'react'
import styled from 'styled-components';
import Loading from '../assets/homepageloading.gif'
import { useSelector } from 'react-redux';
import FavmovieContainer from '../components/FavmovieContainer';


const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

function FavouriteMovie() {

    const data = useSelector((state) => state.favReducer.favMovieData);

    return (
        <MovieList >
            {console.log(data)}
            {
                data?.length
                    ? data.map((movie, index) =>

                        <FavmovieContainer key={index} movie={movie} />)
                    : < img src={Loading} style={{ margin: "150px" }
                    } />
            }
        </MovieList >
    )
}

export default FavouriteMovie