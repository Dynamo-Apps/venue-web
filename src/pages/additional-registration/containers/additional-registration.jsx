import React, { Component } from "react";
import PropTypes from "prop-types";
import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/location.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { message, Steps } from "antd";
import "../styles/additional-registration.css";
import Location from "../components/location.jsx";
import Venue from "../components/venue.jsx";
import Event from "../components/events.jsx";

import { useNavigate } from "react-router-dom";

import styles from "../styles/additional-registration.module.css";
import { useState } from "react";

export default function Root() {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Venue Details",
      content: "First-content",
    },
    {
      title: "Location",
      content: "Second-content",
    },
    {
      title: "Type of events and genre",
      content: "Last-content",
    },
  ];
  const [current, setCurrent] = useState(0);
  const finish = () => {
    navigate("/");
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const RenderRightView = () => {
    return (
      <div
        class="main m-5"
        style={{
          alignSelf: "center",
        }}
      >
        <h1 className={styles.letUsText}>
          Let us Connect your venue to the world!
        </h1>
        <div class="mt-5 mb-5">
          <Steps current={current} style={{}} items={items} />
        </div>
        {current == 0 ? current == 1 ? <Venue /> : <Location /> : <Event />}
        <Row>
          <div class="mt-5 d-flex">
            <Col>
              {current > 0 && (
                <Form.Label onClick={() => prev()} className={styles.preStep}>
                  {"<       "}Previous Step
                </Form.Label>
              )}
            </Col>
            <Col
              className="justify-content-center"
              style={{
                display: "contents",
              }}
            >
              {current < 2 ? (
                <Button
                  type="save"
                  onClick={() => next()}
                  className={styles.buttonSave}
                  // style={{
                  //   borderRadius: 100,
                  //   width: 100,
                  //   height: 40,
                  // }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="save"
                  onClick={() => finish()}
                  className={styles.buttonSave}
                  // style={{
                  //   borderRadius: 100,
                  //   width: 100,
                  //   height: 40,
                  // }}
                >
                  Finish
                </Button>
              )}
            </Col>
          </div>
        </Row>
      </div>
    );
  };
  const renderLeftView = () => {
    return (
      <div style={bgImg} id="gradient-view">
        <div style={logoImg} id="logo-view">
          <Image
            id="logo-image"
            width={100}
            style={{ alignSelf: "center", position: "absolute", top: 50 }}
            preview={false}
            src={logo}
          />
        </div>
        <div style={peopleImg} id="person-view">
          <Image
            fluid
            id="image-style"
            width={800}
            style={{
              zIndex: 99,
              // alignSelf: "center",
              // alignContent: "center",
              // alignItems: "center",
              // justifyContent: "center",
            }}
            src={personImage}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <Container class="container-fluid" style={{ maxWidth: "100%" }}>
        <Row>
          <Col class="col-5" id="left-view">
            {renderLeftView()}
          </Col>

          <Col
            id="right-view"
            class="no-float"
            className="rightView2"
            style={{
              height: "100vh",
              // display: "inline-grid",
              // alignContent: "stretch",
              // alignSelf: "center",
              // justifyContent: "center",
              // alignItems: "center",
              alignContent: "center",
              placeContent: "normal",
              display: "grid",
              // display: "grid"
            }}
          >
            {RenderRightView()}
          </Col>
        </Row>
      </Container>
    </>
  );
}
const textView = {};
const peopleImg = {
  display: "flex",
  justifyContent: "center",
  // position: "absolute",
  // display: "flex",
  // alignSelf: "center",
  // alignContent: "center",
  // alignItems: "center",
  // justifyContent: "center",
};

const logoImg = {
  // paddingTop: 50,
  paddingLeft: 50,
  flex: 1,
  display: "flex",
  alignSelf: "flex-start",
  alignContent: "flex-start",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  placeContent: "flex-start",
};

const selectStyle = {
  marginBottom: 20,
  paddingLeft: 20,
  height: "50px",
  display: "flex",
  borderRadius: 200,
  color: "rgba(122,134,161,1)",
  fontSize: 14,
  width: 300,
};

const logoStyle = {
  backgroundColor: "#000",
};
const bgImg = {
  backgroundImage: `url(${gradientImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};
