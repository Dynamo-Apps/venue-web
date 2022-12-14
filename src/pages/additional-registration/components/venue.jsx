import React, { Component } from "react";
import PropTypes from "prop-types";
import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/register.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import Logo from "../../../../src/assets/images/forgot.png";
import { useEffect } from "react";
export default function Index() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };


  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };
  const RenderRightView = () => {
    return (
      <div class="main">
        <Row className="col-md-12">
          <Col
            className="col-md-4 upload"
            style={{
              alignItems: "center",
            }}
          >
            <Row
              style={{
                marginBottom: 9,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Venue Logo
            </Row>
            <Row>
              <div>
                <label htmlFor="upload-button">
                  {image.preview ? (
                    <img
                      src={image.preview}
                      alt="dummy"
                      width="300"
                      height="300"
                    />
                  ) : (
                    <>
                      {/* <span>
                        <Image src={Logo} style={logoupload} />
                      </span> */}
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <br />
              </div>
            </Row>
            <Row
              style={{
                marginTop: 20,
                marginRight: 80,
              }}
            >
              <a className="delete">Delete</a>
            </Row>
          </Col>
          <Col className="col-md-8 textbox">
            <Row
              style={{
                marginBottom: 5,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Form.Label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Venue Name{" "}
              </Form.Label>
            </Row>
            <Row>
              <Form col-sm-12 className="box">
                <Form.Control
                  style={{
                    marginTop: 20,
                    height: "40px",
                    display: "flex",
                    borderRadius: 200,
                    width: "calc(110%-30px)",
                    paddingLeft: "10",
                  }}
                  type="Text"
                  placeholder="Enter your venue name here"
                />
              </Form>
            </Row>
            <Row
              style={{
                marginTop: 25,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Form.Label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Venue Description - <span>Optional </span>
              </Form.Label>
            </Row>
            <Row>
              <Form col-sm-12>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="A small description about venue"
                  style={{
                    marginTop: 20,
                    height: "15vh",
                    display: "flex",
                    borderRadius: 10,
                    width: "calc(110%-30px)",
                  }}
                ></Form.Control>
              </Form>
            </Row>
            <Row
              style={{
                marginTop: 26,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Form.Label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Invite team
              </Form.Label>
            </Row>
            <Form col-sm-12 className="box"></Form>
          </Col>
        </Row>
        <Row>
          <Col className="col-8">
            <div className="image">
              <div className="card">
                <div className="box">
                  <div>
                    <label htmlFor="upload-button">
                      {image.preview ? (
                        <img
                          src={image.preview}
                          alt="dummy"
                          width="300"
                          height="300"
                        />
                      ) : (
                        <>
                          {/* <span>
                            <Image src={Logo} style={logoupload} />
                          </span> */}
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div class="text">Upload files</div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-4">
            <Row
              style={{
                marginTop: 25,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Form col-sm-12>
                <Form.Label
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  Venue Launch Date{" "}
                </Form.Label>
              </Form>
            </Row>
            <Row>
              <Form col-sm-12>
                <Form.Control
                  style={{
                    marginTop: 30,
                    height: "40px",
                    display: "flex",
                    borderRadius: 200,
                    width: "calc(110%-30px)",
                    paddingLeft: "10",
                  }}
                  type="Date"
                  placeholder="Enter your venue name here"
                />
              </Form>
            </Row>
          </Col>
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
            width={900}
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
      <Container fluid="md">
        <Row>
          <Col
            id="right-view"
            class="col-md-9 no-float"
            style={{
              height: "100vh",
              display: "flex",
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

const logoImage = {
  backgroundImage: `url(${logo})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
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
const logoupload = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "8vh",
  borderRadius: "100px",
};
