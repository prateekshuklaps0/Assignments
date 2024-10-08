import React from "react";
import MovieControls from "./MovieControls";

export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          loading="Loading..."
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
}
