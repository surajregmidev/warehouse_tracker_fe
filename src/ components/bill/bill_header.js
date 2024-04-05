import { UploadOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  message,
  Modal,
  Space,
  Upload,
  Select,
  InputNumber,
  DatePicker,
  Input,
} from "antd";
import React, { useState } from "react";
import moment from "moment";
import { values } from "lodash";

function BillHeader({ customer, addCustomer }) {
  const dateFormat = "YYYY-MM-DD";
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const onChangeDate = (date, dateString) => {
    addCustomer({ ...customer, dateoforder: dateString });
  };
  const onChangeName = (event) => {
    console.log("onChangeName");
    console.log(event.target.value);
    addCustomer({ ...customer, customername: event.target.value });
  };
  const onChangeAddress = (event) => {
    addCustomer({ ...customer, shippingaddress: event.target.value });
  };

  return (
    <>
      <Card title="Customer Information" style={{ width: 380 }}>
        <Space direction="vertical">
          <Space size="large">
            <p>Customer Name</p>
            <Input
              onChange={(event) => onChangeName(event)}
              style={{ width: 200 }}
              placeholder="Customer Name"
              name="customername"
            ></Input>
          </Space>
          <Space size="large">
            <p>Shipping Address</p>
            <Input
              onChange={(value) => onChangeAddress(value)}
              style={{ width: 200 }}
              placeholder="Shipping Address"
              name="shippingaddress"
            ></Input>
          </Space>
          <Space size="large">
            <p>Date of Order</p>
            <DatePicker
              name="dateoforder"
              style={{ width: 200 }}
              defaultValue={moment()}
              format={dateFormat}
              onChange={onChangeDate}
            ></DatePicker>
          </Space>
        </Space>
      </Card>
    </>
  );
}

export default BillHeader;
