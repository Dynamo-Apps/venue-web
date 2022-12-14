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

import { useNavigate } from "react-router-dom";

import styles from "../styles/additional-registration.module.css";

export default function index() {
  return (
    <>
      <Form>
        <Form.Label
          style={{
            fontSize: "15px",
            fontWeight: 500,
            marginVertical: 10,
            color: "black",
          }}
        >
          Add Address
        </Form.Label>
        <Form.Group
          className="mb-3"
          style={{
            marginTop: 10,
          }}
        >
          <Row>
            <Col class="col-md-5" style={{}}>
              <Form.Label
                htmlFor="Select"
                class="form-label"
                style={{
                  marginTop: 10,
                  fontWeight: 600,
                }}
              >
                Location
              </Form.Label>
            </Col>
            <Col class="col-md-7">
              <Form.Select id="delect" style={selectStyle}>
                <option>Select Country</option>
                <option>USA</option>
                <option>UK</option>
              </Form.Select>
              <Form.Control
                style={selectStyle}
                type="Text"
                placeholder="City"
              />
              <Form.Control
                style={selectStyle}
                type="Text"
                placeholder="State"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{
            marginTop: 0,
          }}
        >
          <Row>
            <Col
              class="col-md-5"
              style={{
                marginTop: 30,
              }}
            >
              <Form.Label
                htmlFor="Select"
                style={{
                  fontWeight: 600,
                }}
              >
                Address Line 1
              </Form.Label>
            </Col>
            <Col
              class="col-md-7"
              style={{
                marginLeft: 20,
              }}
            >
              <Form.Control
                style={selectStyle}
                type="Text"
                placeholder="Your Address"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{
            marginTop: 0,
          }}
        >
          <Row>
            <Col
              class="col-md-5"
              style={{
                marginTop: 10,
              }}
            >
              <Form.Label
                htmlFor="Select"
                style={{
                  fontWeight: 600,
                }}
              >
                Address Line 2
              </Form.Label>
            </Col>
            <Col
              class="col-md-7"
              style={{
                marginLeft: 20,
              }}
            >
              <Form.Control
                style={selectStyle}
                type="Text"
                placeholder="Your Address"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{
            marginTop: 20,
          }}
        >
          <Row>
            <Col
              class="col-sm-5"
              style={{
                marginTop: 10,
              }}
            >
              <Form.Label
                htmlFor="Select"
                style={{
                  fontWeight: 600,
                }}
              >
                Zip code
              </Form.Label>
            </Col>
            <Col
              class="col-sm-7"
              style={{
                marginLeft: 20,
              }}
            >
              <Form.Control
                style={selectStyle}
                type="Text"
                placeholder="Your Address"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col
            class="col"
            style={{
              marginRight: 100,
            }}
          >
            {/* <Button
                type="add"
                className="address"
                style={{
                  borderRadius: 100,
                  width: 160,
                  height: 40,
                }}
              >
                + Add Address
              </Button> */}
          </Col>
          <Col
            class="col"
            style={
              {
                // marginRight: "2%",
                // marginLeft: "4%",
                // alignItems: "right",
              }
            }
          >
            <Button type="cancel" className={styles.buttonSave}>
              Cancel
            </Button>
          </Col>
          <Col class="col">
            <Button
              type="save"
              className={styles.buttonSave}
              // style={{
              //   borderRadius: 100,
              //   width: 100,
              //   height: 40,
              // }}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
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
