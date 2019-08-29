import React from "react";
import p3p1 from "../../assets/images/p3/1.png";
import p3p2 from "../../assets/images/p3/2.png";
import p3p3 from "../../assets/images/p3/3.png";
import "./Project3.css";
import { Col, Row } from "react-bootstrap";
import bee from "../../assets/images/bee.png";
const project3 = () => {
  return (
    <div className="project3">
       <img src={bee} alt="bee" className="bee3" />
      <img className="p3p1" src={p3p1} alt="p1" />
      
      <Row>
        <Col>
          <img src={p3p2} alt="p3p2" className="p3Table" />
        </Col>
        <Col>
          <img src={p3p3} alt="p3p3" className="p3Table" />
        </Col>
      </Row>
     
    </div>
  );
};

export default project3;
