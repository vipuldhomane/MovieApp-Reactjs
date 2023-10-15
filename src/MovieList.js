import React, { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    //we have to call the super class
    this.state = {
      movies: [
        {
          title: "Avengers: Endgame",
          plot: `After the devastating events of Avengers: Infinity War (2018), the
      universe is in ruins. With the help of remaining allies, the
      Avengers assemble once more in order to reverse Thanoss's actions
      and restore balance to the universe.`,
          price: 299,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        },
        {
          title: "Jawan",
          plot: `A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.`,

          price: 299,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BOWI5NmU3NTUtOTZiMS00YzA1LThlYTktNDJjYTU5NDFiMDUxXkEyXkFqcGdeQXVyMTUzNjEwNjM2._V1_.jpg",
        },
        {
          title: "Loki",
          plot: `The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”`,
          price: 299,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTY0YTgwZjUtYzJiNy00ZDQ2LWFlZmItZThhMjExMjI5YWQ2XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
        },
      ],
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);
    // increase the starts of movie
    if (movies[movieIndex].stars >= 5) {
      return;
    }
    movies[movieIndex].stars += 0.5;
    // update the state
    this.setState({
      movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);
    // increase the starts of movie
    if (movies[movieIndex].stars <= 0) {
      return;
    }
    movies[movieIndex].stars -= 0.5;
    // update the state
    this.setState({
      movies: movies,
    });
  };
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);
    movies[movieIndex].fav = !movies[movieIndex].fav;

    // update the state
    this.setState({
      movies: movies,
    });
  };
  handleToggleCart = (movie) => {
    const { movies } = this.state;
    const movieIndex = movies.indexOf(movie);
    movies[movieIndex].cart = !movies[movieIndex].cart;

    // update the state
    this.setState({
      movies: movies,
    });
  };
  render() {
    // const { title, plot, price, rating, stars, fav, cart } = this.state.movies;
    // By passing this.state directly all the properties will be sent to the props
    const { movies } = this.state;

    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movies={movie}
            addStars={this.handleIncStar}
            decStars={this.handleDecStar}
            handleFav={this.handleToggleFav}
            handleCart={this.handleToggleCart}
          />
        ))}
        {/* <MovieCard movies={this.state} /> */}
      </>
    );
  }
}

export default MovieList;
