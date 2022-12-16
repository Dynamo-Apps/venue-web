import React, { Component } from "react";
import PropTypes from "prop-types";
import gradientImage from "../../../assets/images/gradient-image.png";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

import { useNavigate } from "react-router-dom";

import styles from "../styles/additional-registration.module.css";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Select, { components, ControlProps } from "react-select";
import Checkmark from "../../../../src/assets/images/checkmark.png";
import NonCheckmark from "../../../../src/assets/images/not-checkmark.png";

export default function Root() {
  const [selectedOptions, setSelectedOptions] = useState();
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const [selectedBoxes, setSelectedBoxes] = useState([
    { name: "music", selected: false },
    { name: "circus", selected: false },

    { name: "live", selected: false },

    { name: "comedy", selected: false },

    { name: "online", selected: false },

    { name: "dance", selected: false },

    { name: "magic", selected: false },
  ]);

  // "showing" key:value pair optional
  const optionList = [
    { value: "rock", label: "Rock" },
    { value: "hiphop", label: "Hip hop" },
    { value: "pop", label: "Pop" },
    { value: "stand-up", label: "Stand up" },
  ];
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  const renderBoxes = (item, indexMain) => {
    // return item.selected ? (
    return indexMain < 3 ? (
      <Col onClick={() => {}} class="m-2 mb-3">
        <div
          style={{
            border: "1px solid #6149CD",
            height: 66,
            width: 130,
            marginTop: 20,
            display: "flex",
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignSelf: "center",
              display: "flex",
            }}
          >
            <Image src={NonCheckmark} style={nonCheckmark} />
            <Form.Label
              style={{ fontSize: 12, color: "#7A86A1", marginLeft: 10 }}
            >
              {item.name}
            </Form.Label>
          </div>
        </div>
      </Col>
    ) : (
      <Col
        onClick={() => {
          for (let index = 0; index < selectedBoxes.length; index++) {
            const element = selectedBoxes[index];

            if (index == indexMain) {
              console.log("====================================");
              console.log(element.selected);
              console.log("====================================");
            }

            // setSelectedBoxes(Object.assign(element));
          }

          // let editedBox = { name: item.name, selected: true };
          // selectedBoxes = selectedBoxes.map((u) =>
          //   u !== editedBox.id ? u : editedBox
          // );
        }}
        class="m-2 mb-3"
        // style={{ marginLeft: 20 }}
      >
        <div
          style={{
            height: 66,
            width: 130,
            marginTop: 20,

            backgroundColor: " #6149CD",
            display: "flex",
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignSelf: "center",
              display: "flex",
            }}
          >
            <Image src={Checkmark} style={checkmark} />
            <Form.Label
              style={{ fontSize: 12, color: "white", marginLeft: 10 }}
            >
              {item.name}
            </Form.Label>
          </div>
        </div>
      </Col>
    );
  };
  return (
    <div class="container">
      <div class="main">
        <Row>
          <div className="container-fluid">
            <Form.Label class="mb-3" style={{ fontSize: 14, color: "black" }}>
              Select the type of event you would like to host{" "}
            </Form.Label>
            <Row class="d-inline-flex" sm={5}>
              {selectedBoxes.map((item, index) => renderBoxes(item, index))}
            </Row>
          </div>
        </Row>
        <Row
          style={{
            marginTop: 20,
          }}
        >
          <div className="container-fluid top">
            <Form.Label
              class="mb-3"
              style={{
                fontSize: 14,
                color: "black",
              }}
            >
              Add Genres that you would host
            </Form.Label>
            <div
              className="dropdown-container"
              style={
                {
                  // height: 48,
                }
              }
            >
              <Select
                options={optionList}
                placeholder="Select by genre"
                value={selectedOptions}
                onChange={handleSelect}
                // className={styles.selectControl}
                isSearchable={true}
                isMulti
                // components={(val) => (
                //   <components.Control>
                //     <Image src={Search} style={search} />
                //     {val}
                //   </components.Control>
                // )}

                // styles={colorS}
              ></Select>
            </div>
          </div>
        </Row>
      </div>
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
const nonCheckmark = {
  backgroundSize: "center",
  backgroundPosition: "center",
  height: "1.5vh",
  alignSelf: "center",
};
const checkmark = {
  backgroundSize: "center",
  backgroundPosition: "center",
  height: "1.5vh",
  alignSelf: "center",
};
