//Navbar.js
import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

import '../styles/professionalData.scss';

const PersonalData = () => {
  const [resized,setResized] = React.useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setResized(true);
    } else {
      setResized(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })
  return (
    <Container className="professionalData" fluid>
      <Row>
        <Col md={6} lg={6} className="titleContainer odd">
          <button>Perfil Personal y Objetivos</button>
        </Col>
        <Col md={6} lg={6} className="infoContainer even">
          <p>
            <i>Responsable, proactivo, resolutivo, empático y negociador.  Muy buen manejo de relaciones interpersonales y trabajo en equipo. La flexibilidad al cambio me permite estar siempre dispuesto a nuevos desafíos. 
            Objetivos: Lograr un crecimiento profesional y económico aportando mis conocimientos, adquirir nuevos e integrar un equipo de trabajo donde todos podamos desarrollar nuestro potencial con el fin de poder aspirar a nuevos objetivos.</i>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6} className={resized? 'titleContainer odd':'titleContainer even'}>
          <button>Experiencia profesional</button>
        </Col>
        <Col md={6} lg={6} className={resized? 'infoContainer even':'infoContainer odd'}>
          <Row>
            <Col lg={12}>
              <b>Desarrollador Front End - Clip México</b><br/>
              <span>Agosto 2021 - Actualidad</span><br/>
              <p>Tecnologías:<br/>
                Javascript | EMACScript 6 | React | Nextjs | Redux | Firebase | Nodejs | Css3 | Sass | Bootstrap | GIT | NPM | YARN | NVM
              </p>
            </Col>
            <Col lg={12}>
              <b>Desarrollador Front End - Wunderman Thompson</b><br/>
              <span>Mayo 2014 - Agosto 2021</span><br/>
              <p>Tecnologías:<br/>
                Javascript | EMACScript 6 | React | React Native | Android | Redux | AEM | Expo | Facebook Connect | Firebase | Nodejs | Css3 | Sass | Bootstrap | GIT | NPM | YARN | NVM
              </p>
            </Col>
            <Col lg={12}>
              <b>Desarrollador Front End - QBK Consulting</b><br/>
              <span>Septiembre 2013 - Abril 2014</span><br/>
              <p>Tecnologías:<br/>
                Java | Struts | Javascript | CSS | HTML | SVN
              </p>
            </Col>
            <Col lg={12}>
              <b>Desarrollador Front End - ArtDecode SRL</b><br/>
              <span>Enero 2013 - Septiembre 2013</span><br/>
              <p>Tecnologías:<br/>
                Java | Struts | Javascript | CSS | HTML | SVN
              </p>
            </Col>
            <Col lg={12}>
              <b>Desarrollador Java - Snoop Consulting SRL</b><br/>
              <span>Julio 2008 - Enero 2013</span><br/>
              <p>Tecnologías:<br/>
                Struts 2 | Spring | Maven | Tomcat | Jquery | HTML | XHTML | CSS3 | Javascript | AJAX.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6} className={resized? 'titleContainer odd':'titleContainer odd'}>
          <button>Estudios</button>
        </Col>
        <Col md={6} lg={6} className={resized? 'infoContainer even':'infoContainer even'}>
        <Row>
            <Col lg={12}>
              <b>Ing. en Informatica</b><br/>
              <span>UNLaM</span><br/>
              <span>Estado: incompleto</span>
            </Col>
            <Col lg={12}>
              <b>Curso React JS</b><br/>
              <span>CodeAcademy</span><br/>
              <span>Estado: graduado</span>
            </Col>
            <Col lg={12}>
              <b>Curso React Native</b><br/>
              <span>CodeAcademy</span><br/>
              <span>Estado: graduado</span>
            </Col>
            <Col lg={12}>
              <b>Curso Android</b><br/>
              <span>Educaciont It</span><br/>
              <span>Estado: graduado</span>
            </Col>
            <Col lg={12}>
              <b>Curso Java SE</b><br/>
              <span>Educaciont It</span><br/>
              <span>Estado: graduado</span>
            </Col>
            <Col lg={12}>
              <b>Curso Java Inicial</b><br/>
              <span>Educaciont It</span><br/>
              <span>Estado: graduado</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};
export default PersonalData;