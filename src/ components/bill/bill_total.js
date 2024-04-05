import { UploadOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  message,
  Modal,
  Upload,
  InputNumber,
  Select,
  Row,
  Space,
  Form,
  Item,
} from "antd";
import Column from "antd/lib/table/Column";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { roundOffToTwo } from "../../util/NumberHelper";

function BillTotal({
  salesBillLines,
  calculateBillTotal,
  salesBillTotal,
  calculateRemainingAmount,
}) {
  const [subTotal, setSubTotal] = useState(100);

  useEffect(() => {
    console.log("salesBillLines in BillTotal");
    console.log(salesBillLines);
    console.log("subtotol");
    console.log(subTotal);
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

    setSubTotal(calculated_subTotal);
  }, [salesBillLines]);

  return (
    <>
      <Card style={{ width: 380, marginTop: 40 }}>
        <Space direction="vertical">
          <Space size={60}>
            <h4>Total Amount</h4>
            <InputNumber min={1} value={subTotal}></InputNumber>
          </Space>
        </Space>
      </Card>
    </>
  );
}

export default BillTotal;
