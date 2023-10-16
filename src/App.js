import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./movieData";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <MovieList />
//     </>
//   );
// }
class App extends Component {
  constructor() {
    super();
    //we have to call the super class
    this.state = {
      movies: movies,
      cartCount: 0,
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
    let { movies, cartCount } = this.state;
    const movieIndex = movies.indexOf(movie);
    movies[movieIndex].cart = !movies[movieIndex].cart;

    if (movies[movieIndex].cart) {
      cartCount++;
    } else if (cartCount > 0) {
      cartCount--;
    }
    // update the state
    this.setState({
      movies: movies,
      cartCount,
    });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          decStars={this.handleDecStar}
          handleFav={this.handleToggleFav}
          handleCart={this.handleToggleCart}
        />
      </>
    );
  }
}

export default App;
