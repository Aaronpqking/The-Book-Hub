import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFolder } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Container fluid className="text-light page-footer d-flex pt-3 bg-dark">
                <Container>
                    <h5 className='pt-4'>Contact Us</h5>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="no-bullets">
                            <li><h6>Aaron King</h6></li>
                            <li>
                                <a className="footer-link" href="https://aaronpqking.github.io/cv">
                                    <span className="pr-3">
                                        <FaFolder />
                                    </span>
                                    https://aaronpqking.github.io/cv
                                </a>
                            </li>
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
                                    Aaron King
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
                        <ul className="no-bullets">
                            <li><h6>Roman Sokol</h6></li>
                            <li>
                                <a className="footer-link" href="https://github.com/sokolroman/react-portfolio">
                                    <span className="pr-3">
                                        <FaFolder />
                                    </span>
                                    https://github.com/sokolroman/react-portfolio
                                </a>
                            </li>
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
                        <ul className="no-bullets">
                            <li><h6>Hector Perez</h6></li>
                            <li>
                                <a className="footer-link" href="https://">
                                    <span className="pr-3">
                                        <FaFolder />
                                    </span>
                                    https://vanessalane.herokuapp.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="mailto:hperez.oh@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    hperez.oh@gmail.com

                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/noviceprogrammeroh">
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    noviceprogrammeroh
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/hectorper/
">
                                    <span className="pr-3">
                                        <FaLinkedin />
                                    </span>
                                    hectorper
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
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
                </Container>
            </Container>
        </>
    )
};
export default Footer;