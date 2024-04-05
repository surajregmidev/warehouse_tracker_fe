import { message, Select, InputNumber, Space, Form } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function SelectItem({
  lineNo,
  salesBillLines,
  addToSalesBill,
  adjustQuantity,
}) {
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([{}]);
  const [value, setValue] = useState();
  const [url, setUrl] = useState();
  const [unitOptions, setUnitOptions] = useState();
  const [itemOptions, setItemOptions] = useState();

  const [salesBillLine, setSalesBillLine] = useState({});

  const handleSearch = (value) => {
    const changedUrl = "/item?searchKey=" + value;
    setUrl(changedUrl);
  };

  const handleChange = (value) => {
    if (!value) {
      return;
    }
    const itemAlreadyOnSalesLine = salesBillLines.find((salesBillLine) =>
      salesBillLine.item.id == value ? true : false
    );

    if (itemAlreadyOnSalesLine) {
      message.error("Already on the bill");
      return;
    }

    const selectedItem = data.find((item) => {
      return item.id == value;
    });

    setValue(value);

    const currSalesBillLine = {
      ...salesBillLine,
      lineNo: lineNo,
      item: selectedItem,
      itemName: selectedItem.name,
      rate: roundOffToTwo(selectedItem.sellingprice),
    };

    setSalesBillLine(currSalesBillLine);

    addToSalesBill(currSalesBillLine);
  };

  const roundOffToTwo = (value) => {
    if (value != null) {
      return Number(value).toFixed(2);
    }
  };

  const handleChangeQuantity = (value) => {
    setSalesBillLine({
      ...salesBillLine,
      quantity: value,
      lineTotal: roundOffToTwo(salesBillLine.rate * value),
    });
    addToSalesBill({
      ...salesBillLine,
      quantity: value,
      lineTotal: roundOffToTwo(salesBillLine.rate * value),
    });
  };

  const handleReset = () => {
    setSalesBillLine({ itemName: "Test it" });
    setValue(null);
  };

  useEffect(() => {
    async function fetchData(url) {
      const request = await axiosPrivate.get(url);
      if (url === "/item") {
        setData(request.data.data);

        const itemsObtainedTest = request.data.data;

        const fi = itemsObtainedTest.filter(function f1(array_io) {
          return (
            salesBillLines.filter(function f2(array_sb) {
              return array_io.id == array_sb.item.id;
            }).length == 0
          );
        });

        setItemOptions(fi.map((d) => <Option key={d.id}>{d.name}</Option>));
      } else {
        setData(request.data.data);
        const fik = request.data.data.filter(function f1(array_io) {
          return (
            salesBillLines.filter(function f2(array_sb) {
              return array_io.id == array_sb.item.id;
            }).length == 0
          );
        });
        setItemOptions(fik.map((d) => <Option key={d.id}>{d.name}</Option>));
      }
    }
    if (url != null) {
      var timeOutId = setTimeout(() => fetchData(url), 2000);
    } else {
      fetchData("/item");
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [url, salesBillLines]);

  return (
    <>
      <Space size={3}>
        <Space direction="horizontal">
          {lineNo < 10 ? (
            <h4 style={{ marginRight: "0.5rem" }}>{lineNo}</h4>
          ) : (
            <h4 style={{ marginRight: "0rem" }}>{lineNo}</h4>
          )}
        </Space>
        <Form.Item
          name={[lineNo, "item"]}
          rules={[
            {
              required: true,
              message: "*",
            },
          ]}
        >
          <Select
            allowClear
            value={value}
            style={{ width: 200 }}
            showSearch
            showArrow={true}
            onSearch={(value) => handleSearch(value)}
            onChange={(value) => handleChange(value)}
            defaultActiveFirstOption={false}
            filterOption={false}
            placeholder="Item Name"
            notFoundContent="no item found"
            onClear={(value) => {
              handleReset(value);
            }}
          >
            {itemOptions}
          </Select>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "*",
            },
          ]}
        >
          <InputNumber
            min={1}
            value={salesBillLine.quantity}
            onChange={(value) => handleChangeQuantity(value)}
          ></InputNumber>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "*",
            },
          ]}
        >
          <InputNumber min={5} value={salesBillLine.rate}></InputNumber>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "*",
            },
          ]}
        >
          <InputNumber min={1} value={salesBillLine.lineTotal}></InputNumber>
        </Form.Item>
      </Space>
    </>
  );
}

export default SelectItem;
