import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';
import MoviesList from './Components/MoviesList';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import { useState } from 'react';
import React from 'react';
import { AppContext } from './Store/store';

function App() {
  const [films, setFilms] = useState('');

  const [movies, setMovies] = useState([
    {
      name: 'Avenger',
      price: 10,
      occupied: [20, 21, 30, 1, 2, 8],
      img: '/Images/Avengers.jpg',
    },
    {
      name: 'Spider Man',
      price: 12,
      occupied: [9, 41, 35, 11, 65, 26],
      img: '/Images/SpiderMan.jpg',
    },
    {
      name: 'Toy story',
      price: 8,
      occupied: [37, 25, 44, 13, 2, 3],
      img: '/Images/ToyStory.jpg',
    },
    {
      name: 'the lion king',
      price: 9,
      occupied: [10, 12, 50, 33, 28, 47],
      img: '/Images/LionKing.jpg',
    },
  ]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

  function setOccupied(movieIndex, occupiedList) {
    movies[movieIndex].occupied = occupiedList;

    setMovies([...movies]);
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          movies: movies,
          selectedMovieIndex: selectedMovieIndex,
          setSelectedMovieIndex: setSelectedMovieIndex,
          setOccupied,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MoviesList films={films} setFilms={setFilms} />}
            />
            <Route
              path="/booking"
              element={<Movie films={films} setFilms={setFilms} />}
            />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
