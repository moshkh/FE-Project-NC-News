import { Link, useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);
  // console.log("height: ", height, "width: ", width);
  //make className dynamic so if width is above 500px
  //then keep as is => under 500px change className
  //so I can implement a hamburger menu

  return width >= 501 ? (
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
  ) : (
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
          <Link className="nav--link hamburger-link-1" to="/">
            Home
          </Link>
          <Link
            className="nav--link hamburger-link-2"
            to="/articles"
            onClick={() => {
              window.location.replace("/articles");
            }}
          >
            Articles
          </Link>
          <Link className="nav--link hamburger-link-3" to="/topics">
            Topics
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
