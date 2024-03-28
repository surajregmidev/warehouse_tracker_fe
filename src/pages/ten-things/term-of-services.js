import React, { useEffect } from "react";
import Footer from "../../common/footer";
import LoginRegister from "../../common/login-register";
import SidebarMobile from "../../common/sidebar-mobile";
import PlainHeader from "../single-property/PlainHeader";
import "./ten-things.css";
import loadjs from "loadjs";

function TermOfService() {
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
                    <b>Terms of Service</b>
                  </h3>
                  <div
                    class="details"
                    style={{
                      textAlign: "left",

                      padding: "20px",
                    }}
                  >
                    <p class="mb30">
                      <div className="ts">
                        <h4>
                          <b>1. Terms</b>
                        </h4>
                        <h5>
                          <b>
                            When accessing WareHouseTracker.ca, you are agreeing
                            to comply with the following terms of service, as
                            well as all applicable laws and regulations, and
                            take responsibility for any applicable local laws in
                            Ontario, Calgary and Canada. If you do not agree
                            with any of these terms, you must leave the site
                            immediately. Any material contained within the
                            website is protected by copyright and trademark law.
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>2. Use License</b>
                        </h4>
                        <h5>
                          <b>
                            You are granted permission to temporarily download
                            one copy of the materials (information or software)
                            on WareHouseTracker.ca for personal, non-commercial,
                            and transitory viewing only. This is a license, not
                            a transfer of title, and you are not permitted to
                            modify or copy the materials, use them for
                            commercial or public display purposes, attempt to
                            decompile or reverse engineer any software contained
                            on the site, remove any copyright or proprietary
                            notations from the materials, or transfer the
                            materials to another person or server. This license
                            will automatically terminate if you violate any of
                            these restrictions and may be terminated by
                            WareHouseTracker.ca. Upon termination, you must
                            destroy any downloaded materials in your possession,
                            whether in electronic or printed format.
                            <br />
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>3. Disclaimer</b>
                        </h4>
                        <h5>
                          <b>
                            The materials on WareHouseTracker.ca provided on an
                            'as is' basis. WareHouseTracker.camakes no
                            warranties, expressed or implied, and hereby
                            disclaims all other warranties, including, without
                            limitation, implied warranties or conditions of
                            merchantability, fitness for a particular purpose,
                            or non-infringement of intellectual property or
                            other violation of rights. Additionally,
                            WareHouseTracker.cadoes not warrant or make any
                            representations concerning the accuracy, likely
                            results, or reliability of the materials on its
                            website or on any sites linked to this site.
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>4. Limitations</b>
                        </h4>
                        <h5>
                          <b>
                            In no event shall WareHouseTracker.ca its vendors be
                            liable for any damages (including, without
                            limitation, damages for loss of data or profit)
                            arising out of the use or inability to use the
                            materials on WareHouseTracker.cawebsite, even if
                            WareHouseTracker.ca it's authorized representative
                            has been notified orally or in writing of the
                            possibility of such damage. Because some
                            jurisdictions do not allow limitations on implied
                            warranties, or limitations of liability for
                            consequential or incidental damages, these
                            limitations may not apply to you.
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>5. Accuracy of materials</b>
                        </h4>
                        <h5>
                          <b>
                            The materials on WareHouseTracker.ca's website could
                            contain technical, typographical, or photographic
                            errors. WareHouseTracker.cadoes not warrant that any
                            of the materials on its website are accurate,
                            complete, or current. WareHouseTracker.camay make
                            changes to the materials contained on its website at
                            any time without notice.
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>6. Links</b>
                        </h4>
                        <h5>
                          <b>
                            WareHouseTracker.cahas not reviewed all of the sites
                            linked to its website and is not responsible for the
                            contents of any such linked site. The inclusion of
                            any link does not imply endorsement by
                            WareHouseTracker.caof the site. Use of any such
                            linked website is at the user's own risk.
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>7. Modifications</b>
                        </h4>
                        <h5>
                          <b>
                            WareHouseTracker.camay revise these terms of service
                            for its website at any time without notice. By using
                            this website, you are agreeing to be bound by the
                            then-current version of these terms of service.
                          </b>
                        </h5>
                      </div>
                      <br />
                      <div className="ts">
                        <h4>
                          <b>8. Governing Law</b>
                        </h4>
                        <h5>
                          <b>
                            These terms and conditions are governed by and
                            construed in accordance with the laws of Ontario,
                            Canada, and you irrevocably submit to the exclusive
                            jurisdiction of the provincial courts in that
                            Province or location.
                          </b>
                        </h5>
                      </div>
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

export default TermOfService;
