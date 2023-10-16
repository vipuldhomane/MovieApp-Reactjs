import React, { Component } from "react";
import MovieCard from "./Moviecard";
// import { movies } from "./movieData";

class MovieList extends Component {
  render() {
    const { movies, addStars, decStars, handleFav, handleCart } = this.props;
    // console.log(this.props);
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            handleFav={handleFav}
            handleCart={handleCart}
          />
        ))}
        {/* <MovieCard movies={this.state} /> */}
      </>
    );
  }
}

export default MovieList;
