import React from 'react'
import styled from 'styled-components';

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 8px;
    width: 280px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 2px #aaa;
    cursor: pointer;
    `
const MovieImg = styled.img`
    background-size: cover;
    background-position: center;
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
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    return (
        <MovieContainer>
            {console.log(props.movie)}
            <MovieImg src={Poster} />
            <MovieName>{Title}</MovieName>
            <MovieInfoColumn>
                <MovieInfo>Year : {Year} </MovieInfo>
                <MovieInfo>Type : {Type} </MovieInfo>
            </MovieInfoColumn>

        </MovieContainer>
    )
}

export default Moviecontainer;





