import { Link, useNavigate } from "react-router-dom";
import "../CSS/Nav.css";

const Nav = () => {
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
