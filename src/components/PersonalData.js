//Navbar.js
import React from 'react';
import { Carousel, Container, Row, Col, Badge } from 'react-bootstrap'; 

import '../styles/personalData.scss';
import profilePhoto from '../images/foto-perfil.jpg';
import bk_bsas from '../images/bk-bsas.jpg';
import bk_rosa from '../images/bk-rosa.jpg';
import bk_pemo from '../images/bk-pemo.jpg';

const PersonalData = () => {

  return (
    <Container className="personalData" fluid>
      <Row>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bk_bsas}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bk_rosa}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bk_pemo}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

        <Col lg={3} className="dataContainer">
          <img src={profilePhoto} className="profilePhoto" alt="Foto Patricio Toledo" />
          <h1>Patricio Toledo</h1>
          <p>Fecha de Nac: 28-2-82</p>
          <p>Dirección: Av. Dorrego 898 9ºC Torre 2</p>
          <p><a href="mailto:patricio.ezequiel.toledo@gmail.com">patricio.ezequiel.toledo@gmail.com</a></p>
          <p>Tel: <a class="telefun" href="tel:+54 11 2185 3867">+54 11 2185 3867</a></p>
          <p><a href="https://www.linkedin.com/in/patricio-ezequiel-toledo-79745515/" target="_blank">Linkedin</a></p>
        </Col>
      </Row>
    </Container>
  )
};
export default PersonalData;