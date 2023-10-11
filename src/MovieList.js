import React, { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  state = {};
  render() {
    return (
      <>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </>
    );
  }
}

export default MovieList;
