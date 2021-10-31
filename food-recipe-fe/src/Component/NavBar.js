import { NavLink } from "react-router-dom";
import { BiHomeAlt, BiBell } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import "../css/NavBar.css";
const Navbar = () => {
  return (
    <div>
      <div className="menu">
        <span className="appName">Food Recipe</span>
        <div className="navlink">
          <div>
            <NavLink to="/Home" activeClassName="is-active" exact="true">
              <BiHomeAlt />
              <button className="link_button">Home</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Favorite" activeClassName="is-active" exact="true">
              <AiFillHeart />
              <button className="link_button">Favorite</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Add_Recipes" activeClassName="is-active" exact="true">
              <BsFillPatchPlusFill />
              <button className="link_button">Add Recipes</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/Blog" activeClassName="is-active" exact="true">
              <HiOutlineDesktopComputer />
              <button className="link_button">Blog</button>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/Subscription"
              activeClassName="is-active"
              exact="true"
            >
              <BiBell />
              <button className="link_button">Subscription</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/About" activeClassName="is-active" exact="true">
              <FcAbout />
              <button className="link_button">About Us</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="user">This is user Icon muss be a component</div>
    </div>
  );
};

export default Navbar;
