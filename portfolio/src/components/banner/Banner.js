import React from "react";
import Bricks from "../bricks/Bricks";
import Title from "../title/Title";
import {Container, Row, Col} from "react-bootstrap";
const banner = () => {
  return (
    <div>
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
    </div>
  );
};
export default banner;
