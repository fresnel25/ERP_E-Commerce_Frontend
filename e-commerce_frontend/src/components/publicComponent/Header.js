import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import { FileSyncOutlined, HomeOutlined, LoginOutlined, PhoneOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";


const Header = () => {
  const menuHeader = [
    {
      label: (
        <Link to="/">
          <span>Home</span>
        </Link>
      ),
      key: "/",
      icon: <HomeOutlined></HomeOutlined>,
    },
    {
      label: (
        <Link to="/service">
          <span>Service</span>
        </Link>
      ),
      key: "service",
      icon: <FileSyncOutlined></FileSyncOutlined>,
    },
    {
      label: (
        <Link to="/about">
          <span>About Us</span>
        </Link>
      ),
      key: "about",
      icon: <UserSwitchOutlined></UserSwitchOutlined>,
    },
    {
      label: (
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      ),
      key: "contact",
      icon: <PhoneOutlined></PhoneOutlined>,
    },
    {
      label: (
        <Link to="/login">
          <Button
            style={{ borderColor: "GrayText", backgroundColor: "ButtonShadow" }}
          >
            Login
          </Button>
        </Link>
      ),
      key: "login",
      icon: <LoginOutlined></LoginOutlined>,
    },
    {
      label: (
        <Link to="/register">
          <Button type="primary">Register</Button>
        </Link>
      ),
      key: "register",
      icon: <UserOutlined></UserOutlined>,
    },
  ];

  return (
    <div>
      <Menu
        mode="horizontal"
        items={menuHeader}
        style={{ display: "flex", justifyContent: "center", gap: "10px", height:60 }}
      ></Menu>
    </div>
  );
};

export default Header;
