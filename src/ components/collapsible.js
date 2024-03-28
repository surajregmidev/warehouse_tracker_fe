import { Button, Row } from "antd";
import Accordion from "react-bootstrap/Accordion";
import "./collapsible.css";

function Collabsible({ project }) {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>WareHouse App tracker Incentive</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            {project.incentives}
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Capped Development Charges</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            {project.cappedDevelopmentCharges}
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Reason To Invest</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            {project.reasonToInvest}
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Deposit Structure</Accordion.Header>
        <Accordion.Body>
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.5",
              fontSize: "16px",
            }}
          >
            {project.depositStructure}
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
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

export default Collabsible;
