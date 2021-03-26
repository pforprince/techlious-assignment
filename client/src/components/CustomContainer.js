import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const CustomContainer = ({ children }) => {
  return (
    <div >
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomContainer;
