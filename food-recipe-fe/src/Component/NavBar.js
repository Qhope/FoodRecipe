import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  ExperimentOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "../css/NavBar.css";

const NavBar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="community" icon={<ExperimentOutlined />}>
        <Link to="/community">Community</Link>
      </Menu.Item>
      <Menu.Item key="workspace" icon={<TeamOutlined />}>
        <Link to="/workspace">Workspace</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
