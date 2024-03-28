import Footer from "../../common/footer";
import LoginRegister from "../../common/login-register";
import SidebarMobile from "../../common/sidebar-mobile";
import PlainHeader from "../single-property/PlainHeader";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input, message } from "antd";
import axios from "../../api/axios";

function SignUp() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    signup(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //
  const signup = async (model) => {
    model.role = "CUSTOMER";
    axios
      .post("/auth/signup", model)
      .then(() => {
        message.success("Sign Up successful! Please login");
        navigate("/login", { replace: true });
      })
      .catch((res) => {
        console.log("RES");
        console.log(res);
        console.log("done");
        message.error(res.response.data.errors[0].msg);
      });
  };

  return (
    <>
      <PlainHeader></PlainHeader>

      {/*<!-- Modal -->*/}
      <LoginRegister></LoginRegister>

      {/*<!-- Main Header Nav For Mobile -->*/}
      <SidebarMobile></SidebarMobile>

      {/* <!-- Our LogIn Register --> */}

      <section className="our-log-reg bgc-fa" style={{ paddingTop: "7%" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your fullname!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default SignUp;
