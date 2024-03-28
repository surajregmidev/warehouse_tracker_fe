import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function LoginRegister(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  let from = "/summary";
  if (location.state != null && location.state.from.pathname)
    from = location.state.from.pathname;

  const onFinish = (values) => {
    alert(email, password);
    login(email, password);
  };

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
      navigate(from, { replace: true });
    } catch (error) {
      message.error("Invalid Username or Password");
      console.log("error aayo bhai");
      console.log(error);
    }
  };

  return (
    <div
      className="sign_up_modal modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              style={{ backgroundColor: "#FF5A5F", border: "none" }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body container pb20">
            <div className="row">
              <div className="col-lg-12">
                <ul
                  className="sign_up_tab nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="homehome"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content container" id="myTabContent">
              <div
                className="row mt25 tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="col-lg-6 col-xl-6">
                  <div className="login_thumb">
                    <img
                      className="img-fluid w100"
                      // src="images/resource/login.jpg"
                      src="images/logo/logo.png"
                      alt="login.jpg"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <div className="login_form">
                    <form action="home">
                      <div className="heading">
                        <h4>Login</h4>
                      </div>
                      {/* <div className="row mt25">
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-fb btn-block"
                          >
                            <i className="fa fa-facebook float-left mt5"></i>{" "}
                            Login with Facebook
                          </button>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-googl btn-block"
                          >
                            <i className="fa fa-google float-left mt5"></i>{" "}
                            Login with Google
                          </button>
                        </div>
                      </div> */}
                      <hr></hr>
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
                            prefix={
                              <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                            onChange={(val) => setEmail(val.target.value)}
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
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                            onChange={(val) => setPassword(val.target.value)}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                          >
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
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                            size="large"
                            //   type="primary"
                            // htmlType="submit"
                            onClick={onFinish}
                            className="login-form-button"
                          >
                            Log in
                          </Button>
                        </Form.Item>
                      </Form>

                      <p className="text-center">
                        Don't have an account?{" "}
                        <a className="text-thm" href="/register">
                          Register
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="row mt25 tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="col-lg-6 col-xl-6">
                  <div className="regstr_thumb">
                    <img
                      className="img-fluid w100"
                      src="images/resource/regstr.jpg"
                      alt="regstr.jpg"
                    ></img>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <div className="sign_up_form">
                    <div className="heading">
                      <h4>Register</h4>
                    </div>
                    <form action="home">
                      <div className="row">
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-block btn-fb"
                          >
                            <i className="fa fa-facebook float-left mt5"></i>{" "}
                            Login with Facebook
                          </button>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-block btn-googl"
                          >
                            <i className="fa fa-google float-left mt5"></i>{" "}
                            Login with Google
                          </button>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="form-group input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputName"
                          placeholder="User Name"
                        ></input>
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="flaticon-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="form-group input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail2"
                          placeholder="Email"
                        ></input>
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="fa fa-envelope-o"></i>
                          </div>
                        </div>
                      </div>
                      <div className="form-group input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword2"
                          placeholder="Password"
                        ></input>
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="flaticon-password"></i>
                          </div>
                        </div>
                      </div>
                      <div className="form-group input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword3"
                          placeholder="Re-enter password"
                        ></input>
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="flaticon-password"></i>
                          </div>
                        </div>
                      </div>
                      <div className="form-group ui_kit_select_search mb0">
                        <select
                          className="selectpicker"
                          data-live-search="true"
                          data-width="100%"
                        >
                          <option data-tokens="SelectRole">Single User</option>
                          <option data-tokens="Agent/Agency">Agent</option>
                          <option data-tokens="SingleUser">Multi User</option>
                        </select>
                      </div>
                      <div className="form-group custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="exampleCheck2"
                        ></input>
                        <label
                          className="custom-control-label"
                          htmlFor="exampleCheck2"
                        >
                          I have read and accept the Terms and Privacy Policy?
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-log btn-block btn-thm"
                      >
                        Sign Up
                      </button>
                      <p className="text-center">
                        Already have an account?{" "}
                        <a className="text-thm" href="home">
                          Log In
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
