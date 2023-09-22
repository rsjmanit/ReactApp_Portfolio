import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img-3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import navIcon3 from "../assets/img/icon_33.png";
import navIcon4 from "../assets/img/icon_44.png";

export const Contact = () => {
  const phoneNumber1 = "+91-7389757704";
  const phoneNumber2 = "+91-7409667704";
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <div className="cont-div">
                    <div className="social-icon">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rahul.jadon74096@gmail.com"
                        target="_blank"
                      >
                        <img
                          src={navIcon3}
                          alt="Email Me"
                          className="social-icon-git"
                        />
                      </a>
                    </div>
                    <div className="cont-div-details">
                      <h3>Email:</h3>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rahul.jadon74096@gmail.com"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <p>rahul.jadon74096@gmail.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="cont-div">
                    <div className="social-icon">
                      <a href={`tel:${phoneNumber1}`}>
                        <img
                          src={navIcon4}
                          alt="Call Me"
                          className="social-icon-git"
                        />
                      </a>
                    </div>
                    <div className="cont-div-details">
                      <h3>Call or Whatsapp:</h3>
                      <a
                        href={`tel:${phoneNumber1}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p>{phoneNumber1}</p>
                      </a>
                      <a
                        href={`tel:${phoneNumber2}`}
                        style={{ textDecoration: "none" }}
                      >
                        <p>{phoneNumber2}</p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
