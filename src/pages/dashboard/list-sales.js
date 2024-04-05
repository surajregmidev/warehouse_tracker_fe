import { useState, useEffect } from "react";
import { Space, Table, Button, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import MarkDeliver from "./ mark-deliver";

const ListSales = () => {
  const axiosPrivate = useAxiosPrivate();
  const [loadingState, setLoadingState] = useState(true);
  const [projects, setProjects] = useState([]);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [fetAgain, setfetAgain] = useState(1);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosPrivate.get("/bill");
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
      const response = await axiosPrivate.get("/bill");
      const projectsData = response.data.data.map((d) => ({
        ...d,
        key: d.id,
      }));
      setProjects(projectsData);
      setLoadingState(false);
    } else {
      const url = "/billl?searchKey=" + searchKey;
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
      title: "Date Of Order",
      dataIndex: "dateoforder",
      key: "dateoforder",
      render: (text) => text,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => text,
    },
    {
      title: "Shipping Address",
      dataIndex: "shippingaddress",
      key: "shippingaddress",
      render: (text) => text,
    },
    {
      title: "Order Status",
      dataIndex: "orderstatus",
      key: "orderstatus",
      render: (text) => text,
    },
    {
      title: "Notes",
      dataIndex: "note",
      key: "note",
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
              <Button
                type="link"
                danger
                size="large"
                onClick={() => {
                  setSelectedId(record.id);
                  setDeleteModalOpen(true);
                }}
              >
                <span className="flaticon-edit"></span>
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
                    <h4>Sales</h4>
                  </div>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Row justify="space-between">
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
                    <MarkDeliver
                      id={selectedId}
                      open={deleteModalOpen}
                      setOpen={setDeleteModalOpen}
                      setfetAgain={setfetAgain}
                      fetAgain={fetAgain}
                    ></MarkDeliver>
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
export default ListSales;
