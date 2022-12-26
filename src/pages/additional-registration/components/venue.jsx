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
import Logo from "../../../../src/assets/images/venue-logo.png";
import Trash from "../../../../src/assets/images/trash-icon.png";
import Search from "../../../../src/assets/images/search-icon.png";

import Upload from "../../../../src/assets/images/upload.png";
import UserImage from "../../../../src/assets/images/userImage.png";
import ArrowDown from "../../../../src/assets/images/arrow-down.png";

import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/additional-registration.module.css";

import { useEffect } from "react";
export default function Root(props) {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [imageLogo, setImageLogo] = useState({ preview: "", raw: "" });
  const [view, setView] = useState("Timeline");

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleChangeLogo = (e) => {
    if (e.target.files.length) {
      setImageLogo({
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

  const renderTeamSection = () => {
    return (
      <div>
        <div>
          <Row style={{ flexDirection: "row", flex: 1 }}>
            <Col sm={3}>
              <text
                style={{ flex: 0.3, alignSelf: "center", marginBottom: 10 }}
              >
                Invite Team
              </text>
            </Col>
            <Col sm={6}>
              <div style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
                <Image src={Search} style={search} />

                <Form.Control
                  style={{}}
                  placeholder="Search name or email"
                  className={styles.teamSearch}
                ></Form.Control>
              </div>
            </Col>

            <Col sm={3}>
              <div
                style={{
                  flex: 0.3,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Button type="cancel" className={styles.buttonSave}>
                  Invite
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div
          class="mt-5"
          style={{
            flexDirection: "row",
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <text style={{ fontSize: 13, color: "#000" }}>Users</text>
          <Form.Label
            style={{
              color: "#7A86A1",
              fontSize: 13,
              fontWeight: "300",
            }}
          >
            Imported Contacts
          </Form.Label>
        </div>

        <div
          class="mt-4 mb-3"
          style={{ height: 1, backgroundColor: "#EBEBEB" }}
        />
        <div class="mt-3 mb-3">
          <div
            class="mt-3"
            style={{ flexDirection: "row", display: "flex", flex: 1 }}
          >
            <div style={{ flex: 0.1 }}>
              <Image src={UserImage} style={userImage} />
            </div>

            <div
              style={{
                flex: 0.7,
                flexDirection: "column",
              }}
            >
              <Col>
                <Form.Label style={{ fontWeight: "400" }}>John Does</Form.Label>
              </Col>
              <Col>
                <Form.Label style={{ fontWeight: "300", color: "#7A86A1" }}>
                  John@google.com
                </Form.Label>
              </Col>
            </div>

            <div
              style={{
                flex: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Form.Label
                style={{ color: "#7A86A1", marginRight: 0, flex: 0.6 }}
              >
                Guest
              </Form.Label>
              <Image src={ArrowDown} style={arrow} />
            </div>
          </div>
          {/* <text>asdasd</text>
            <text>asdasd</text> */}
        </div>

        <div class="mt-3 mb-3">
          <div
            class="mt-3"
            style={{ flexDirection: "row", display: "flex", flex: 1 }}
          >
            <div style={{ flex: 0.1 }}>
              <Image src={UserImage} style={userImage} />
            </div>

            <div
              style={{
                flex: 0.7,
                flexDirection: "column",
              }}
            >
              <Col>
                <Form.Label style={{ fontWeight: "400" }}>John Does</Form.Label>
              </Col>
              <Col>
                <Form.Label style={{ fontWeight: "300", color: "#7A86A1" }}>
                  John@google.com
                </Form.Label>
              </Col>
            </div>

            <div
              style={{
                flex: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Form.Label
                style={{ color: "#7A86A1", marginRight: 0, flex: 0.6 }}
              >
                Guest
              </Form.Label>
              <Image src={ArrowDown} style={arrow} />
            </div>
          </div>
          {/* <text>asdasd</text>
            <text>asdasd</text> */}
        </div>

        <div class="mt-3 mb-3">
          <div
            class="mt-3"
            style={{ flexDirection: "row", display: "flex", flex: 1 }}
          >
            <div style={{ flex: 0.1 }}>
              <Image src={UserImage} style={userImage} />
            </div>

            <div
              style={{
                flex: 0.7,
                flexDirection: "column",
              }}
            >
              <Col>
                <Form.Label style={{ fontWeight: "400" }}>
                  Harry Newuman
                </Form.Label>
              </Col>
              <Col>
                <Form.Label style={{ fontWeight: "300", color: "#7A86A1" }}>
                  Harry@google.com
                </Form.Label>
              </Col>
            </div>

            <div
              style={{
                flex: 0.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Form.Label
                style={{ color: "#7A86A1", marginRight: 0, flex: 0.6 }}
              >
                Admin
              </Form.Label>
              <Image src={ArrowDown} style={arrow} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDropDown = () => {
    return (
      <Dropdown style={{ display: "flex" }} class="mt-2">
        <Dropdown.Toggle
          variant="primary-outline"
          size="lg"
          className={styles.dropdown}
          style={{
            border: 1,
          }}
        >
          {view}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={(val) => setView("Timeline")}
            href="#/action-1"
          >
            <Form.Label>Timeline</Form.Label>
          </Dropdown.Item>
          <Dropdown.Item onClick={(val) => setView("Home")} href="#/action-2">
            Home
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <div class="main">
      <Row className="col-md-12">
        {props.role == "Fan" ? null : (
          <Col
            sm={3}
            style={{
              alignItems: "center",
            }}
          >
            <Row
              style={{
                marginBottom: 9,
              }}
            >
              <Form.Label
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {props.role === "Venue Manager" ? "Venue Logo" : "Your Logo"}
              </Form.Label>
            </Row>
            <Row>
              <div>
                <label htmlFor="upload-button">
                  {image.preview ? (
                    <img
                      style={{ backgroundSize: "contain" }}
                      src={image.preview}
                      alt="dummy"
                      width="120"
                      height="120"
                    />
                  ) : (
                    <>
                      <span>
                        <Image src={Logo} style={logoupload} />
                      </span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
              </div>
            </Row>
            <Row
              style={
                {
                  // backgroundColor:'red'
                  // marginTop: 10,
                  // marginRight: 80,
                }
              }
            >
              <div
                onClick={() => setImage({ preview: "", raw: "" })}
                class="d-flex justify-content-center"
                style={{
                  height: "3rem",
                  width: "8rem",

                  borderRadius: 200,
                  // backgroundColor: "rgba( 245, 244, 245, 100%)",
                  border: "1px solid rgba(235,235,235,1)",
                }}
              >
                <Image src={Trash} style={trash} />
                <text style={{ alignSelf: "center", color: "#7A86A1" }}>
                  Delete
                </text>
              </div>

              {/* <a className="delete">Delete</a> */}
            </Row>
          </Col>
        )}
        {props.role == "Fan" ? (
          <Row
            style={{
              marginTop: 0,
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
              About you
              <span style={{ opacity: 0.4 }}> Optional </span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="A small description"
              style={{
                marginTop: 20,
                height: "15vh",
                display: "flex",
                borderRadius: 10,
                width: "calc(110%-30px)",
              }}
            ></Form.Control>
          </Row>
        ) : (
          <Col>
            <Row
              style={{
                marginBottom: 5,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <Form.Label
                class="mt-4"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                {props.role === "Venue Manager"
                  ? "Venue Name"
                  : "You/ Your group name"}
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
                  placeholder="Enter your name here"
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
                {props.role === "Venue Manager"
                  ? "Venue Description"
                  : "Your Description"}
                <span style={{ opacity: 0.4 }}> Optional </span>
              </Form.Label>
            </Row>
            <Row>
              <Form col-sm-12>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="A small description"
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

            {/* <Form col-sm-12 className="box">
            <Email />
          </Form> */}
          </Col>
        )}

        {props.role == "Fan" ? null : (
          <Row
            style={{
              marginTop: 26,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {renderTeamSection()}
          </Row>
        )}
      </Row>
      <Row class="mt-5">
        <Form.Label
          class="mb-4 mt-4"
          style={{ fontSize: 13, fontWeight: 600, color: "black" }}
        >
          Attach your profile picture
        </Form.Label>
        <Col sm={6}>
          {/* <div className="bg">
              <label htmlFor="upload-button">
                {image.preview ? (
                  <img
                    src={image.preview}
                    alt="dummy"
                    width="200"
                    height="200"
                  />
                ) : (
                  <>
                    <span>
                      <Image src={Logo} style={logoupload} />
                    </span>
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
            <div class="text">Upload files</div>
          </div> */}

          <div
            style={{
              alignSelf: "center",
              border: "1px solid rgba(235,235,235,1)",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              paddingTop: 40,
              paddingBottom: 40,
              borderRadius: 15,
            }}
          >
            <div
              style={{
                alignSelf: "center",
                display: "block",
                textAlign: "center",
              }}
              onClick={() => handleChangeLogo()}
            >
              <input
                type="file"
                id="upload-button-logo"
                style={{ display: "none" }}
                onChange={handleChangeLogo}
              />
              <label htmlFor="upload-button-logo">
                {imageLogo.preview ? (
                  <img
                    src={imageLogo.preview}
                    alt="dummy"
                    width="200"
                    height="200"
                  />
                ) : (
                  <Image src={Upload} style={upload} />
                )}
              </label>
            </div>
            {imageLogo.preview ? (
              <div
                onClick={() => setImageLogo({ preview: "", raw: "" })}
                class="d-flex justify-content-center ms-5 mt-3"
                style={{
                  height: "3rem",
                  width: "8rem",
                  alignSelf: "center",

                  borderRadius: 200,
                  // backgroundColor: "rgba( 245, 244, 245, 100%)",
                  border: "1px solid rgba(235,235,235,1)",
                }}
              >
                <Image src={Trash} style={trash} />
                <text style={{ alignSelf: "center", color: "#7A86A1" }}>
                  Delete
                </text>
              </div>
            ) : (
              <text
                class="mt-4"
                style={{
                  alignSelf: "center",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Choose files to upload
              </text>
            )}
          </div>
        </Col>
        <Col sm={6} style={{ padding: 30 }}>
          {/* <Row
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
                {props.role === "Venue Manager"
                  ? "Venue Launch Date"
                  : props.role === "Fan"
                  ? "Your Date of Birth"
                  : "Your Launch Date"}
              </Form.Label>
            </Form>
          </Row>
          <Row>
            <Form col-sm-12>
              <Form.Control
                style={{
                  color: "#7A86A1",
                  marginTop: 10,
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

          <Row
            style={{
              marginTop: 25,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <Form>
              <Form.Label
                class="mb-2"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Default View
              </Form.Label>
            </Form>
          </Row>
          <Row class="mt-2">
            <Form class="mt-2">{renderDropDown()}</Form>
          </Row> */}
        </Col>
      </Row>
    </div>
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
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "14vh",
};

const trash = {
  backgroundSize: "center",
  backgroundPosition: "center",
  height: "1.5vh",
  alignSelf: "center",
  marginRight: 10,
};
const search = {
  backgroundSize: "center",
  backgroundPosition: "center",
  height: "1.5vh",
  alignSelf: "center",
  position: "absolute",
  marginTop: 12,
  marginLeft: 20,
};
const arrow = {
  backgroundSize: "center",
  backgroundPosition: "center",
  height: "0.5vh",
};

const upload = {
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: "8vh",
};

const userImage = {
  marginRight: 10,
  backgroundSize: "center",
  backgroundPosition: "center",
  height: "5vh",
  alignSelf: "center",
};
