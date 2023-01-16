import styled from 'styled-components';
import icon from "../assets/nav-icon-unscreen.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Moviecontainer from '../components/MovieContainer'
import axios from 'axios';
import Loading from '../assets/homepageloading.gif'
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const AppName = styled.div``

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    background-color: #292929;
    color:  white;
    font-family: 'Kalam', cursive;
    font-weight: bolder;
    box-shadow: 0 3px 6px 0 #555;
    font-size: 28px;
    @media (max-width: 520px) {
    font-size: 14px;
  }
`

const NavIcon = styled.img`
    width: 50px;
    height: auto;
    margin-top: -20px;
    top: 6px;
    position: relative;

`;

const NavSearch = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    background-color: white;
    width: 40%;
    margin-left: 20px;
    border-radius: 6px;
    align-items: center;
    border-radius: 50px;
    box-shadow: ${props => props.focus ? "0 0 6px 3px #48abe0" : "none"};
`

const SearchInput = styled.input`
    font-size: 16px;
    margin-left: 15px;
    width: 100%;
    border: none;
    outline: none;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    @media (max-width: 520px) {
    font-size: 12px;
  }
`

const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const FavouriteBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
    text-decoration: none !important;
    font-size: 20px;
    font-family: 'Kalam', cursive;
    color: black;
    /* border: 1px solid; */
`

const FavouriteTag = styled.div`
    padding: 12px;
    gap: 10px;
    border-radius: 35px;
    letter-spacing: 1px;
    background-color: #2d7eff;
    color: black;
    &:hover{
        scale: 1.02;
        background-color: aquamarine;
        color: black;
        background-color: whitesmoke;
        border: 5px solid #2d7eff;
    }
    @media (max-width: 520px) {
    font-size: 12px;
    padding: 7px;
  }
`



function Homepage(props) {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [focus, setFocus] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [timeout, setTimeOut] = useState("");
    const [searchData, setSearchData] = useState([]);
    const favourites = props.favourites;
    const setFavourites = props.setFavourites;
    // console.log(API_KEY);

    const fetchData = async (searchString) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${[searchString]}&apikey=${API_KEY} `);
            setSearchData(response.data.Search);
        } catch (error) {
            alert(error.message);
        }


    }

    const onTextChange = (event) => {
        clearTimeout(timeout);
        setSearchQuery(event.target.value);
        const time = setTimeout(() => {
            fetchData(event.target.value);
        }, 500);
        setTimeOut(time);
    }
    // we are not using html here we are using jsx here because we can't use js in html

    return (
        <Container Container >
            <Navbar>
                <AppName>
                    <NavIcon src={icon} />
                    React Movie App
                </AppName>
                <NavSearch focus={focus} onFocus={() => { setFocus(true) }} onBlur={() => { setFocus(false) }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xs' color='black' width="20px" height="20px" />
                    <SearchInput placeholder='Search Movie' value={searchQuery} onChange={onTextChange} active />
                </NavSearch>
            </Navbar>
            <FavouriteBox ><FavouriteTag><Link to="/favourite" style={{ textDecoration: "none", color: "black" }}>Favourite</Link><FontAwesomeIcon icon={faHeart} size='xs' color='black' width="20px" height="20px" /></FavouriteTag></FavouriteBox>
            <MovieList>
                {
                    searchData?.length
                        ? searchData.map((movie, index) =>

                            <Moviecontainer key={index} movie={movie} favourites={favourites} setFavourites={setFavourites} />)
                        : <img src={Loading} style={{ margin: "120px" }} />
                }
            </MovieList>
        </Container >
    );
}

export default Homepage
