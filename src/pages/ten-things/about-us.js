import React, { useEffect } from "react";
import Footer from "../../common/footer";
import LoginRegister from "../../common/login-register";
import SidebarMobile from "../../common/sidebar-mobile";
import PlainHeader from "../single-property/PlainHeader";
import "./ten-things.css";
import loadjs from "loadjs";

function AboutUs() {
  useEffect(() => {
    loadjs("./js/script.js", () => {});
  }, []);

  return (
    <>
      <PlainHeader></PlainHeader>

      {/*<!-- Modal -->*/}
      <LoginRegister></LoginRegister>

      {/*<!-- Main Header Nav For Mobile -->*/}
      <SidebarMobile></SidebarMobile>

      {/* <!-- Inner Page Breadcrumb --> */}
      <section
        class="blog_post_container bgc-f7 pb30"
        style={{ paddingTop: "7%" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main_blog_post_content">
                <div
                  class="mbp_thumb_post"
                  style={{ textAlign: "center", backgroundColor: "#eaf7ec" }}
                >
                  <h3 class="blog_sp_title" style={{ color: "green" }}>
                    <b style={{ lineHeight: "1.3" }}>About Us</b>
                  </h3>
                  <div
                    class="details"
                    style={{
                      textAlign: "left",
                      padding: "20px",
                    }}
                  >
                    <p class="mb30" style={{ textAlign: "left" }}>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          At WareHouse Tracker, we specialize in offering a
                          comprehensive solution for warehouse sales tracking,
                          empowering businesses to efficiently manage inventory,
                          optimize operations, and drive profitability. With our
                          user-friendly interface and advanced features, we
                          strive to simplify warehouse management, ensuring
                          seamless tracking, precise analytics, and enhanced
                          decision-making capabilities for our valued clients.
                        </b>
                      </h4>
                    </p>
                    <p class="mb30" style={{ textAlign: "left" }}>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          WareHouse Tracker facilitates warehouses by providing
                          a robust platform that streamlines inventory
                          management processes. With features such as real-time
                          tracking, automated alerts for low stock levels, and
                          intuitive analytics, our application enables
                          warehouses to maintain optimal stock levels, reduce
                          wastage, and improve overall efficiency. Additionally,
                          WareHouse Tracker enhances collaboration among team
                          members, simplifies order fulfillment, and empowers
                          decision-making through insightful data visualization,
                          ultimately driving productivity and maximizing
                          profitability for warehouse operations.
                        </b>
                      </h4>
                    </p>

                    <p class="mb30" style={{ textAlign: "left" }}>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Thank you for choosing our Warehouse tracker. We look
                          forward to serving you and making your next sales
                          experience a great one!
                        </b>
                      </h4>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default AboutUs;
