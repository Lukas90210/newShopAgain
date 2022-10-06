import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsPerson, BsBag } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked((prev) => !prev);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <a href="/">Goodies</a>
        </div>

        <div className={clicked ? "navMenu active" : "navMenu"}>
          <ul>
            <li>
              <Link className="navLink">SHOP</Link>
            </li>
            <li>
              <Link className="navLink">BRANDS</Link>
            </li>
            <li>
              <Link className="navLink">JOURNAL</Link>
            </li>
            <li>
              <Link className="navLink">MAKE IT GOOD</Link>
            </li>
            <li>
              <Link className="navLink">VALUES</Link>
            </li>
            <li>
              <a className="navLink" href="/OurStory">
                ABOUT
              </a>
            </li>
          </ul>
        </div>

        <div className="navIcons">
          <BsSearch className="navIcon" />
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
