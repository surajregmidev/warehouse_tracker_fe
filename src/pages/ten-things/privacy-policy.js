import React, { useEffect } from "react";
import Footer from "../../common/footer";
import LoginRegister from "../../common/login-register";
import SidebarMobile from "../../common/sidebar-mobile";
import PlainHeader from "../single-property/PlainHeader";
import "./ten-things.css";
import loadjs from "loadjs";

function PrivacyPolicy() {
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
                    <b style={{ lineHeight: "1.3" }}>Privacy Policy</b>
                  </h3>
                  <div
                    class="details"
                    style={{
                      textAlign: "left",
                      padding: "20px",
                    }}
                  >
                    <p class="mb30">
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          At WareHouseTracker.ca, safeguarding your privacy is
                          of utmost importance to us. This Policy aims to inform
                          you about the Personal Information (as defined below)
                          and other data we collect from you, how we acquire it,
                          with whom we share it, and the options available to
                          you regarding our data collection and use, as well as
                          disclosure to other entities.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Please note that certain properties displayed for sale
                          on WareHouseTracker.ca may be unavailable due to
                          contract agreements, sales or withdrawal from the
                          market.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          All information found on this website is strictly
                          intended for personal use and should not be used for
                          any other purpose except for identifying properties
                          that might pique a consumer's interest.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          WareHouseTracker.ca does not provide any warranty or
                          assurance regarding the accuracy of the IDX/MLS® data
                          furnished by external sources. We disclaim any
                          responsibility for any misinformation or erroneous
                          data presented on the site due to such neglect.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Users of this website should independently verify any
                          additional information available on the site.
                          WareHouseTracker.ca Team does not provide any
                          warranty, whether stated or implied, about the
                          accuracy of the data presented on this website or
                          obtained from it.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          We may gather information through our website at
                          WareHouseTracker.ca, any subdomains or mobile versions
                          of our website, and any other site where this Policy
                          is posted (each a “Site” and collectively, the
                          “Sites”).
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          The Services offered by WareHouseTracker.ca are
                          collectively referred to as the “Services”. This
                          Policy specifically addresses the use and disclosure
                          of information collected from you through our
                          services. If you do not agree with this Policy, we
                          advise you not to use our Services.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          We collect Personal Information about you when you
                          Register for our Services, as described below.
                          “Personal Information” refers to information that can
                          be used to identify an individual, such as their name,
                          phone number, or email address, either on its own or
                          when combined with other identifying information.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          We collect and use Personal Information in accordance
                          with this Policy or as otherwise communicated to you
                          periodically. You may register for our Services or
                          access our real estate resources, and we may add other
                          information from time to time. You may be
                          automatically registered for our Services when you
                          contact one of our agents about a property or inquire
                          about us or our Services. If you register for our
                          Services, we collect Personal Information such as your
                          name, email, phone number and any other Personal
                          Information required on the registration form.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          We may offer email and phone communications to provide
                          you with information about WareHouseTracker.ca's
                          services related to real estate offerings. If you
                          provide your contact information to one of our sales
                          associates, we collect this information on behalf of
                          that agent. However, we have no control over how sales
                          associates use that information, and therefore this
                          Policy does not apply to their use of your Personal
                          Information.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Our Services use cookies, which are small files that
                          are transferred to your computer by us or a third
                          party when you allow your browser to accept cookies.
                          Similarly, we, our third-party service providers, or
                          advertisers may use “web beacons,” “pixel tags” or
                          other tracking technologies, which are small pieces of
                          code placed on a web page to monitor behavior and
                          collect certain data regarding the actions of our
                          guests online. These cookies and other technologies
                          may be used to track your online traffic patterns, to
                          enhance your experience when using our Services, to
                          store information during your session, to personalize
                          the Services for you based on your preferences and
                          selections, to target advertising or content to you
                          (as described further below), and to collect
                          information about you and your visit to our Services
                          for other marketing and business purposes. You can
                          adjust your privacy preferences regarding the use of
                          cookies and similar technologies through your browser.
                          However, disabling cookies may impair your user
                          experience and disable certain features of our
                          Services.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          When you leave your email address or other contact
                          information to one of our sales associates, we collect
                          this information on behalf of that agent. However, we
                          cannot control how sales associates use that
                          information, and therefore this Policy does not apply
                          to their use of your Personal Information.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Our Services utilize cookies and other technologies
                          provided by website analytics services, such as Google
                          Analytics, to enhance our understanding of how
                          visitors utilize our Services. These technologies
                          track your usage of our Services and help us identify
                          which features and content are most important to you.
                          If you do not want us to collect data through cookies,
                          you can disable them in your browser's settings.
                          However, this may impact your user experience. To
                          learn more about opting-out of Google's analytic and
                          marketing services, please visit the Google Analytics
                          Terms of Use, the Google Privacy Policy, or Google
                          Analytics Opt-out.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          We may collect data about your online activities to
                          provide personalized advertising, either by us, our
                          affiliates, or third parties. We may use third-party
                          advertisers and ad exchanges to serve ads across the
                          internet and third-party analytics providers to
                          evaluate ad performance on our Services and
                          third-party websites. This information may include
                          your Service visits and viewed pages. Third-party
                          tracking technologies may help to deliver ads that are
                          relevant to you, prevent excessive ad repetition, and
                          understand ad effectiveness. This process assists us
                          in monitoring our marketing efforts. We and
                          third-party vendors use cookies to report ad
                          impressions, ad service usage, and interactions
                          related to Service visits. To learn more about
                          opting-out of Google's use of cookies or DoubleClick's
                          use of cookies, please visit the Google Ads Settings
                          or DoubleClick opt-out page.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          In addition, our Services and servers may collect
                          other non-identifiable information about you, such as
                          web browser data, the webpage address accessed when
                          entering our Services, and operating system and
                          browser information. If you have registered for our
                          Services, we may link some of this information to
                          personally identifiable information. We may also
                          collect location information if you have allowed
                          location services. This data helps us personalize
                          content, localize content, and better understand our
                          audience, in addition to tailoring our content to meet
                          visitors' needs.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          If you have any questions about our services, real
                          estate, business, or other matters, you may contact
                          us. Any information you provide us will be used to
                          address your request, answer your inquiry, or provide
                          additional information related to your inquiry. We may
                          also add you to our marketing list for information
                          related to your inquiry or other content that we
                          believe would be of interest to you. Your information
                          may also be used as described in this Policy.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          In the event of a business transition, such as a
                          merger, acquisition, liquidation, or sale of assets,
                          your Personal Information may be part of the assets
                          transferred or disclosed during the due diligence
                          process (subject to confidentiality restrictions). The
                          acquiring company's use of your Personal Information
                          will still be subject to this Policy and any privacy
                          choices you made in your online profile on our
                          Services.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Most of our services can be used without providing
                          Personal Information. However, if you do register or
                          give us Personal Information, you may have the
                          opportunity to limit email communications from us or
                          unsubscribe from email newsletters by clicking on the
                          unsubscribe link in every email.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          We have implemented reasonable security measures to
                          protect the Personal Information you provide us.
                          However, please note that perfect security does not
                          exist on the internet, and we cannot guarantee the
                          security of your Personal Information or any other
                          information you provide us.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Each time you use our services, the current version of
                          this Policy will apply. Therefore, it is important to
                          check the date of this Policy and review any changes
                          since the last version. We reserve the right to modify
                          this Policy at any time without notice other than
                          posting the modifications, and any modifications will
                          be effective immediately.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          By providing us with any Personal Information, you
                          release and hold harmless WareHouseTracker.ca, related
                          entities, parents, service providers, licensors, and
                          its or their respective officers, directors, employees
                          or agents and brokerage from any and all liability for
                          any injuries, loss or damage of any kind arising from
                          or in connection with the use and/or misuse of your
                          collected Personal Information. We take reasonable
                          steps to prevent unauthorized third-party use of your
                          Personal Information, but we cannot be held liable for
                          any injuries, loss, or damage arising from or in
                          connection with the use and/or misuse of your
                          collected Personal Information by those third parties.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          UNDER NO CIRCUMSTANCES SHALL ANY{" "}
                          <a
                            href="/home"
                            style={{ color: "green", fontWeight: "bolder" }}
                          >
                            WareHouseTracker.ca
                          </a>{" "}
                          PARTIES BE LIABLE FOR ANY DAMAGES (INCLUDING, BUT NOT
                          LIMITED TO DIRECT, INDIRECT, PUNITIVE, SPECIAL,
                          INCIDENTAL, CONSEQUENTIAL, LOST PROFITS OR LOST
                          REVENUE) THAT RESULT FROM THE USE OF THE INFORMATION
                          OR MATERIALS ON THIS SITE, EVEN IF THE{" "}
                          <a
                            href="/home"
                            style={{ color: "green", fontWeight: "bolder" }}
                          >
                            WareHouseTracker.ca
                          </a>{" "}
                          PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
                          DAMAGES.
                        </b>
                      </h4>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          If you are accessing our services from outside Canada,
                          you consent to the transfer of your information to
                          Canada, and the processing, use, and sharing of your
                          information in accordance with this Policy. Regardless
                          of where your information is collected or transferred,
                          it will be treated in accordance with this Policy. As
                          members of The Canadian Real Estate Association
                          (CREA), we are obliged to adhere to all guidelines set
                          out in the CREA Privacy Code. All employees, brokers,
                          and sales representatives associated with our
                          brokerage must comply with the Code of Ethics and
                          Standards of Business Practice.
                        </b>
                      </h4>
                      <br></br>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          Contact us with your questions or comments:
                          <br></br>
                          <br></br>
                          <a
                            href="/home"
                            style={{ color: "green", fontWeight: "bolder" }}
                          >
                            WareHouseTracker.ca{" "}
                          </a>
                          <br />
                          Progress Campus
                          <br></br>
                          Centennial College
                          <br></br>
                          Scarborough <br></br>
                          Office: 437-436-8573<br></br>
                          WareHouseTracker@gmail.ca
                        </b>
                      </h4>
                      <br></br>
                      <br></br>
                      <h4>
                        <b style={{ lineHeight: "1.3" }}>
                          PRIVACY POLICY: Effective & Updated March 14, 2024
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

export default PrivacyPolicy;
