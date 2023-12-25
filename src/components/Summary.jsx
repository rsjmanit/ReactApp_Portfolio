import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Summary = () => {
  const cssPara = {
    margin: "0.5rem auto",
    textAlign: "center",
  };
  return (
    <section className="project" id="summary">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Resume</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Professional Exp.</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="project-desc-div">
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Variables Software
                            </h3>
                            <h4>Frontend Developer</h4>
                            <h4>July'22 - Present &nbsp;||&nbsp; Noida</h4>
                            <p style={cssPara}>
                              <span style={{ fontSize: "1.8rem" }}>
                                &bull;{" "}
                              </span>
                              Worked on online pharmacy application where we
                              developed user interface using
                              <strong> React, Redux</strong> and used
                              <strong> SCSS</strong> to customize style of web
                              pages.
                            </p>
                            <p style={cssPara}>
                              <span style={{ fontSize: "1.8rem" }}>
                                &bull;{" "}
                              </span>
                              Utilised <strong>Redux</strong> for the state
                              management to increase development performance and
                              scalability.
                            </p>
                            <p style={cssPara}>
                              <span style={{ fontSize: "1.8rem" }}>
                                &bull;{" "}
                              </span>
                              Optimised code and resolved bugs of existing web
                              applications.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="project-desc-div">
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Graduation
                            </h3>
                            <p style={cssPara}>
                              I have done my graduation from NIT Bhopal.
                            </p>
                            <p style={cssPara}>
                              Mechanical engineering (2016 - 2020)
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Intermediate
                            </h3>
                            <p style={cssPara}>
                              I have done my Intermediate from John Milton
                              Public School, Agra.
                            </p>
                            <p style={cssPara}>
                              Central Board of Secondary Education (2015)
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Matriculation
                            </h3>
                            <p style={cssPara}>
                              I have done my Matriculation from John Milton
                              Public School, Agra.
                            </p>
                            <p style={cssPara}>
                              Central Board of Secondary Education(2013)
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="project-desc-div">
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Rahul Singh Jadon
                            </h3>
                            <p style={cssPara}>
                              Passionate Frontend web developer<br></br> with a
                              commitment to continuous learning<br></br> and
                              professional growth.
                            </p>
                            <p style={cssPara}>+91-7389757704</p>
                            <p style={cssPara}>rahul.jadon74096@gmail.com</p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
