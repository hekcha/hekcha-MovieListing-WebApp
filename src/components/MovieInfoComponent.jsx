import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const API_KEY = "ab92e470";

const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 500px) {
    flex-direction: column;
  }

    padding: 10px;
    margin: 8px;
    width: auto;
    height: auto;
    /* border-radius: 5px; */
    /* box-shadow: 3px 3px 5px 2px #aaa; */
    cursor: pointer;
    `
const MovieImg = styled.img`
    background-size: cover;
    background-position: center;
    height: 300px;
    margin: 10px;
`

const MovieName = styled.div`
    font-family: 'Kalam', cursive;
    flex-direction: row;
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
    flex-wrap: wrap ;
    /* max-width: 500px; */
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    font-family: 'Kalam', cursive;


`
const MovieInfo = styled.div`
`


const MovieInfoData = styled.div`
    opacity: 0.7;
`


function MovieInfoComponent() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [title, setTitle] = useState("")

  const getData = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    setData(response.data);
    setTitle(response.data.Title)
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    console.log(data);
    document.title = title;
  }, [data, title])

  const Poster = data.Poster;

  return (
    <MovieContainer >
      {Poster !== "N/A" ? <MovieImg src={Poster} /> : <MovieImg src="https://punjabipollywood.com/wp-content/uploads/2018/12/Not-Available.jpg" />}
      <MovieInfoColumn>
        <MovieName>Title : <MovieInfoData>{data.Title}</MovieInfoData></MovieName>
        <MovieInfo>IMDB Rating : <MovieInfoData>{data.imdbRating}</MovieInfoData> </MovieInfo>
        <MovieInfo>Year : <MovieInfoData>{data.Year}</MovieInfoData> </MovieInfo>
        <MovieInfo>Language : <MovieInfoData>{data.Language}</MovieInfoData> </MovieInfo>
        <MovieInfo>Rated : <MovieInfoData>{data.Rated}</MovieInfoData> </MovieInfo>
        <MovieInfo>Released : <MovieInfoData>{data.Released}</MovieInfoData> </MovieInfo>
        <MovieInfo>Runtime : <MovieInfoData>{data.Runtime}</MovieInfoData> </MovieInfo>
        <MovieInfo>Genre : <MovieInfoData>{data.Genre}</MovieInfoData> </MovieInfo>
        <MovieInfo>Directors : <MovieInfoData>{data.Directors}</MovieInfoData> </MovieInfo>
        <MovieInfo>Actors : <MovieInfoData>{data.Actors}</MovieInfoData> </MovieInfo>
        <MovieInfo >Plot : <MovieInfoData>{data.Plot}</MovieInfoData> </MovieInfo>
      </MovieInfoColumn>

    </MovieContainer >


  )
}

export default MovieInfoComponent