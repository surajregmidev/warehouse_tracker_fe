import {
  UploadOutlined,
  VerticalAlignTopOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  message,
  Modal,
  Upload,
  Table,
  Popconfirm,
  AutoComplete,
  Select,
  InputNumber,
  Space,
  Form,
} from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState, useEffect } from "react";

import SelectItem from "./select_item";

import BillTotal from "../../ components/bill/bill_total";
import BillHeader from "../../ components/bill/bill_header";
import BillNote from "../../ components/bill/bill_note";

import { roundOffToTwo } from "../../util/NumberHelper";
import { over } from "lodash";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";

function SalesBillCreate({ items }) {
  const axiosPrivate = useAxiosPrivate();
  const [initialLines, setinitialLines] = useState([]);
  const [count, setcount] = useState(2);
  const navigate = useNavigate();

  const [salesBillLines, setSalesBillLines] = useState([]);
  const [salesBillTotal, setSalesBillTotal] = useState([]);
  const [salesBillHeader, setSalesBillHeader] = useState();
  const [customer, setCustomer] = useState({
    dateoforder: moment().format("YYYY-MM-DD"),
  });
  const [note, setNote] = useState("");

  useEffect(() => {
    generateLines(count);
  }, [salesBillLines]);

  const onFinish = () => {
    console.log("salesBillLines");
    console.log(salesBillLines);
    console.log(customer);
    console.log(note);
    // send purchase request
    axiosPrivate
      .post("/bill", {
        billtype: "PURCHASE",
        customername: customer.customername,
        shippingaddress: customer.shippingaddress,
        dateoforder: customer.dateoforder,
        note: customer.note,
        billdetails: salesBillLines.map((sb) => {
          return {
            itemId: sb.item.id,
            quantity: sb.quantity,
            rate: sb.rate,
          };
        }),
      })
      .then((response) => {
        message.success("Order Added Successfully");
        navigate("/purchasebill", { replace: true });
      })
      .catch((error) => {
        message.error("Error in Adding Order");
      });
  };

  const onFinishFailed = () => {
    alert("Helllo this is check! If this pops, it works!!");
  };

  const addCustomer = (customer) => {
    setCustomer({
      ...customer,
      customername: customer.customername,
      shippingaddress: customer.shippingaddress,
      dateoforder: customer.dateoforder,
    });
  };

  const addNote = (note) => {
    setNote(note);
  };

  const addToSalesBill = (salesBillLine) => {
    const inSalesBill = salesBillLines.find((sb) =>
      sb.item.id === salesBillLine.item.id ? true : false
    );

    const overrideLineNo = salesBillLines.find((sb) =>
      sb.lineNo === salesBillLine.lineNo ? true : false
    );

    if (inSalesBill && !overrideLineNo) {
      console.log("already on the item");
      return;
    }

    if (!overrideLineNo) {
      console.log("salesBillLine");
      console.log(salesBillLine);
      setSalesBillLines([...salesBillLines, salesBillLine]);
      console.log("salesBillLines");
      console.log(salesBillLines);
    } else {
      console.log("I am in override");
      setSalesBillLines(
        salesBillLines.map((sl) =>
          sl.lineNo === salesBillLine.lineNo
            ? {
                ...salesBillLine,
              }
            : sl
        )
      );
    }
  };

  const adjustQuantity = (item, quantity, lineNo) => {
    alert("in adjust quality");
    setSalesBillLines(
      salesBillLines.map((salesBillLine) =>
        lineNo === salesBillLine.lineNo
          ? {
              ...salesBillLine,
              quantity: quantity,
              lineTotal: roundOffToTwo(quantity * salesBillLine.rate),
            }
          : salesBillLine
      )
    );
  };

  const generateLines = (count) => {
    let lines = [];
    for (var i = 1; i <= count; i++) {
      lines.push(
        <SelectItem
          lineNo={i}
          salesBillLines={salesBillLines}
          addToSalesBill={addToSalesBill}
          adjustQuantity={adjustQuantity}
        ></SelectItem>
      );
    }
    setinitialLines(lines);
  };

  const increaseLines = () => {
    setinitialLines([
      ...initialLines,
      <SelectItem
        lineNo={count + 1}
        salesBillLines={salesBillLines}
        addToSalesBill={addToSalesBill}
        adjustQuantity={adjustQuantity}
      ></SelectItem>,
    ]);
    setcount(count + 1);
  };

  const decreaseLines = () => {
    // alert("count" + count);
    setinitialLines(
      initialLines.filter((initialLine) => initialLine.lineNo != count)
    );
    setcount(count - 1);
    generateLines(count - 1);
  };

  const getSubTotal = () => {
    let calculated_subTotal = 0;
    if (salesBillLines) {
      salesBillLines.forEach((salesBillLine) => {
        if (!isNaN(salesBillLine.lineTotal))
          calculated_subTotal = roundOffToTwo(
            parseFloat(calculated_subTotal) +
              parseFloat(salesBillLine.lineTotal)
          );
      });
    }
    return calculated_subTotal;
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ marginLeft: "50px", marginTop: "70px" }}
      >
        <div className="row">
          <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
          <div className="col-lg-9 col-xl-10 maxw100flex-992">
            <div className="row">
              <div className="col-xl-12">
                <div className="application_statics">
                  <div className="col-xl-10" style={{ textAlign: "center" }}>
                    <h3> Order Items</h3>
                  </div>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Space direction="horizontal" align="start">
                      <Space direction="vertical">
                        <Button
                          type="primary"
                          shape="circular"
                          icon={<PlusCircleOutlined />}
                          onClick={() => increaseLines()}
                        >
                          Add Row
                        </Button>
                        <Button
                          type="primary"
                          danger
                          shape="circular"
                          icon={<PlusCircleOutlined />}
                          onClick={() => decreaseLines()}
                        >
                          Decrease Row
                        </Button>
                        <Space>
                          <h4>SN</h4>
                          <h4 style={{ marginLeft: "0rem" }}>Item Name</h4>
                          <h4 style={{ marginLeft: "6rem" }}>Quantity</h4>
                          <h4 style={{ marginLeft: "2rem" }}>Rate</h4>
                          <h4 style={{ marginLeft: "3rem" }}>Total</h4>
                        </Space>
                        <Space direction="vertical" size="small">
                          {initialLines}
                        </Space>
                        <Space>
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
                        </Space>
                      </Space>
                      <Space direction="vertical">
                        <BillTotal
                          salesBillLines={salesBillLines}
                          salesBillTotal={salesBillTotal}
                        ></BillTotal>
                        <BillHeader
                          addCustomer={addCustomer}
                          customer={customer}
                        ></BillHeader>
                        <BillNote addNote={addNote}></BillNote>
                      </Space>
                    </Space>
                  </Form>
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
    </>
  );
}

export default SalesBillCreate;
