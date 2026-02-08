import { NavLink } from "react-router-dom";
import Rings from "../assets/wedding-ring.png";
import Flower from "../assets/flower.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            <li>
              <NavLink to="/">
                <img src={Rings} alt="Wedding Rings" className="rings" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/videos">Videos</NavLink>
            </li>
            <li>
              <NavLink to="/members">Members</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
