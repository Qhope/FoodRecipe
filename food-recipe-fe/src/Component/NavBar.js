import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navlink">
        <NavLink to="/Home" activeClassName="is-active" exact="true">
          Home
        </NavLink>
      </div>
      <div className="user">This is user Icon muss be a component</div>
    </div>
  );
};

export default Navbar;
