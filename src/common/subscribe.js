import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import RegisterModal from "./register-modal";
import { MailOutlined } from "@ant-design/icons";

import { ReactComponent as Construction } from "../svgimages/construction.svg";
import { ReactComponent as Mortgage } from "../svgimages/mortgage.svg";
import { ReactComponent as Vacation } from "../svgimages/vacation.svg";
import { ReactComponent as Balance } from "../svgimages/balance.svg";

function Subscribe(params) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async () => {
    // Call the woodpecker subscribe API
    // axios
    //
    let headers = new Headers();
    headers.append(
      "Authorization",
      "Basic 267813.0ea9118b4ac0124dfbbd0a62f8ecf94222864fc846975e881307972e6d653cd6"
    );
    fetch("https://api.woodpecker.co/rest/v1/add_prospects_list", {
      method: "post",
      mode: "cors",
      headers: headers,
    }).catch((error) => {
      // error is handled in catch block
      if (error.response) {
        // status code out of the range of 2xx
        console.log("Data :", error.response.data);
        console.log("Status :" + error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error);
        console.log(error.request);
      } else {
        // Error on setting up the request
        console.log("Error", error.message);
      }
    });

    // axios
    //   .post(
    //     "https://api.woodpecker.co/rest/v1/add_prospects_list",
    //     {
    //       email: "suraz.regmyfin@gmail.com",
    //     },
    //     {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         Authorization:
    //           "Basic :267813.0ea9118b4ac0124dfbbd0a62f8ecf94222864fc846975e881307972e6d653cd6",
    //       },
    //     }
    //   )
    //   .catch((error) => {
    //     // error is handled in catch block
    //     if (error.response) {
    //       // status code out of the range of 2xx
    //       console.log("Data :", error.response.data);
    //       console.log("Status :" + error.response.status);
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       console.log(error);
    //       console.log(error.request);
    //     } else {
    //       // Error on setting up the request
    //       console.log("Error", error.message);
    //     }
    //   });

    message.success("You are subscribed! You will soon hear back from us!");
    form.resetFields();
  };
  const onFinishFailed = () => {};

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
    <section
      className="start-partners pt50 pb50"
      style={{ backgroundColor: "#698B69" }}
    >
      <div className="container">
        <div className="row" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", fontWeight: "900" }}>
            Join our Community of Real Estate Investors
          </h2>
          <br></br>
          <h5 style={{ color: "white", fontWeight: "900" }}>
            Get exclusive, front line access to the latest pre-construction
            projects and special
          </h5>
          <h5 style={{ color: "white", fontWeight: "900" }}>
            investor invites to V.I.P Events & Incentives rarely offered
          </h5>
          <br></br>
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div
              className="why_chose_us style2 home7  "
              style={{
                paddingTop: "20px",
                minHeight: "220PX",
              }}
            >
              <div className="row">
                <div className="row"></div>
              </div>
              <div className="icon">
                <Construction
                  fill="red"
                  style={{
                    height: "70px",
                    verticalAlign: "top",
                    marginTop: "20px",
                  }}
                ></Construction>
              </div>
              <div className="details" style={{ marginTop: "10px" }}>
                <h5>First Access to Pre-Construction Projects</h5>
                <h5> in Toronto & Calgary</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3">
            <div
              className="why_chose_us style2  home7"
              style={{
                paddingTop: "20px",
                minHeight: "220px",
              }}
            >
              <div className="icon" style={{ textAlign: "center" }}>
                <span>
                  <Balance
                    fill="red"
                    style={{
                      height: "70px",
                      verticalAlign: "top",
                      marginTop: "20px",
                    }}
                  ></Balance>
                </span>

                {/* <Balance></Balance> */}
              </div>
              <div className="details" style={{ marginTop: "10px" }}>
                <h5> Free Lawyer Review of </h5>
                <h5>Vendors Purchase Agreement</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div
              className="why_chose_us style2 home7"
              style={{
                paddingTop: "20px",
                minHeight: "220px",
              }}
            >
              <div className="icon">
                <Vacation
                  fill="red"
                  style={{
                    height: "70px",
                    verticalAlign: "top",
                    marginTop: "20px",
                  }}
                ></Vacation>
              </div>
              <div className="details" style={{ marginTop: "10px" }}>
                <h5> Special Incentives*</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div
              className="why_chose_us style2 home7"
              style={{
                paddingTop: "20px",
                minHeight: "220px",
              }}
            >
              <div className="icon">
                <Mortgage
                  fill="white"
                  style={{
                    height: "70px",
                    verticalAlign: "top",
                    marginTop: "20px",
                    marginLeft: "12px",
                  }}
                ></Mortgage>
              </div>
              <div className="details" style={{ marginTop: "10px" }}>
                <h5> Free Mortgage Verification </h5>
                <h5>Pre-Approval Process</h5>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ color: "white" }}></hr>
        <div className="row" style={{ textAlign: "center" }}>
          <h3 style={{ color: "white", fontWeight: "900" }}>
            Register Now & Get Exclusive Access
            {/* <b style={{ fontSize: "20px" }}>*</b> */}
          </h3>
          <br></br>
          <br></br>
        </div>
        <div className="row">
          <div
            className="singup-form"
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Form
              form={form}
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              style={{ width: "700px" }}
            >
              <Form.Item
                name="Email"
                rules={[
                  {
                    type: "email",
                  },
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="EMAIL*"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  success
                  htmlType="submit"
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "2px white solid ",
                    height: "60px",
                    width: "300px",
                  }}
                >
                  <b className="title" style={{ padding: "20px" }}>
                    GET EXCLUSIVE ACCESS
                  </b>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <RegisterModal
        open={open}
        handleOk={handleOk}
        confirmLoading={confirmLoading}
        handleCancel={handleCancel}
      ></RegisterModal>
    </section>
  );
}

export default Subscribe;
