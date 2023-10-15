import { Component } from "react";

class MovieCard extends Component {
  // use of arrow function can avoid the use of implicit binding of this
  addStars = () => {
    // this.state.stars += 0.5;
    // making use of useState function
    // form1
    // this.setState({ stars: this.state.stars + 0.5 });
    if (this.state.stars >= 5) {
      return;
    }
    this.setState((previousState) => {
      return {
        stars: previousState.stars + 0.5,
      };
    });
    // console.log(`this :`, this.state.stars);
  };
  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((previousState) => {
      return {
        stars: previousState.stars - 0.5,
      };
    });
    // console.log(`this :`, this.state.stars);
  };
  handleFav = () => {
    this.setState({ fav: !this.state.fav });
  };
  handleCart = () => {
    this.setState({ cart: !this.state.cart });
  };

  render() {
    // Destructuring of state object
    // console.log(this.props.movies);
    // const { movies: data } = this.props;

    const { title, plot, price, rating, stars, fav, cart, poster } =
      this.props.movies;
    const { addStars, movies, decStars, handleCart, handleFav } = this.props;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  className="str-btn-incdec"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={() => {
                    decStars(movies);
                  }}
                />
                <img
                  className="str-btn"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  alt="increase"
                  className="str-btn-incdec"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span>{stars}</span>
              </div>
              {/* {fav ? (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favorite
                </button>
              ) : (
                <button className="unfavorite-btn" onClick={this.handleFav}>
                  Un-Favorite
                </button>
              )} */}
              <button
                className={fav ? "unfavorite-btn" : "favourite-btn"}
                onClick={() => {
                  handleFav(movies);
                }}
              >
                {fav ? "Un-favorite" : "Favorite"}
              </button>
              <button
                className={cart ? "cart-remove-btn" : "cart-btn"}
                onClick={() => {
                  handleCart(movies);
                }}
              >
                {cart ? "Remove from Cart" : "Add To Cart"}
              </button>
              {/* <button className="cart-btn">Add to Cart</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
