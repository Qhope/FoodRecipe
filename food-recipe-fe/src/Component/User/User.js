import { Avatar, Button, Dropdown, Menu } from "antd";
import { NavLink } from "react-router-dom";
const User = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <NavLink to="/Login">Login</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/Register">Register</NavLink>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQ8dQ-LMiMmTEyBijR0FzpQHC7tH6qTE2g&usqp=CAU" />
      </Dropdown>
    </div>
  );
};
export default User;
