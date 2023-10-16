import React from "react";
import "./styles.css";
import Styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={Styles.nav}>
          <div className={Styles.title}>MOVIE APP</div>

          <div className={Styles.cartIconContainer}>
            <img
              className={Styles.cartImg}
              alt="Cart-Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <span className={Styles.cartCount} color="yellow" show={true}>
              5
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
