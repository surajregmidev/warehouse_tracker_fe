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
} from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

function SelectUnit() {
  const [data, setData] = useState([{}]);
  const [value, setValue] = useState();
  const [url, setUrl] = useState();

  const [units, setUnits] = useState();

  const options = data.map((d) => <Option key={d.name}>{d.name}</Option>);

  const handleSearch = (value) => {
    const changedUrl = "/items/search?keyWord=" + value;
    setUrl(changedUrl);
  };

  const handleChange = (value) => {
    console.log("Selected Value");
    console.log(value);
    setValue(value);
  };

  useEffect(() => {
    async function fetchData(url) {
      const request = await axios.get(url);
      if (url === "/items") {
        setData(request.data.responseClassType.content);
      } else {
        setData(request.data.responseClassType);
      }
    }
    if (url != null) {
      var timeOutId = setTimeout(() => fetchData(url), 2000);
    } else {
      fetchData("/items");
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [url]);

  return (
    <>
      <Select defaultValue="pcs" style={{ width: 120 }} onChange={handleChange}>
        <Option value="pcs">Pcs</Option>
        <Option value="dozens">Dozens</Option>
      </Select>
    </>
  );
}

export default SelectUnit;
