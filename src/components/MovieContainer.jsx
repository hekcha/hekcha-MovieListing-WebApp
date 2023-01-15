import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
// import { favourite } from '../page/favourite';

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 8px;
    width: 280px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 2px #aaa;
    cursor: pointer;
    &:hover {
    scale: 1.05;
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

const toCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Moviecontainer(props) {
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const movieInfo = { Title, Year, imdbID, Type, Poster };
    const [toggle, setToggle] = useState(false);

    const notify = () => {
        console.log(movieInfo);
        setToggle(!toggle);
        props.setFavourites([...props.favourites, movieInfo]);
    }



    return (
        <MovieContainer >

            <Link to={`${imdbID}`}>
                {Poster !== "N/A" ? <MovieImg src={Poster} /> : <MovieImg src="https://punjabipollywood.com/wp-content/uploads/2018/12/Not-Available.jpg" />}
            </Link>
            <MovieName>{Title}</MovieName>
            <MovieInfoColumn>
                <MovieInfo>Year : {Year} </MovieInfo>
                <MovieInfo>Type : {toCapital(Type)} </MovieInfo>
                <FontAwesomeIcon icon={faHeart} size='xs' color={toggle ? "red" : "black"} onClick={notify} />

            </MovieInfoColumn>
        </MovieContainer >

    )
}

export default Moviecontainer;





