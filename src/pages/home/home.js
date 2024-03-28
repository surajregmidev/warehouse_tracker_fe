import React, { useEffect } from "react";

import HomeSearch from "./search";

import loadjs from "loadjs";
import { ReactComponent as Cup } from "../../svgimages/cup.svg";
import { ReactComponent as Flat } from "../../svgimages/flat.svg";
import { ReactComponent as Market } from "../../svgimages/market.svg";

function HomePage() {
  useEffect(() => {
    loadjs("./footerjs.js", () => {});
  }, []);

  return (
    <>
      {/*<!-- Home Design -->*/}
      <HomeSearch></HomeSearch>

      {/*<!-- Why Chose Us -->*/}

      <section
        id="why-chose"
        className="whychose_us pb30"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container">
          <div className="row">
            <div class="row mt50">
              <div class="col-lg-6 offset-lg-3">
                <div class="main-title text-center">
                  <h2 style={{ color: "black" }}>
                    <b>WHY CHOOSE OUR SERVICE?</b>
                  </h2>
                  <p style={{ color: "black" }}>
                    <b style={{ fontSize: "20px" }}>
                      Powerful and Accurate Sales Tracker
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div
                  class="why_chose_us style2 home7  "
                  style={{
                    paddingTop: "px",
                    paddingBottom: "5px",
                    minHeight: "350px",
                  }}
                >
                  <div class="icon">
                    <Flat
                      fill="red"
                      style={{
                        height: "70px",
                        verticalAlign: "top",
                        marginTop: "20px",
                        marginLeft: "10px",
                      }}
                    ></Flat>
                  </div>
                  <div class="details">
                    <h4>Real-Time Inventory Visibility </h4>
                    <p>
                      Optimize order fulfillment with real-time inventory
                      visibility, preventing stockouts and ensuring smooth
                      operations for your business with WareHouse Tracker.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div
                  class="why_chose_us style2  home7"
                  style={{
                    paddingTop: "40px",
                    paddingBottom: "18px",
                    minHeight: "350px",
                  }}
                >
                  <div class="icon">
                    <Market
                      fill="red"
                      style={{
                        height: "70px",
                        verticalAlign: "top",
                        marginTop: "20px",
                      }}
                    ></Market>
                  </div>
                  <div class="details">
                    <h4>Automated Alerts and Notifications</h4>
                    <p>
                      Stay proactive with instant alerts for low stock, expiring
                      items, and critical inventory events, ensuring seamless
                      warehouse operations.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4">
                <div
                  class="why_chose_us style2 home7"
                  style={{
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    minHeight: "350px",
                  }}
                >
                  <div class="icon">
                    <Cup
                      fill="red"
                      style={{
                        height: "70px",
                        verticalAlign: "top",
                        marginTop: "20px",
                      }}
                    ></Cup>
                  </div>
                  <div class="details">
                    <h4>Advanced Analytics </h4>
                    <p>
                      Utilize analytics for data-driven decisions, optimize
                      stocking, identify trends, and boost warehouse efficiency,
                      empowering business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
