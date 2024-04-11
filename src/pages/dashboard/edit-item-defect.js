import { useState, useEffect } from "react";
import { Button, Input, Form, message } from "antd";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import loadjs from "loadjs";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditItemDefect = () => {
  const { id } = useParams();

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const [item, setitem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response1 = await axiosPrivate.get(`/item/${id}`);
      setitem(response1.data.data);
      setIsLoading(false);
    }
    fetchData();
    loadjs("/js/script.js", () => {});
  }, [axiosPrivate, id]);

  const onFinish = async (values) => {
    console.log("Success:", values);
    await updateProjects({ ...values.item });
  };

  const updateProjects = async (item) => {
    axiosPrivate
      .post(`/item/${id}`, {
        quantity: parseInt(item.quantity) - parseInt(item.defquantity),
      })
      .then((response) => {
        message.success("Item Adjusted Successfully");
        navigate("/itememp", { replace: true });
      })
      .catch((error) => {
        message.error("Error in Adjusting Item");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
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
                        <h2 className="breadcrumb_title">
                          Enter the Defect Item
                        </h2>
                        <p>We are glad to see you again!</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="my_dashboard_review">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="mb30">Create Item</h4>
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="propertyTitle">Item Name</label>
                              <Form.Item
                                name={["item", "name"]}
                                initialValue={item.name}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your item name!",
                                  },
                                ]}
                              >
                                <Input disabled={true} size="large" />
                              </Form.Item>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="my_profile_setting_input ui_kit_select_search form-group">
                              <label>Code </label>
                              <br></br>
                              <div>
                                <Form.Item
                                  name={["item", "code"]}
                                  initialValue={item.code}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Code is required!",
                                    },
                                  ]}
                                >
                                  <Input disabled={true} size="large" />
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="my_profile_setting_input ui_kit_select_search form-group">
                              <label>Available Quantity</label>
                              <br></br>
                              <div>
                                <Form.Item
                                  name={["item", "quantity"]}
                                  initialValue={item.quantity}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Quantity is required!",
                                    },
                                  ]}
                                >
                                  <Input disabled size="large" />
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="my_profile_setting_input ui_kit_select_search form-group">
                              <label>Defect Quantity</label>
                              <br></br>
                              <div>
                                <Form.Item
                                  name={["item", "defquantity"]}
                                  initialValue={0}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Quantity is required!",
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
                                Make Adjustment
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
      )}
    </>
  );
};
export default EditItemDefect;
