import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeFav } from '../actions/index';
import { useEffect } from 'react';

const FavMovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 8px;
    width: 280px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 2px #aaa;
    cursor: pointer;
    &:hover{
        border: 2px 4px 10px solid green;
        box-shadow:0 0 2px 3px #e197be;
    }

    `
const MovieImg = styled.img`
    background-size: cover;
    background-position: center;
    width: 280px;
    height: 300px;
`

const MovieName = styled.div`
    font-family: 'Kalam', cursive;
    font-weight: 900;
    font-size: 18px;
    margin: 10px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    justify-content: flex-start;
`
const MovieInfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Kalam', cursive;


`

const MovieInfo = styled.div`

`

const Button = styled.div`
    justify-content: center;
    display: flex;
    font-family: 'Kalam', cursive;
    border: solid 1px;
    margin: 5px;
    font-weight: 600;
    background-color: #2d7eff;
    border-radius: 10px;
    color: black;

    &:hover {
    scale: 1.05;
    background-color: #1b1a1a;
    color: white;
  }

`



function FavmovieContainer(props) {
    const dispatch = useDispatch();

    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const stateData = useSelector((state) => state.favReducer.favMovieData);

    // Function to capitalize the first letter of a string
    const toCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function to remove movie from favourite list
    const removeFavourite = (data) => {
        // Dispatch the removeFav action to update the redux store
        dispatch(removeFav(data));

        // Clear local storage if there are no more favourite movies
        var arr = [];
        if (stateData.length == 1) {
            localStorage.clear();
        }
    }

    // Keep localstorage updated with the current favourite movie data
    useEffect(() => {
        localStorage.setItem('key_name', JSON.stringify(stateData));
    }, [stateData])

    const movieInfo = props.movie;

    return (
        <FavMovieContainer >
            {/* {console.log(props.movie)} */}
            {Poster !== "N/A" ? <MovieImg src={Poster} /> : <MovieImg src="https://punjabipollywood.com/wp-content/uploads/2018/12/Not-Available.jpg" />}
            <MovieName>{Title}</MovieName>
            <MovieInfoColumn>
                <MovieInfo>Year : {Year} </MovieInfo>
                <MovieInfo>Type : {toCapital(Type)} </MovieInfo>
            </MovieInfoColumn>
            <Button onClick={() => removeFavourite(movieInfo)}>Remove From Favourite</Button>
        </FavMovieContainer >

    )
}

export default FavmovieContainer;





