import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user.context";
import "../CSS/UserBar.css";

const UserBar = ({ className }) => {
  const { currUser } = useContext(UserContext);

  return (
    <div className={`userbar-grid ${className}`}>
      <nav className="userbar">
        <Link className="userbar--link" to={`/${currUser}`}>
          Logged in as {currUser}
        </Link>
      </nav>
    </div>
  );
};

export default UserBar;
