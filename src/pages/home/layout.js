import Footer from "../../common/footer";
import Header from "../../common/header";
import SidebarMobile from "../../common/sidebar-mobile";
// import Subscribe from "../../common/subscribe";

// import { Search } from "react-bootstrap-icons";
import LoginRegister from "../../common/login-register";
// import Featured from "./featured";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper">
      <div className="pre_preloader"></div>

      {/*<!-- Main Header Nav -->*/}

      <Header></Header>

      {/*<!-- Modal -->*/}
      <LoginRegister></LoginRegister>

      {/*<!-- Main Header Nav For Mobile -->*/}
      <SidebarMobile></SidebarMobile>

      <Outlet />

      {/*<!-- Our Footer -->*/}
      <Footer></Footer>
      <a className="scrollToHome home7" href="home">
        <i className="flaticon-arrows"></i>
      </a>
    </div>
  );
}

export default Layout;
