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
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import Column from "antd/lib/table/Column";
import React, { useState } from "react";

function BillNote({ addNote }) {
  return (
    <>
      <Card title="Note/Remarks" style={{ width: 380 }}>
        <TextArea
          rows={6}
          onChange={(event) => addNote(event.target.value)}
        ></TextArea>
      </Card>
    </>
  );
}

export default BillNote;
