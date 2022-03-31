import React from "react";
import "./style.css";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => (
  <div className="container">
    <div className="poster">
      <div className="rating">
        {rating} /10
      </div>
      <img src={`/assets/${poster}`} alt="Poster" className="image" />
    </div>
    <div className="info">
      <div className="title">{title}</div>
      <span className="info-text">
        <p>
          <b>Rok vydani: </b>
          {year}
        </p>
        <p>
          <b>Zanr: </b>
          {genre}
        </p>
        <p>
          <b>Rezie: </b>
          {director}
        </p>
      </span>
    </div>
    <div className="cast">&nbsp;
    {/* {cast.map(
      character => (
        <Actor name={character.name} as={character.as} />
      )
    )} */}
    </div>
  </div>
);

export default Movie;
