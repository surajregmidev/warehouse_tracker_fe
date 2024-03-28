import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SidebarMobile from "../../common/sidebar-mobile";
import PlainHeader from "../single-property/PlainHeader";
import SidebarAdmin from "./sidebar-admin";
import loadjs from "loadjs";

function Dashboard(params) {
  useEffect(() => {
    loadjs("./js/script.js", () => {});
    loadjs("./js/dashboard-script.js;", () => {});
  }, []);
  return (
    <div className="wrapper">
      <div className="preloader"></div>

      {/*<!-- Main Header Nav -->*/}
      <PlainHeader></PlainHeader>
      {/*<!-- Main Header Nav For Mobile -->*/}
      <SidebarMobile></SidebarMobile>
      {/*<!-- SidebarAdmin  -->*/}
      <SidebarAdmin></SidebarAdmin>
      {/*<!-- Our Dashbord -->*/}
      <Outlet />
      <a className="scrollToHome" href="home">
        <i className="flaticon-arrows"></i>
      </a>
    </div>
  );
}

export default Dashboard;
