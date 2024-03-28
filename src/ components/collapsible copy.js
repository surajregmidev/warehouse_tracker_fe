import Accordion from "react-bootstrap/Accordion";
import "./collapsible.css";

function CollabsibleForDetail({ project }) {
  return (
    <Accordion defaultActiveKey="3" flush>
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
    </Accordion>
  );
}

export default CollabsibleForDetail;
