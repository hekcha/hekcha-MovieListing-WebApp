import './App.css';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
import Homepage from "./page/Homepage"
import FavouriteMovie from "./page/FavouriteMovie"
import MovieInfoComponent from "./components/MovieInfoComponent"


function App() {

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
