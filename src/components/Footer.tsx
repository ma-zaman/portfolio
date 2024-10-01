import { Col, Container, Row } from "react-bootstrap"
import logo_dark from '@icons/logo_dark.png';
import github from '@icons/github_dark.png';
import linkedin from '@icons/linkedin_dark.png';
import instagram from '@icons/instagram_dark.png';

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo_dark} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a
                href="https://github.com/ma-zaman"
                target="_blank"
                className="px-1"
              >
                <img src={github} alt=""/>
              </a>
              <a
                href="https://www.instagram.com/alizaman.fr/"
                target="_blank"
                className="px-1"
              >
                <img src={instagram} alt=""/>
              </a>
              <a
                href="https://www.linkedin.com/in/mali-zaman/"
                target="_blank"
                className="px-1"
              >
                <img src={linkedin} alt=""/>
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}