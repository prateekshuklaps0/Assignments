import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">movieslib</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watchlist</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn">
                Add +
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
