import './Styles.css';
import React, { useContext, useState } from 'react';
import ShowCase from './MoviesSeats/ShowCase';
import Cinema from './MoviesSeats/Cinema';
import { AppContext } from '../Store/store';

const Movie = (props) => {
  const { films, setFilms } = props;

  const { movies, selectedMovieIndex, setSelectedMovieIndex } =
    useContext(AppContext);

  const [selectedSeats, setSelectedSeats] = useState([]);

  // const seats = Array.from({ length: 8 * 8 }, (_, i) => i)
  const totalTicketPrice =
    selectedSeats.length * movies[selectedMovieIndex].price;

  const selectedMovie = movies[selectedMovieIndex];

  return (
    <div>
      {/* <Movies
         movie={selectedMovie}
         movies={movies}
         onChange={movie => {
           setSelectedSeats([])
           setSelectedMovie(movie)
         }}
       /> */}
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of
        <span className="total">$ {totalTicketPrice}</span>
      </p>
    </div>
  );
};

export default Movie;
