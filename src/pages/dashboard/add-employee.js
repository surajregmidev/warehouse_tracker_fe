import { Button, Input, Form, message } from "antd";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await createEmployee(values.employee);
  };

  const createEmployee = async (employee) => {
    axiosPrivate
      .post("/auth/create-emplyee", {
        fullName: employee.fullName,
        email: employee.email,
        password: "tracker123",
      })
      .then((response) => {
        message.success("Employee Added Successfully");
        navigate("/employee", { replace: true });
      })
      .catch((error) => {
        message.error("Error in Adding Employee");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <section
        className="our-dashbord dashbord bgc-f7 pb50"
        style={{ marginLeft: "50px" }}
      >
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
            <div className="col-lg-9 col-xl-10 maxw100flex-992">
              <div className="row">
                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Add New Employee</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb30">Create Employee</h4>
                        <div className="my_profile_setting_input form-group">
                          <label htmlFor="propertyTitle">Employee Name</label>
                          <Form.Item
                            name={["employee", "fullName"]}
                            rules={[
                              {
                                required: true,
                                message: "Please input employee full name!",
                              },
                            ]}
                          >
                            <Input size="large" />
                          </Form.Item>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="my_profile_setting_input ui_kit_select_search form-group">
                          <label>Email </label>
                          <br></br>
                          <div>
                            <Form.Item
                              name={["employee", "email"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Email is required!",
                                },
                              ]}
                            >
                              <Input size="large" />
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <Form.Item>
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2024 WareHouse App tracker. Made with love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Form>
  );
};
export default AddEmployee;
