import React from "react";
import './ALayout.css'
import { Outlet } from "react-router-dom";
import Header from "../../components/adminComponent/Header";
import Footer from "../../components/adminComponent/Footer";
import SidenavMenu from "../../components/adminComponent/SidenavMenu";

const ALayout = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <div className="SideMenu">
          <SidenavMenu></SidenavMenu>
        </div>
        <div>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default ALayout;
