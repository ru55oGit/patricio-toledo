//Navbar.js
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/professionalData.scss";

const PersonalData = () => {
  const [resized, setResized] = React.useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setResized(true);
    } else {
      setResized(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Container className="professionalData" fluid>
      <Row>
        <Col md={6} lg={6} className="titleContainer odd">
          <button>Perfil Personal y Objetivos</button>
        </Col>
        <Col md={6} lg={6} className="infoContainer even">
          <p>
            <i>
              Responsable, proactiva, resolutiva, empática y negociadora. Muy
              buen manejo de relaciones interpersonales y trabajo en equipo. La
              flexibilidad al cambio me permite estar siempre dispuesta a nuevos
              desafíos. Objetivos: Lograr un crecimiento profesional y económico
              aportando mis conocimientos, adquirir nuevos e integrar un equipo
              de trabajo donde todos podamos desarrollar nuestro potencial con
              el fin de poder aspirar a nuevos objetivos.
            </i>
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          lg={6}
          className={resized ? "titleContainer odd" : "titleContainer even"}
        >
          <button>Experiencia laboral</button>
        </Col>
        <Col
          md={6}
          lg={6}
          className={resized ? "infoContainer even" : "infoContainer odd"}
        >
          <Row>
            <Col lg={12}>
              <b>Administrativa/Recepcionista</b>
              <br />
              <p>
                Agape. Centro de día. 2010 - 2022
                <br />
              </p>
              <ul>
                <li>Atención al público</li>
                <li>Atención Telefónica</li>
                <li>Pre-facturación de pacientes</li>
                <li>Desarrollo y actualización de los sistemas de archivo</li>
                <li>Manejo de CRM</li>
              </ul>
            </Col>
            <Col lg={12}>
              <b>Recepcionista</b>
              <br />
              <p>Call Center Heladería Freddo. 2005 - 2010</p>
              <ul>
                <li>Asistente de Administración</li>
                <li>Atención Telefónica</li>
                <li>Resolución de problemas de quejas y consultas</li>
              </ul>
            </Col>
            <Col lg={12}>
              <b>Administrativa</b>
              <br />
              <p>Multiled. 2004 - 2005</p>
              <ul>
                <li>Asistente de Administración</li>
                <li>Atención Telefónica</li>
                <li>Resolución de problemas de quejas y consultas</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          lg={6}
          className={resized ? "titleContainer odd" : "titleContainer odd"}
        >
          <button>Estudios</button>
        </Col>
        <Col
          md={6}
          lg={6}
          className={resized ? "infoContainer even" : "infoContainer even"}
        >
          <Row>
            <Col lg={12}>
              <b>Secundario Completo</b>
              <br />
              <span>Bachiller Humanístico, San Jose de Calasanz (1992)</span>
              <br />
            </Col>
            <Col lg={12}>
              <b>OTROS CONOCIMIENTOS</b>
              <br />
              <ul>
                <li>Manejo de Paquete Office</li>
                <li>Curso Coaching y Liderazgo, Thelema (2022)</li>
                <li>
                  Curso Entrenamiento de transformación Personal, Thelema (2022)
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PersonalData;
