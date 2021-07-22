//Navbar.js
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap'; 

import '../styles/personalData.scss';
import profilePhoto from '../images/foto-perfil.jpg';

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
        </Carousel>

        <Col sm={12} lg={4} className="dataContainer">
          <Row>
            <Col md={6} lg={12}>
              <img src={profilePhoto} className="profilePhoto" alt="Foto Patricio Toledo" />
              <h1>Patricio Toledo</h1>
            </Col>
            <Col md={6} lg={12}>
              <button>Fecha de Nac: 28-2-82</button>
              <button>Dirección: Av. Dorrego 898 9ºC Torre 2</button>
              <p><a href="mailto:patricio.ezequiel.toledo@gmail.com">patricio.ezequiel.toledo@gmail.com</a></p>
              <p>Tel: <a href="tel:+54 11 2185 3867">+54 11 2185 3867</a></p>
              <p><a href="https://www.linkedin.com/in/patricio-ezequiel-toledo-79745515/" target="_blank">Linkedin</a></p>
            </Col>
          </Row> 
        </Col>
      </Row>
    </Container>
  )
};
export default PersonalData;