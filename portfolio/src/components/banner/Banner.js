import React from "react";
import Bricks from "../bricks/Bricks";
import Title from "../title/Title";
import {Container, Row, Col} from "react-bootstrap";
import StandGirl from "../standGirl/StandGirl";
import ScrollLabel from "../scrollLabel/ScrollLabel";
const banner = () => {
  return (
    <div>
        <StandGirl />
      <Container>
        <Row>
          <Col>
            <Title />
          </Col>
          <Col>
         <Bricks />
          </Col>
        </Row>
      </Container>
      
      <ScrollLabel />
      
      
    </div>
  );
};
export default banner;
