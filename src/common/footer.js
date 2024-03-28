import React, { useEffect } from "react";
import "./footer.css";
import loadjs from "loadjs";

function Footer() {
  useEffect(() => {
    loadjs("./footerjs.js", () => {});
  }, []);
  return (
    <>
      {" "}
      <section className="footer_one">
        <div className="container">
          <div
            className="row"
            style={{ display: "felx", justifyContent: "flex-end" }}
          >
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 pr0 pl0">
              <div className="footer_about_widget">
                <div className=" d-flex ">
                  <img
                    className="logo2 img-fluid"
                    src="/images/logo/g.png"
                    alt="onlyIcon.png"
                    height={61}
                    width={60}
                  ></img>
                  <span
                    style={{
                      lineHeight: "15px",
                      paddingTop: "20px",
                      marginLeft: "10px",
                    }}
                    className=""
                  >
                    <b style={{ fontSize: "30px", color: "white" }}>
                      {"      "}
                      WareHouse Tracker App
                    </b>

                    <div style={{ marginTop: "0px", paddingTop: "10px" }}>
                      <b style={{ fontSize: "17px", color: "white" }}>
                        {"      "}
                        Best Inventory Management Service
                      </b>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="footer_qlink_widget">
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <h5>
                      <a
                        href="/mortgage-calc/ON"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", lineHeight: "0" }}
                      >
                        Privacy Policy
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="footer_contact_widget">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <h5 style={{ color: "white" }}>WarehouseTracker.ca</h5>
                  </li>
                  <li>
                    <h5 style={{ color: "white" }}>Progress Campus</h5>
                  </li>
                  <li>
                    <h5 style={{ color: "white" }}>Centennial College</h5>
                  </li>
                  <li>
                    <h5 style={{ color: "white" }}>
                      Scarborough , ON, M2K 1B6
                    </h5>
                  </li>
                  <li>
                    <h5 style={{ color: "white" }}>Office: 437-436-8573</h5>
                  </li>
                  <li>
                    <a
                      href="mailto: investercare@WareHouseTracker.ca"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 style={{ color: "white" }}>
                        query@warehousetracker.ca
                      </h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br></br>

          <p style={{ color: "white", fontSize: "12px" }}>
            **Item's price is subject to change. Don't Wait - Reserve Now
          </p>
        </div>
      </section>
      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt30 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="footer_menu_widget">
                <ul>
                  <li className="list-inline-item">
                    <a href="/home">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/about-us">About Us</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/term-of-service">Terms & Conditions</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="copyright-widget text-right">
                <p>© 2024 WareHouseTracker. Made with love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a className="scrollToHome" href="home">
        <i className="flaticon-arrows"></i>
      </a>
    </>
  );
}
export default Footer;
