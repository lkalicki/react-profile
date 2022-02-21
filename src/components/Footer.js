import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4">
       </Col>
        <Col md="4" className="footer-body">
          <SocialMedia />
        </Col>
        <Col md="4">
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
