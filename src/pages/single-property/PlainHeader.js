import React, { useEffect, useState } from "react";

import loadjs from "loadjs";
import { Button } from "antd";
import RegisterModal from "../../common/register-modal";
import useAuth from "../../hooks/useAuth";

function PlainHeader() {
  const { auth } = useAuth();
  useEffect(() => {
    loadjs("./js/ace-responsive-menu.js", () => {});
  }, []);

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

  return (
    <header
      // "header-nav menu_style_home_one home7 navbar-scrolltofixed stricky main-menu scroll-to-fixed-fixed slideIn animated"
      className="header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu scroll-to-fixed-fixed slideIn animated"
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
              src="/images/logo/onlyIcon.png"
              alt="onlyIcon.png"
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
                  src="/images/logo/g.png"
                  alt="onlyIcon.png"
                  height={60}
                  width={60}
                ></img>
                <img
                  className="logo2 img-fluid"
                  src="/images/logo/g.png"
                  alt="header-logo2.png"
                  height={60}
                  width={60}
                ></img>
                {auth.accessToken ? (
                  ""
                ) : (
                  <span>
                    <p className="menu_slogan">
                      <b style={{ fontSize: "23px" }}> WareHouseTracker</b>{" "}
                      <br></br> <b>Best Inventory Management Service</b>
                    </p>
                  </span>
                )}
              </a>
            </div>
            {/* <!-- Responsive Menu Structure--> */}
            {/* <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) --> */}
            <div>
              {auth.accessToken && (
                <div>
                  <ul>
                    <li style={{ paddingTop: "10px" }}>
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
                            // width: "250px",
                          }}
                        >
                          <b
                            className="title"
                            style={{
                              padding: "20px",
                            }}
                          >
                            {`${auth.user.email},${auth.user.role} `}
                          </b>
                        </Button>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <RegisterModal
        open={open}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
        handleCancel={handleCancel}
      ></RegisterModal>
    </header>
  );
}
export default PlainHeader;
