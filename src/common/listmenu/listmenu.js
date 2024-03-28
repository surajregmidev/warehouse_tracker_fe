import { WhatsAppOutlined } from "@ant-design/icons";

import { Col, Image, Row } from "antd";

const content = (
  <div style={{ width: "500px" }}>
    <h5>All our featured offerings have:</h5>
    <p>
      <b>
        <Image
          preview={false}
          src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
          height={30}
          width={30}
        ></Image>
      </b>{" "}
      Reputable Builder
    </p>
    <p>
      <Image
        preview={false}
        src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
        height={30}
        width={30}
      ></Image>{" "}
      Location
    </p>
    <p>
      <Image
        preview={false}
        src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
        height={30}
        width={30}
      ></Image>{" "}
      Value per Sqft / Lot Size
    </p>
    <p>
      <Image
        preview={false}
        src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
        height={30}
        width={30}
      ></Image>{" "}
      Excellent Building Amenities
    </p>
    <p>
      <Image
        preview={false}
        src="https://WareHouseTrackers3bucket.s3.amazonaws.com/others/check.png"
        height={30}
        width={30}
      ></Image>{" "}
      Upside Potential
    </p>
    <h5>Projects</h5>
    <a href="/#hot">
      <p> Hot Selling Projects</p>
    </a>
    <a href="/#feature-property">
      <p> Featured Projects</p>
    </a>
    <a href="/#previousProject">
      <p> Previous Projects</p>
    </a>
    <h5>Instant Search</h5>
    <a href="/#findByPriceAndSize">
      <p> Value</p>
    </a>
    <a href="/#findByPriceAndSize">
      <p>Square Footage</p>
    </a>
    <a href="/map?query=">
      <p> Map</p>
    </a>
  </div>
);

const equityChartContent = (
  <div style={{ width: "600px" }}>
    <Row justify="space-around">
      <Col span={8}>
        <h5> R.O.I Toronto Condos </h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/con/toronto">2010-2022</a>
          </u>
        </p>
        <h5>York Region Condos</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/con/york">2010-2022</a>
          </u>
        </p>
        <h5>Peel Region Condos</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/con/peel">2010-2022</a>
          </u>
        </p>
        <h5>Durham Region Condos</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/con/durham">2010-2022</a>
          </u>
        </p>
        <h5>Simcoe Region Condos</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/con/simcoe">2010-2022</a>
          </u>
        </p>
        <h5>Halton Region Condos</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/con/halton">2010-2022</a>
          </u>
        </p>
        <h5>Ottawa Condos</h5>
        <p>2010-2022</p>
        <h5>Alberta Condos</h5>
        <p>2010-2022</p>
      </Col>
      <Col span={8}>
        <h5> R.O.I Toronto Freehold </h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/fh/toronto">2010-2022</a>
          </u>
        </p>
        <h5>York Region Freehold</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/fh/york">2010-2022</a>
          </u>
        </p>
        <h5>Peel Region Freehold</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/fh/peel">2010-2022</a>
          </u>
        </p>
        <h5>Durham Region Freehold</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/fh/durham">2010-2022</a>
          </u>
        </p>
        <h5>Simcoe Region Freehold</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/fh/simcoe">2010-2022</a>
          </u>
        </p>
        <h5>Halton Region Freehold</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/charts/fh/halton">2010-2022</a>
          </u>
        </p>
        <h5>Ottawa Freehold</h5>
        <p>2010-2022</p>
        <h5>Alberta Freehold</h5>
        <p>2010-2022</p>
      </Col>
    </Row>
  </div>
);

const marketsContent = (
  <div style={{ width: "500px" }}>
    <Row justify="space-around">
      <Col span={8}>
        <h5>Ontario</h5>
        <h5>Toronto</h5>
        <h5>York Region</h5>
        <h5>Peel Region</h5>
        <h5>Durham Region</h5>
        <h5>Simcoe County</h5>
        <h5>Halton Region</h5>
        <h5> Niagara Region</h5>
        <h5>Ottawa</h5>
      </Col>
      <Col span={8}>
        <h5>Alberta Calgary</h5>
        <p style={{ color: "green", fontSize: "15px" }}>
          <u>
            <a href="/cal-vs-ont">
              {" "}
              <h5>Calgary Vs Ontario charts </h5>
            </a>
          </u>
        </p>
      </Col>
    </Row>
  </div>
);

const contacContent = (
  <div style={{ width: "300px" }}>
    <a href="/about-us">
      <h5>About Us</h5>
    </a>
    <a
      href={`https://wa.me/+14163037653?text=Hello! \n `}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h5>
        Chat with a Broker via Whatsapp{" "}
        <WhatsAppOutlined style={{ fontSize: "20px", color: "#52c41a" }} />
      </h5>
    </a>
    <a href="/realtor-partner" target="_blank" rel="noopener noreferrer">
      <h5>Realtor Partner</h5>
    </a>
  </div>
);

const FirstTimeBuyeContent = (
  <div style={{ width: "300px" }}>
    <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
      <u>
        <a href="/first-time-buyer">
          {" "}
          <h5>First Time Buyer</h5>
        </a>
      </u>
      <u style={{ marginTop: "100px" }}>
        <a href="/ten-things">
          {" "}
          <h5>10 Things to Know</h5>
        </a>
      </u>
      <u style={{ marginTop: "100px" }}>
        <a href="/mortgage-calc/ON">
          {" "}
          <h5>Payment calculator</h5>
        </a>
      </u>
    </div>
  </div>
);

export {
  content,
  equityChartContent,
  marketsContent,
  contacContent,
  FirstTimeBuyeContent,
};
