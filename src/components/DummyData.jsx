import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const DummyContainer = styled.div`
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
const DummyImg = styled.img`
    background-size: cover;
    background-position: center;
    width: 280px;
    height: 300px;
`

const DummyName = styled.div`
    font-family: 'Kalam', cursive;
    font-weight: 900;
    font-size: 18px;
    margin: 10px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    justify-content: flex-start;
`
const DummyInfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Kalam', cursive;


`

const DummyInfo = styled.div`

`

// data for adding to the dummy component
const data = [
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers Assemble",
        "Year": "2012–2019",
        "imdbID": "tt2455546",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
    },
    {
        "Title": "Shiddat",
        "Year": "2021",
        "imdbID": "tt11314148",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2U2NzcyYWQtYWRkNi00NWE2LWFlN2UtMjY0MzJkMWQzZDI2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
    },
    {
        "Title": "Ae Dil Hai Mushkil",
        "Year": "2016",
        "imdbID": "tt4559006",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTc3ODMwMWItMjI0NC00YmM1LWIxZmItZDk2NjQ1NzQ1ZTVmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        "Title": "A Silent Voice: The Movie",
        "Year": "2016",
        "imdbID": "tt5323662",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Dil Bechara",
        "Year": "2020",
        "imdbID": "tt8110330",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjdlZmMzNzAtYmFkNy00YTkxLTlmYjUtM2E5OGUzNWZlYTllXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
    },
    {
        "Title": "Jujutsu Kaisen",
        "Year": "2020–",
        "imdbID": "tt12343534",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg"
    },

]



function DummyData() {
    // function to capitalize first letter of a string
    const toCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Main>
            {
                data.map((movie, index) =>
                    <DummyContainer key={index}>
                        {/* {console.log(movie.Title)} */}
                        <Link >
                            {/* Check if the movie poster is available, if not use a placeholder image */}
                            {movie.Poster !== "N/A" ? <DummyImg src={movie.Poster} /> : <DummyImg src="https://punjabipollywood.com/wp-content/uploads/2018/12/Not-Available.jpg" />}
                        </Link>
                        <DummyName>{movie.Title}</DummyName>
                        <DummyInfoColumn>
                            <DummyInfo>Year : {movie.Year} </DummyInfo>
                            <DummyInfo>Type : {toCapital(movie.Type)} </DummyInfo>
                        </DummyInfoColumn>
                    </DummyContainer >
                )
            }
        </Main>

    )
}

export default DummyData;
