import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Summary = () => {
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
                              I3 Infosoft
                            </h3>
                            <h4>
                              Frontend Developer &nbsp;||&nbsp; May'23 - Present
                              &nbsp;||&nbsp; Noida
                            </h4>
                            <p>
                              Worked on developing dynamic, user-friendly
                              websites and created responsive web pages for
                              training and web development modules using HTML,
                              CSS, Bootstrap, React and Javascript.
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Astrople Technology
                            </h3>
                            <h4>
                              Website Developer Intern &nbsp;||&nbsp; Nov'22 -
                              April'23 &nbsp;||&nbsp; Remote
                            </h4>
                            <p>
                              Developed responsive user interface using HTML,
                              CSS and Bootstrap for multiple websites.
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Freelancer
                            </h3>
                            <h4>
                              Frontend Developer Intern &nbsp;||&nbsp;
                              Aug'22-Oct'22 &nbsp;||&nbsp; Remote
                            </h4>
                            <p>
                              Prepared web training projects for a coaching
                              institute using HTML, CSS, Bootstrap and
                              Javascript.
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
                            <p>I have done my graduation from NIT Bhopal.</p>
                            <p>
                              Mechanical engineering ( 2016 - 2020 ), with 7.05
                              CGPA
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Intermediate
                            </h3>
                            <p>
                              I have done my Intermediate from John Milton
                              Public School, Agra.
                            </p>
                            <p>
                              Central Board of Secondary Education(2015), with
                              77.60%
                            </p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ color: "yellow", fontSize: "2em" }}>
                              Matriculation
                            </h3>
                            <p>
                              I have done my Matriculation from John Milton
                              Public School, Agra.
                            </p>
                            <p>
                              Central Board of Secondary Education(2013), with
                              9.0
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
                            <p>
                              Passionate Frontend web developer<br></br> with a
                              commitment to continuous learning<br></br> and
                              professional growth.
                            </p>
                            <p>Noida sector 40, U.P</p>
                            <p>+91-7389757704</p>
                            <p>rahul.jadon74096@gmail.com</p>
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
