import { useState, useEffect } from "react";
import { Space, Table, Button, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { axiosPrivate } from "../../api/axios";
import DeleteProject from "./delete-project";

const ListEmployee = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [projects, setProjects] = useState([]);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [fetAgain, setfetAgain] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosPrivate.get("/auth/get-emplyee");
      const projectsData = response.data.data.map((d) => ({
        ...d,
        key: d.id,
      }));
      setProjects(projectsData);
      setLoadingState(false);
    }
    fetchData();
  }, [fetAgain]);

  const handleOnChange = async (e) => {
    const searchKey = e.target.value;
    setLoadingState(true);
    if (e.target.value === "") {
      const response = await axiosPrivate.get("/auth/get-emplyee");
      const projectsData = response.data.data.map((d) => ({
        ...d,
        key: d.id,
      }));
      setProjects(projectsData);
      setLoadingState(false);
    } else {
      const url = "/auth/get-emplyee?searchKey=" + searchKey;
      const response = await axiosPrivate.get(url);
      const projectsData = response.data.data.map((d) => ({
        ...d,
        key: d.id,
      }));
      setProjects(projectsData);
      setLoadingState(false);
    }
  };

  const columns = [
    {
      title: "FullName",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => text,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => text,
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
      render: (text) => text,
    },
  ];
  return (
    <section
      className="our-dashbord dashbord bgc-f7 pb50"
      style={{ marginLeft: "50px" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
          <div className="col-lg-9 col-xl-10 maxw100flex-992">
            <div className="row">
              <div className="col-xl-12">
                <div className="application_statics">
                  <div style={{ textAlign: "center" }}>
                    <h4>Employees</h4>
                  </div>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Row justify="space-between">
                      <Col>
                        <div classNameName="add_new_dev">
                          <a href="/addemployee">
                            <Button type="primary">Add New Employee</Button>
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div classNameName="search_in_datatable">
                          <Input
                            placeholder="Search"
                            prefix={<SearchOutlined />}
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Table
                      loading={loadingState}
                      columns={columns}
                      dataSource={projects}
                    />
                    <DeleteProject
                      open={deleteModalOpen}
                      setOpen={setDeleteModalOpen}
                      setfetAgain={setfetAgain}
                      fetAgain={fetAgain}
                    ></DeleteProject>
                  </Space>
                </div>
              </div>
            </div>
            <div className="row mt50">
              <div className="col-lg-6 offset-lg-3">
                <div className="copyright-widget text-center">
                  <p>© 2024 . Made with love.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ListEmployee;
