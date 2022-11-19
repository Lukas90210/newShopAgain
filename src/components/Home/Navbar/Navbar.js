import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsPerson, BsBag } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prev) => !prev);

  const [clicked1, setClicked1] = useState(false);

  const handleClick1 = () => setClicked1((prev) => !prev);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <a href="/">Goodies</a>
        </div>

        <div className={clicked ? "navMenu active" : "navMenu"}>
          <ul>
            <li>
              <Link className="navLink">NEW</Link>
            </li>

            <li className="dropShop">
              <Link to="/Shop" className="navLink">
                SHOP
              </Link>
              <ul className="dropShopContainer">
                <div className="dropMenu">
                  <Link className="dropLink">ALL</Link>
                </div>

                <div className="dropMenu">
                  <Link className="dropLink">OUTWEARS</Link>
                  <ul>
                    <li>
                      <Link className="dropListLink">Jackets</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Vests</Link>
                    </li>
                  </ul>
                </div>

                <div className="dropMenu">
                  <Link className="dropLink">TOPS</Link>
                  <ul>
                    <li>
                      <Link className="dropListLink">T-Shirt</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Pants</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Scarf</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Shorts</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Boots</Link>
                    </li>
                  </ul>
                </div>

                <div className="dropMenu">
                  <Link className="dropLink">BOTTOMS</Link>
                  <ul>
                    <li>
                      <Link className="dropListLink">Jeans</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Sunglasses</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Something</Link>
                    </li>
                    <li>
                      <Link className="dropListLink">Else</Link>
                    </li>
                  </ul>
                </div>

                <div className="dropMenu">
                  <Link className="dropLink">ACCESSORIES</Link>
                </div>
              </ul>
            </li>

            <li>
              <Link className="navLink">BRANDS</Link>
            </li>

            <li className="dropSale">
              <Link className="navLink">SALE</Link>
              <ul className="dropSaleContainer">
                <li>
                  <Link className="dropSaleLink">Pants</Link>
                </li>
                <li>
                  <Link className="dropSaleLink">Hats</Link>
                </li>
                <li>
                  <Link className="dropSaleLink">Last Season</Link>
                </li>
                <li>
                  <Link className="dropSaleLink">Products -50%</Link>
                </li>
                <li>
                  <Link className="dropSaleLink">All Other</Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="navLink" href="/OurStory">
                ABOUT
              </a>
            </li>
          </ul>
        </div>

        <div className="navIcons">
          <div className="SearchClick" onClick={handleClick1}>
            {clicked1 ? (
              <BsSearch className="navIcon" />
            ) : (
              <BsSearch className="navIcon" />
            )}
          </div>

          <BsBag className="navIcon" />
          <a href="/Account">
            <BsPerson className="navIcon" />
          </a>

          <div onClick={handleClick}>
            {clicked ? (
              <FaTimes className="bars" />
            ) : (
              <FaBars className="bars" />
            )}
          </div>
        </div>
      </div>
      <div className={clicked1 ? "search active" : "search"}>
        <div className="searchContainer">
          <input className="searchInput" type="text" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

/*
class Navbar extends Component {
  state = { clicked: false };

  handleChange = () => {
    this.setState({ clicked: !this.state.clicked });
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }))
  };

  render() {
    
  }
}
*/
export default Navbar;
