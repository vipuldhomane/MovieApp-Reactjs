import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    //we have to call the super class
    this.state = {
      title: "Avengers: Endgame",
      plot: `After the devastating events of Avengers: Infinity War (2018), the
      universe is in ruins. With the help of remaining allies, the
      Avengers assemble once more in order to reverse Thanos' actions
      and restore balance to the universe.`,
      price: 299,
      rating: 8.9,
      stars: 0,
    };
    // binding this of addStars to the class this
    // this.addStars = this.addStars.bind(this);
  }
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

  render() {
    // Destructuring of state object
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
            />
          </div>
          <div className="right">
            <div className="title">{this.state.title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  className="str-btn-incdec"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={this.decStars}
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
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              <button className="favourite-btn">Favorite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
