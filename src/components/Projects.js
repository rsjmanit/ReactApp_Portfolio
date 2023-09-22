import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // Project Based On React
  const projectsOfTab1 = [
    {
      title: "Note Taking App",
      description:
        "Developed a user-friendly Note-Taking App with React, for effortless task and idea management. Easily add, complete, and delete tasks with titles and content. Stay organized with simplicity.",
      imgUrl: projImg1,
      srcOfApp: "https://rsjmanit.github.io/React_App_NoteTaking/",
    },
    {
      title: "Personal Portfolio",
      description:
        "Unlock the door to my projects and skills with this interactive React portfolio. Each click is an invitation to explore my dedication for coding and web develpment.",
      imgUrl: projImg2,
      srcOfApp: "#",
    },
    {
      title: "ToDoList",
      description:
        "Created a ToDoList application that enables users to create tasks in list format and easily delete them once they're completed.",
      imgUrl: projImg3,
      srcOfApp: "https://rsjmanit.github.io/ReactApp_ToDoList/",
    },
  ];

  // Project based On Javascript
  const projectsOfTab2 = [
    {
      title: "TypingTest",
      description:
        "Developed a typing speed application which allows users to check their typing speed.Added a timer as well as wrong word detection feature in it",
      imgUrl: projImg4,
      srcOfApp: "https://rsjmanit.github.io/fingerSpeedTest/",
    },
    {
      title: "coffeeOnline",
      description:
        "Built a responsive coffee shop website with features like customer reviews, menu items, product display, coffee blogs and a contact us form.",
      imgUrl: projImg5,
      srcOfApp: "https://rsjmanit.github.io/coffeeOnline/",
    },
    {
      title: "Calculator",
      description:
        "Simple calculator with basic arithmetic operations. Features a clean user interface for easy calculations and responsive design for seamless use on various devices.",
      imgUrl: projImg6,
      srcOfApp: "https://rsjmanit.github.io/Calculator_By_JavaScript/",
    },
  ];

  // Project based on HTML and CSS only
  const projectsOfTab3 = [
    {
      title: "Instagram clone",
      description:
        "Created a landing page similar to the home page of Instagram using HTML and CSS.",
      imgUrl: projImg7,
      srcOfApp: "https://rsjmanit.github.io/clone-Of-Instagram/",
    },
    {
      title: "codingWorld",
      description:
        "This Website is Created using Bootstrap and helps users to get the required courses of web designing, web development, internship programs, job modules etc.",
      imgUrl: projImg8,
      srcOfApp: "https://rsjmanit.github.io/codingWorld/",
    },
    {
      title: "SugarCraves",
      description:
        "The static and fully responsive website 'SugarCraves' helps users in ordering sweets.This website will automatically behave responsively according to different screen sizes.",
      imgUrl: projImg9,
      srcOfApp: "https://rsjmanit.github.io/SugarCraves/",
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    As a dedicated professional, I believe in the power of
                    collaboration and innovation. These projects are a testament
                    to my commitment to continuous improvement and my ability to
                    adapt to various industries and objectives.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          <h2>Projects using HTML, CSS, React, Javascript.</h2>
                        </div>
                        <Row>
                          {projectsOfTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="project-desc-div">
                          <h2 className="project-desc-heading">
                            Projects using HTML, CSS, Javascript.
                          </h2>
                        </div>
                        <Row>
                          {projectsOfTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="project-desc-div">
                          <h2 className="project-desc-heading">
                            Projects using HTML, CSS, Bootstrap.
                          </h2>
                        </div>
                        <Row>
                          {projectsOfTab3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
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
