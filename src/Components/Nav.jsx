import { Link, useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = ({ className }) => {
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  const hamburgerNavClick = () => {
    setOpen(false);
  };

  return width >= 501 ? (
    <div className={className}>
      <nav className="nav">
        <Link className="nav--link" to="/">
          Home
        </Link>
        <Link
          className="nav--link"
          to="/articles"
          onClick={() => {
            window.location.replace("/articles");
          }}
        >
          Articles
        </Link>
        <Link className="nav--link" to="/topics">
          Topics
        </Link>
      </nav>
    </div>
  ) : (
    <div className={className}>
      <nav className="nav">
        <div className="hamburger-icon">
          <Hamburger
            duration={0.8}
            size="30"
            rounded={true}
            toggled={isOpen}
            toggle={setOpen}
            hideOutline={true}
          />
        </div>
        {isOpen ? (
          <div className="hamburger-links">
            <Link
              className="nav--link hamburger-link-1"
              onClick={hamburgerNavClick}
              to="/"
            >
              Home
            </Link>
            <Link
              className="nav--link hamburger-link-2"
              to="/articles"
              onClick={() => {
                window.location.replace("/articles");
                hamburgerNavClick();
              }}
            >
              Articles
            </Link>
            <Link
              className="nav--link hamburger-link-3"
              onClick={hamburgerNavClick}
              to="/topics"
            >
              Topics
            </Link>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Nav;
