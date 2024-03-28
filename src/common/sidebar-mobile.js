import { Image, Button } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

function SidebarMobile(params) {
  return (
    <div id="page" className="stylehome1 h0">
      <div className="mobile-menu">
        <div className="header stylehome1">
          <div className="main_logo_home2 text-center">
            <img
              className="nav_logo_img img-fluid mt20"
              // src="images/header-logo2.png"
              // alt="header-logo2.png"
              src="/images/logo/onlyIcon.png"
              alt="onlyIcon.png"
              height={50}
              width={50}
            ></img>
            <span className="mt20">WareHouseTracker</span>
          </div>
          <ul className="menu_bar_home2">
            <li className="list-inline-item list_s">
              <a href="/login">
                <span className="flaticon-user"></span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#menu">
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- /.mobile-menu --> */}
      <nav id="menu" class="stylehome1">
        <ul>
          <li>
            <span>
              <a href="/home">Home</a>
            </span>
          </li>
          <li>
            <span>Projects</span>
            <ul>
              <li>
                <span>All our projects feature:</span>
              </li>
              <li>
                <span>
                  <p>
                    <Image
                      preview={false}
                      src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
                      height={30}
                      width={30}
                    ></Image>{" "}
                    {""}
                    Reputable Builder
                  </p>
                  <p>
                    <Image
                      preview={false}
                      src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
                      height={30}
                      width={30}
                    ></Image>{" "}
                    Location
                  </p>
                  <p>
                    <Image
                      preview={false}
                      src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
                      height={30}
                      width={30}
                    ></Image>{" "}
                    Value per Sqft / Lot Size
                  </p>
                  <p>
                    <Image
                      preview={false}
                      src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
                      height={30}
                      width={30}
                    ></Image>{" "}
                    Excellent Building Amenities
                  </p>
                  <p>
                    <Image
                      preview={false}
                      src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
                      height={30}
                      width={30}
                    ></Image>{" "}
                    Upside Potential
                  </p>
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <h5>Projects</h5>
                </span>
              </li>
              <li>
                <span>
                  <a href="/#hot">
                    <p>Hot Selling Projects</p>
                  </a>
                  <a href="/#feature-property">
                    <p>Featured Projects</p>
                  </a>
                  <a href="/#previousProject">
                    <p>Previous Projects</p>
                  </a>
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <h5>Instant Search</h5>
                </span>
              </li>
              <li>
                <span>
                  <a href="/#findByPriceAndSize">
                    <p> Value</p>
                  </a>
                  <a href="/#findByPriceAndSize">
                    <p>Square Footage</p>
                  </a>
                  <a href="/map?query=">
                    <p> Map</p>
                  </a>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>Equity Charts</span>
            <ul>
              <li>
                <span>Condos</span>
                <ul>
                  <li>
                    <span>ROI Toronto Condos</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/con/toronto">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span>York Region Condos</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/con/york">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Peel Region Condos</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/con/peel">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Durham Region Condos</span>
                    <ul>
                      <u>
                        <a href="/charts/con/durham">2010-2022</a>
                      </u>
                    </ul>
                  </li>
                  <li>
                    <span>Simcoe Region Condos</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/con/simcoe">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Halton Region Condos</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/con/halton">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Ottawa Condos</span>
                    <ul>
                      <li>
                        <a href="/home">2010-2022</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Alberta Condos</span>
                    <ul>
                      <li>
                        <a href="/home">2010-2022</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span>Freeholds</span>
                <ul>
                  <li>
                    <span>ROI Toronto Freehold</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/fh/toronto">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span>York Region Freehold</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/fh/york">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Peel Region Freehold</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/fh/peel">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Durham Region Freehold</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/fh/durham">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Simcoe Region Freehold</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/fh/simcoe">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Halton Region Freehold</span>
                    <ul>
                      <li>
                        <u>
                          <a href="/charts/fh/halton">2010-2022</a>
                        </u>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Ottawa Freehold</span>
                    <ul>
                      <li>
                        <a href="/home">2010-2022</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Alberta Freehold</span>
                    <ul>
                      <li>
                        <a href="/home">2010-2022</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span>Markets</span>
            <ul>
              <li>
                <a href="/home">Ontatrio</a>
              </li>
              <li>
                <a href="/home">Toronto</a>
              </li>
              <li>
                <a href="/home">York Region</a>
              </li>
              <li>
                <a href="/home">Peel Region</a>
              </li>
              <li>
                <a href="/home">Durham Region</a>
              </li>
              <li>
                <a href="/home">Simcoe County</a>
              </li>
              <li>
                <a href="/home">Halton Region</a>
              </li>
              <li>
                <a href="/home">Niagara Region</a>
              </li>
              <li>
                <a href="/home">Ottawa</a>
              </li>
              <li>
                <a href="/home">Alberta Calgary</a>
              </li>
              <li>
                <a href="/cal-vs-ont">
                  <u>Calgary Vs Ontario Charts</u>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span>First Time Buyer</span>
            <ul>
              <li>
                <a href="/first-time-buyer">
                  <u>First Time Buyer</u>
                </a>
              </li>
              <li>
                <a href="/ten-things">
                  <u>10 Things to Know</u>
                </a>
              </li>
              <li>
                <a href="/mortgage-calc/ON">
                  {" "}
                  <u>Payment Calculator</u>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span>Contact</span>
            <ul>
              <li>
                <a href="/home">About Us</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/+14163037653?text=Hello! \n `}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with broker in{" "}
                  <WhatsAppOutlined
                    style={{ fontSize: "20px", color: "#52c41a" }}
                  />
                </a>
              </li>
              <li>
                <a href="/realtor-partner">Realtor Partner </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/lo" target="_blank" rel="noopener noreferrer">
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
                  Reserve A Unit
                </b>
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SidebarMobile;
