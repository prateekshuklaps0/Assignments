import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ResultCard({
  addMovieToWatchlist,
  addMovieToWatched,
  movie,
  title,
  id,
  poster_path,
  release_date,
}) {
  const { watchlist, watched } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === id);
  let storedMovieWatched = watched.find((o) => o.id === id);

  const watchlistDisabled = storedMovie || storedMovieWatched ? true : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card" style={{ margin: "3rem" }}>
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`${title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{title}</h3>
          <h4 className="release-date">
            {release_date ? release_date.substring(0, 4) : "----"}
          </h4>
        </div>

        <div className="controls">
          <button
            disabled={watchlistDisabled}
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            disabled={watchedDisabled}
            className="btn"
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}
