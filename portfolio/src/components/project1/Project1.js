import React from "react";
import p1 from "../../assets/images/p1/1.png";
import p2 from "../../assets/images/p1/2.png";
import p3 from "../../assets/images/p1/3.png";
import p4 from "../../assets/images/p1/4.png";
import p5 from "../../assets/images/p1/5.png";
import p6 from "../../assets/images/p1/6.jpg";
import detail1 from "../../assets/images/p1/detail.png";
import bee from "../../assets/images/bee.png";
import { Row, Col } from "react-bootstrap";
import "./Project1.css";
const project1 = () => {
  return (
    <div className="project1">
      <img id="p1p1" src={p1} alt="p1" />
      <img src={detail1} alt="detail" id="detail1"/>
      <img src={bee} alt="bee" id="bee1"/>
      <Row>
        <Col>
          <img className="p1imgs" src={p2} alt="p2" />
        </Col>
        <Col>
          <img className="p1imgs" src={p3} alt="p3" />
        </Col>
        <Col>
          <img className="p1imgs" src={p4} alt="p4" />
        </Col>
        <Col>
          <img className="p1imgs" src={p5} alt="p5" />
        </Col>
        <Col>
          <img className="p1imgs" src={p6} alt="p6" />
        </Col>
      </Row>
      
    </div>
  );
};
export default project1;
