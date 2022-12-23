import { Link, useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";

const Nav = () => {
  const { height, width } = useWindowDimensions();
  // console.log("height: ", height, "width: ", width);
  //make className dynamic so if width is above 500px
  //then keep as is => under 500px change className 
  //so I can implement a hamburger menu


  return (
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
  );
};

export default Nav;
