import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Detail from "./components/Details";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("sherlock"); // Search query state
  const [results, setResults] = useState([]); // Search results state
  const [selected, setSelected] = useState({}); // Selected movie details state

  const API_URL = "https://www.omdbapi.com/?apikey=d9399d1e";

  // Handle search input changes
  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  // Perform search
  const performSearch = () => {
    axios
      .get(`${API_URL}&s=${query}`)
      .then(({ data }) => {
        if (data.Search) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  // Perform search when "Enter" is pressed
  const handleSearch = (e) => {
    if (e.type === "keypress" && e.key === "Enter") {
      performSearch();
    } else if (e.type === "click") {
      performSearch();
    }
  };

  // Fetch and display movie details
  const openDetail = (id) => {
    axios
      .get(`${API_URL}&i=${id}`)
      .then(({ data }) => {
        setSelected(data);
      })
      .catch((err) => console.error("Error fetching details:", err));
  };

  // Close the movie details view
  const closeDetail = () => {
    setSelected({});
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Finder</h1>
      </header>
      <main>
        {/* Search Component */}
        <Search searchInput={handleSearchInput} search={handleSearch} />

        {/* Movie Results */}
        <div className="container">
          {results.length > 0 ? (
            results.map((movie) => (
              <div
                className="item"
                key={movie.imdbID}
                onClick={() => openDetail(movie.imdbID)}
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "200px" }}
                />
                <h3 style={{ color: "white" }}>{movie.Title}</h3>
              </div>
            ))
          ) : (
            <p style={{ color: "white" }}>
              No results found. Try a different search.
            </p>
          )}
        </div>

        {/* Movie Detail Modal */}
        {selected.Title && (
          <Detail selected={selected} closeDetail={closeDetail} />
        )}
      </main>
    </div>
  );
};

export default App;
