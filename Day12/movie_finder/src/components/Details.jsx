// Filename - components/Detail.js

import React from "react";

const Detail = ({ selected, closeDetail }) => {
  return (
    <section className="detail">
      <div className="content">
        <h2>{selected.Title}</h2>
        <span>{selected.Year}</span>
        <p className="rating">Rating: {selected.imdbRating}</p>

        <div className="about">
          <img src={selected.Poster} alt={`${selected.Title} Poster`} />
          <p>{selected.Plot}</p>
        </div>

        <button className="close" onClick={closeDetail}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Detail;
