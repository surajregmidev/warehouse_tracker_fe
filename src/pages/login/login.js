import React, { useEffect } from "react";
import Footer from "../../common/footer";
import LoginRegister from "../../common/login-register";
import SidebarMobile from "../../common/sidebar-mobile";
import PlainHeader from "../single-property/PlainHeader";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

import loadjs from "loadjs";

function Login() {
  useEffect(() => {
    loadjs("./js/script.js", () => {});
  }, []);

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  let from = "/summary";
  if (location.state != null && location.state.from.pathname)
    from = location.state.from.pathname;

  const onFinish = (values) => {
    login(values.email, values.password);
  };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      const user = response.data.data.user;
      setAuth({ accessToken, refreshToken, user });
      console.log({ accessToken, refreshToken, user });
      navigate(from, { replace: true });
    } catch (error) {
      message.error("Invalid Username or Password");
      console.log("error aayo bhai");
      console.log(error);
    }
  };
  return (
    <>
      <PlainHeader></PlainHeader>

      {/*<!-- Modal -->*/}
      <LoginRegister></LoginRegister>

      {/*<!-- Main Header Nav For Mobile -->*/}
      <SidebarMobile></SidebarMobile>

      {/* <!-- Inner Page Breadcrumb --> */}
      {/* <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="breadcrumb_content">
                <h4 className="breadcrumb_title">Logın</h4>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Logın
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Our LogIn Register --> */}
      <section className="our-log bgc-fa" style={{ paddingTop: "7%" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <div className="login_form inner_page">
                {/* <form action="#">
                  <div className="heading">
                    <h3 className="text-center">Login to your account</h3>
                    <p className="text-center">
                      Don't have an account?{" "}
                      <a className="text-thm" href="page-register.html">
                        Sign Up!
                      </a>
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Email Address"
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword4"
                      placeholder="Password"
                    ></input>
                  </div>
                  <div className="form-group custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="exampleCheck3"
                    ></input>
                    <label className="custom-control-label" for="exampleCheck3">
                      Remember me
                    </label>
                    <a className="tdu btn-fpswd float-right" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-log btn-block btn-thm2">
                    Login
                  </button>
                  <div className="divide">
                    <span className="lf_divider">Or</span>
                    <hr></hr>
                  </div>
                  <div className="row mt40">
                    <div className="col-lg">
                      <button
                        type="submit"
                        className="btn btn-block color-white bgc-fb mb0"
                      >
                        <i className="fa fa-facebook float-left mt5"></i> Facebook
                      </button>
                    </div>
                    <div className="col-lg">
                      <button
                        type="submit"
                        className="btn btn2 btn-block color-white bgc-gogle mb0"
                      >
                        <i className="fa fa-google float-left mt5"></i> Google
                      </button>
                    </div>
                  </div>
                </form> */}
                <div className="heading">
                  <h3 className="text-center">Login to your account</h3>
                  <p className="text-center">
                    Don't have an account?{" "}
                    <a className="text-thm" href="/register">
                      Sign Up!
                    </a>
                  </p>
                </div>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/">
                      Forgot password?
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      style={{
                        background: "#FF5A5E",
                        borderColor: "#FF5A5E",
                        color: "white",
                        width: "100%",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                      size="large"
                      //   type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Login;
