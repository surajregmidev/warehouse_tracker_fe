import React, { useEffect } from "react";
import { Button, Row } from "antd";
import Accordion from "react-bootstrap/Accordion";
import "./collapsible.css";
import loadjs from "loadjs";

function MobileCollapsible({ project }) {
  useEffect(() => {
    loadjs("./js/script.js", () => {});
  }, []);

  const butonClicl = () => {
    console.log("Hellop thsi is button clicked");
    console.log("ButoonClicl ");
    alert("Button is cliked!");
  };
  return (
    <Accordion defaultActiveKey="111" flush>
      <Accordion.Item eventKey="111">
        <Accordion.Header onClick={() => butonClicl()}>
          WareHouse App tracker Incentive
        </Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            <Button
              onClick={() => {
                butonClicl();
              }}
            >
              Hi{" "}
            </Button>
            "Hi" this is SUraj
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="222">
        <Accordion.Header>Capped Development Charges</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            hi
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="333">
        <Accordion.Header>Reason To Invest</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            hi
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="444">
        <Accordion.Header>Deposit Structure</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            hi
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="555">
        <Accordion.Header>Floor Plans</Accordion.Header>
        <Accordion.Body>
          {/* <div
            className="emptyFloorPlans"
            style={{
              height: "100px",
              justifyContent: "center",
              backgroundColor: "red",
            }}
          > */}
          <div className="reqDiv" style={{ backgroundColor: "#eab6b6" }}>
            <Row
              justify="space-around"
              align="middle"
              style={{ height: "100px" }}
            >
              <Button>Request</Button>
            </Row>
          </div>
          {/* </div> */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileCollapsible;
