import React, { useState } from 'react'
import Moviecontainer from '../components/MovieContainer';
import styled from 'styled-components';
import Loading from '../assets/homepageloading.gif'


const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

function FavouriteMovie(props) {
    console.log(props.favourites);
    const data = props.favourites;
    return (
        <MovieList>
            {
                data?.length
                    ? data.map((movie, index) =>

                        <Moviecontainer key={index} movie={movie} />)
                    : <img src={Loading} style={{ margin: "150px" }} />
            }
        </MovieList>
    )
}

export default FavouriteMovie