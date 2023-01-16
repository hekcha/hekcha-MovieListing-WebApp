import './App.css';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
import Homepage from "./page/Homepage"
import FavouriteMovie from "./page/FavouriteMovie"
import MovieInfoComponent from "./components/MovieInfoComponent"
import { useState, useEffect } from 'react';


function App() {

    // const [favourites, setFavourites] = useState(() => {
    //     const storedFavourites = localStorage.getItem('favourite');
    //     return storedFavourites ? JSON.parse(storedFavourites) : [];
    // });//change this to set

    //   useEffect(() => {
    //       localStorage.setItem('favourite', JSON.stringify(favourites));
    // }, [favourites]);


    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/:id" element={<MovieInfoComponent/>} />
                    <Route path="/favourite" element={<FavouriteMovie  />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
