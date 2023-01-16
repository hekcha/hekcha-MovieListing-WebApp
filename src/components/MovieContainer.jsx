import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { addFav } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';


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
    border: 2px 4px 10px solid green;
        box-shadow: 0 0 2px 3px #48abe0;
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



function Moviecontainer(props) {
    const dispatch = useDispatch();

    const { Title, Year, imdbID, Type, Poster } = props.movie;
    const movieInfo = { Title, Year, imdbID, Type, Poster };
    const [toggleState, setToggleState] = useState(false);

    const data = useSelector((state) => state.favReducer.favMovieData);

    const toCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // useEffect(() => {
    //     console.log(data);
    //     localStorage.setItem('data', localStorage.getItem('data') + JSON.stringify(data));
    // }, [data])

    const notify = () => {
        // dispatch call the action and then action go to reducer(HOW TO WORK?)
        setToggleState(!toggleState);
        console.log(movieInfo);
        dispatch(addFav(movieInfo));
        // const arr = JSON.parse(localStorage.getItem('key_name')) || [];
        // arr.push(...data);
        // console.log(arr);

        // alert("Added to favourite")
    }

    useEffect(() => {
        localStorage.setItem('key_name', JSON.stringify(data));
    }, [data])





    return (
        <MovieContainer >
            {/* {console.log(movieInfo)} */}
            <Link to={`${imdbID}`}>
                {Poster !== "N/A" ? <MovieImg src={Poster} /> : <MovieImg src="https://punjabipollywood.com/wp-content/uploads/2018/12/Not-Available.jpg" />}
            </Link>
            <MovieName>{Title}</MovieName>
            <MovieInfoColumn>
                <MovieInfo>Year : {Year} </MovieInfo>
                <MovieInfo>Type : {toCapital(Type)} </MovieInfo>
                <FontAwesomeIcon icon={faHeart} size='sm' color={toggleState ? "red" : "black"} onClick={notify} />

            </MovieInfoColumn>
        </MovieContainer >

    )
}

export default Moviecontainer;





