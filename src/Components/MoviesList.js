import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../Store/store";

const MoviesList = (props) => {
  const {movies, setSelectedMovieIndex} = useContext(AppContext);

  const handleSelect = (index) => {
    setSelectedMovieIndex(index);
  };

  return (
    <div>
      <div style={{margin: "10px", fontSize: "50px"}}>
        Pick the Movie From the Lists....
      </div>
      <div style={{margin: "10px", fontSize: "50px"}}>
        and Book your Tickets Now !!
      </div>
      <Link to="/booking">
        <div>
          {movies.map((movie, index) => {
            return (
              <button
                className="moviesListButton"
                onClick={() => handleSelect(index)}
              >
                <img
                  src={movie.img}
                  alt={`${movie.name} movie card`}
                  className="moviesList"
                ></img>
              </button>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default MoviesList;
