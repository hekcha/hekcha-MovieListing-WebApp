/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Loading from '../assets/homepageloading.gif'
import { useSelector } from 'react-redux';
import FavmovieContainer from '../components/FavmovieContainer';
import Moviecontainer from '../components/MovieContainer';


const MovieList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 520px) {
        margin: auto;
    font-size: 25px;
  }

`

const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* flex-wrap: wrap; */
`
const MovieHeading = styled.div`
    display: inline-flex;
    flex-direction: row;
    margin: 2rem auto;
    width: 100%;
    font-weight: 600;
    font-size: 3vw;
    font-family: 'Pacifico', cursive;
    justify-content: center;
    text-shadow: magenta 1px 0 10px;
    color: white;
    @media(max-width: 800px) {
        /* width: 50%; */
        font-size: 27px;
    }

`

function FavouriteMovie() {
    // Use the useSelector hook from the react-redux library to access the favMovieData from the store
    const data = useSelector((state) => state.favReducer.favMovieData);

    return (
        <MovieList >
            <MovieHeading>Your Favourite Movies❤️</MovieHeading>
            <MovieContainer>
                {/* {console.log(data)} */}
                {
                    data?.length
                        ? data.map((movie, index) =>
                            // render FavmovieContainer component for each movie in favMovieData array
                            <FavmovieContainer key={index} movie={movie} />)
                        : < img src={Loading} style={{ margin: "150px" }} />
                }
            </MovieContainer>
        </MovieList >
    )
}

export default FavouriteMovie
