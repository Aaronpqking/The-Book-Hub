import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../Style/footer.css";

const Footer = () => {
    return (
      <>
        <Container fluid className="text-light page-footer d-flex pt-3 bg-dark">
          <Container>
            <h5 className="pt-4">Contact Us</h5>
            <Row className="pb-4 justify-content-between">
              <Col xs={12} md={4}>
                <ul className="no-bullets d-inline-block">
                  <li><h6>Aaron King</h6></li>
                  <li>
                    <a className="footer-link" href="mailto:aaronpqking@gmail.com">
                      <span className="pr-3">
                        <FaEnvelope />
                      </span>
                      aaronpqking@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://github.com/aaronpqking">
                      <span className="pr-3">
                        <FaGithub />
                      </span>
                      Aaronpqking
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://www.linkedin.com/in/aaronpqking">
                      <span className="pr-3">
                        <FaLinkedin />
                      </span>
                      Aaronpqking
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <ul className="no-bullets d-inline-block">
                  <li><h6>Roman Sokol</h6></li>
                  <li>
                    <a className="footer-link" href="mailto:sokolroman@proton.me">
                      <span className="pr-3">
                        <FaEnvelope />
                      </span>
                      sokolroman@proton.me
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://github.com/sokolroman">
                      <span className="pr-3">
                        <FaGithub />
                      </span>
                      sokolroman
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://www.linkedin.com/in/romansokol1/">
                      <span className="pr-3">
                        <FaLinkedin />
                      </span>
                      Romansokol1
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <ul className="no-bullets d-inline-block">
                  <li><h6>Hector Perez</h6></li>
                  <li>
                    <a className="footer-link" href="mailto:hperez.oh@gmail.com">
                      <span className="pr-3">
                        <FaEnvelope />
                      </span>
                      hperez.oh@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://github.com/hperezoh">
                      <span className="pr-3">
                        <FaGithub />
                      </span>
                      hperezoh
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://www.linkedin.com/in/hperezoh/">
                      <span className="pr-3">
                        <FaLinkedin />
                      </span>
                      hperezoh
                    </a>
                  </li>
                </ul>
              </Col>
                    </Row>
                    <Row className="pb-4 justify-content-between">
              <Col xs={12} md={4}>

                    <div>
                        <p>© 2022</p>
                        <p>
                            <a className="footer-link" href="https://github.com/sokolroman/the-book-hub">
                                <span className="pr-3">
                                    <FaGithub />
                                </span>
                                Visit the GitHub Repo
                            </a>
                        </p>
                            </div>       
                            </Col>
                    </Row>        
            </Container>        
            </Container>
        </>
    )
};            
export default Footer;