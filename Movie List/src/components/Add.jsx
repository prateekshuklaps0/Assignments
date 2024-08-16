import React, { useContext, useState } from "react";
import ResultCard from "./ResultCard";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";

const API_KEY = "d0e92860093cd5a9194874ea46dbab97";
// const API_KEY = "8265bd1679663a7ea12ac168da84d2e8";

export default function Add() {
  const { addMovieToWatchlist, addMovieToWatched } = useContext(GlobalContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const addRes = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      );
      setResults(addRes?.data?.results || []);
      setLoading(false);
      // console.log("Fetch Add Response :", addRes?.data);
    } catch (error) {
      console.log("Fetch Add Error :", error);
      setLoading(false);
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper" style={{ display: "flex" }}>
            <span
              className="btn"
              style={{
                marginRight: "-5px",
                cursor: "default",
              }}
              onClick={handleSearch}
            >
              Search
            </span>
            <input
              type="text"
              className="input-box"
              value={query}
              onChange={changeHandler}
            />
          </div>

          {loading && (
            <ul>
              <li>Loading...</li>
            </ul>
          )}

          {!loading && results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard
                    addMovieToWatchlist={addMovieToWatchlist}
                    addMovieToWatched={addMovieToWatched}
                    {...movie}
                    movie={movie}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
