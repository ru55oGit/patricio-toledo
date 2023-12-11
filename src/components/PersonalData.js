//Navbar.js
import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

import "../styles/personalData.scss";
import profilePhoto from "../images/foto-perfil.jpg";

const PersonalData = () => {
  return (
    <Container className="personalData" fluid>
      <Row>
        <Carousel fade>
          <Carousel.Item>
            <div className="img-slides slide-1"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-slides slide-2"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-slides slide-3"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-slides slide-4"></div>
          </Carousel.Item>
        </Carousel>

        <Col sm={12} lg={4} className="dataContainer">
          <Row>
            <Col md={6} lg={12}>
              <img
                src={profilePhoto}
                className="profilePhoto"
                alt="Foto Valeria Carolina Toledo"
              />
              <h1>Valeria Carolina Toledo</h1>
            </Col>
            <Col md={6} lg={12}>
              <p>Fecha de Nac: 10-4-79</p>
              <p>Dirección: El Pórtico 28</p>
              <p>Ituzaingo, Buenos Aires, Argentina 🇦🇷</p>
              <p>
                <a href="mailto:vcarolinatoledo@gmail.com">
                  vcarolinatoledo@gmail.com
                </a>
              </p>
              <p>
                Tel: <a href="tel:+54 11 5830 8097">+54 11 5830 8097</a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/valeria-carolina-toledo-b07174262/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PersonalData;
