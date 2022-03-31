import React from "react";
import Movie from "../Movie";
import "./style.css";

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <Movie
        key={movie.id}
        poster={movie.poster}
        title={movie.title}
        year={movie.year}
        genre={movie.genre}
        director={movie.director}
        cast={movie.cast}
      />
    ))}
  </div>
);

export default MovieList;
