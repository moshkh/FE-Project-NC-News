import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user.context";

const UserBar = () => {
  const { currUser } = useContext(UserContext);

  return (
    <nav>
      <Link to={`/${currUser}`}>Logged in as {currUser}</Link>
    </nav>
  );
};

export default UserBar;
