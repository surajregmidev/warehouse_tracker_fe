import { UploadOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
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
} from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import SelectItem from "./select_item";
import SelectUnit from "./select_unit";

function PurchaseBillHeader() {
  return (
    <>
      <Space>
        <h3>Item Name</h3>
        <h3>Quantity</h3>
        <h3>Rate</h3>
        <h3>Total</h3>
      </Space>
    </>
  );
}

export default PurchaseBillHeader;
