import React, { useEffect, useState } from "react";

import loadjs from "loadjs";
import { Button } from "antd";
import RegisterModal from "./register-modal";
import useAuth from "../hooks/useAuth";

function Header() {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  useEffect(() => {
    // loadjs("./footerjs.js", () => {});
    loadjs("./js/script.js", () => {});
    loadjs("./js/ace-responsive-menu.js", () => {});
  }, []);
  return (
    <>
      <header
        className="header-nav menu_style_home_one home7 navbar-scrolltofixed stricky main-menu scroll-to-fixed-fixed slideIn animated"
        style={{
          zIndex: "1000",
          position: "fixed",
          top: "0px",
          marginLeft: "0px",
          width: "100%",
          left: "0px",
        }}
      >
        <div className="container-fluid p0">
          {/* <!-- Ace Responsive Menu --> */}
          <nav>
            {/* <!-- Menu Toggle btn--> */}
            <div className="menu-toggle">
              <img
                className="nav_logo_img img-fluid"
                // src="images/header-logo.png"
                // alt="header-logo.png"
                src="/images/logo/onlyIcon.png"
                alt="onlyIcon.png"
                height={50}
                width={50}
              ></img>
              <button type="button" id="menu-btn">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className=" d-flex justify-content-between">
              <div>
                <a href="/" className="navbar_brand float-left dn-smd">
                  <img
                    className="logo1 img-fluid"
                    // src="images/header-logo2.png"
                    // alt="header-logo.png"
                    src="/images/logo/g.png"
                    alt="onlyIcon.png"
                    height={50}
                    width={50}
                  ></img>
                  <img
                    className="logo2 img-fluid"
                    // src="images/header-logo2.png"
                    // alt="header-logo2.png"
                    src="/images/logo/g.png"
                    alt="onlyIcon.png"
                    height={50}
                    width={50}
                  ></img>
                  <span style={{ lineHeight: "17px" }} className="menu_slogan">
                    <b style={{ fontSize: "23px" }}>WareHouse Tracker App</b>
                    <div style={{ marginTop: "0px", paddingTop: "0px" }}>
                      <b style={{ fontSize: "12px" }}>
                        Best Inventory Management Service
                      </b>
                    </div>
                  </span>
                </a>
              </div>
              {/* <!-- Responsive Menu Structure--> */}
              {/* <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) --> */}
              {auth.accessToken && (
                <div>
                  <ul>
                    <li>
                      <a
                        href="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="large"
                          style={{
                            background: "green",
                            borderColor: "white",
                            color: "white",
                            height: "50px",
                            width: "180px",
                          }}
                        >
                          <b
                            className="title"
                            style={{
                              padding: "20px",
                            }}
                          >
                            HI
                          </b>
                        </Button>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div>
                <ul
                  id="respMenu"
                  className="ace-responsive-menu text-right"
                  data-menu-style="horizontal"
                >
                  <li>
                    <a href="/">
                      <b style={{ fontSize: "18px", fontWeight: "900" }}>
                        <span className="title">Home</span>
                      </b>
                    </a>
                  </li>

                  <li>
                    <a href="/login" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="large"
                        style={{
                          background: "green",
                          borderColor: "white",
                          color: "white",
                          height: "50px",
                          width: "180px",
                        }}
                      >
                        <b
                          className="title"
                          style={{
                            padding: "20px",
                          }}
                        >
                          Login/SignUp
                        </b>
                      </Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <RegisterModal
        open={open}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
        handleCancel={handleCancel}
      ></RegisterModal>
    </>
  );
}

export default Header;
