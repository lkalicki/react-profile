import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../assets/LukaszKalicki.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Lukasz Kalicki</strong>.
              </h1>

              <p className="heading-description blockquote">
                I am eagerly looking forward to starting my career as a developer.
                Every opportunity I have, I strive to learn more and pick up new
                skills to help propel me even further in my career or life.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={ProfilePic} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      </Container>
    </section>
  );
}

export default Home;
