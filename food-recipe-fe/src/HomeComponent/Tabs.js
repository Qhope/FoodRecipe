import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>Options</a>
    </Menu.Item>
  </Menu>
);
const Tabs = () => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          onclick={(event) => {
            event.preventDefault();
          }}
        >
          Click me <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};
export default Tabs;
