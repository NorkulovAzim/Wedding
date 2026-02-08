import { NavLink } from "react-router-dom";
import Rings from "../assets/wedding-ring.png";
import Flower from "../assets/flower.png";
import Animation from "../assets/animation.png";
import RingAnimation from "../assets/wedding-rings.png";

const createAnimations = () =>
  Array.from({ length: 20 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 5 + Math.random() * 5,
  }));

const ANIMATIONS = createAnimations();

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <ul className="nav-list">
            <img
              src={Animation}
              alt="Animation"
              className="floating-animation"
            />

            {ANIMATIONS.map((anim, i) => (
              <img
                key={i}
                src={Animation}
                alt="animation"
                className="floating-animation"
                style={{
                  left: `${anim.left}%`,
                  animationDelay: `${anim.delay}s`,
                  animationDuration: `${anim.duration}s`,
                }}
              />
            ))}

            {/* {ANIMATIONS.map((anim, i) => (
              <img
                key={i}
                src={RingAnimation}
                alt="animation"
                className="floating-animation"
                style={{
                  left: `${anim.left}%`,
                  animationDelay: `${anim.delay}s`,
                  animationDuration: `${anim.duration}s`,
                }}
              />
            ))} */}

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
