import { useState, useEffect } from "react";
import { Space, Table, Button, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { axiosPrivate } from "../../api/axios";
import DeleteProject from "./delete-project";

const ListProject = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [projects, setProjects] = useState([]);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [fetAgain, setfetAgain] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosPrivate.get("/item");
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
      const response = await axiosPrivate.get("/item");
      const projectsData = response.data.data.map((d) => ({
        ...d,
        key: d.id,
      }));
      setProjects(projectsData);
      setLoadingState(false);
    } else {
      const url = "/item?searchKey=" + searchKey;
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
      title: "Item",
      dataIndex: "nameSlug",
      key: "nameSlug",
      render: (_, record) => (
        <>
          <th scope="row">
            <div className="feat_property list favorite_page style2">
              <div className="details" style={{ width: "200px" }}>
                <div className="tc_content">
                  <h4>{record.name}</h4>
                  <small>Cost Price :</small>
                  {(+record.costprice).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                  <br></br>
                  <small>Sale Price: </small>
                  {(+record.sellingprice).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>
          </th>
        </>
      ),
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (text) => text,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => text,
    },
    {
      title: "Stored At",
      dataIndex: "storinglocation",
      key: "storinglocation",
      render: (text) => text,
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text) => text,
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ul className="view_edit_delete_list mb0">
            <li
              className="list-inline-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Edit"
            >
              <a href={`item/edit/${record.id}`}>
                <Button
                  type="link"
                  primary
                  size="large"
                  // onClick={() => {
                  //   setSelectedDeveloper(record);
                  //   setEditModalOpen(true);
                  // }}
                >
                  <span className="flaticon-edit"></span>
                </Button>
              </a>
            </li>
            <li
              className="list-inline-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete"
            >
              <Button
                type="link"
                danger
                size="large"
                onClick={() => {
                  setSelectedId(record.id);
                  setDeleteModalOpen(true);
                }}
              >
                <span className="flaticon-garbage"></span>
              </Button>
            </li>
          </ul>
        </Space>
      ),
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
                    <h4>Items</h4>
                  </div>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Row justify="space-between">
                      <Col>
                        <div classNameName="add_new_dev">
                          <a href="/additem">
                            <Button type="primary">Add New Item</Button>
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
                      id={selectedId}
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
export default ListProject;
