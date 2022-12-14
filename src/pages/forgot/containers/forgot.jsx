import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/forgot.png";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "../styles/forgot.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import loader from "../../../components/loading";
import { Nav } from "react-bootstrap";

export default function Root() {
  const notify = () => toast("Please accept the term and agreements...");

  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const { height, width } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleAction = (email) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/");
        setTimeout(() => {}, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/user-not-found") {
          toast("No email found...");
        } else if (error.code === "auth/invalid-email") {
          toast("Invalid email...");
        }
        console.log("errorMessage", errorMessage);
      })
      .finally(() => {
        setLoading(false);
        toast("Password reset email sent!");
      });
  };
  const renderRightView = () => {
    return (
      <div
        id="right-main-view"
        style={
          {
            // minHeight: "100vh",
            // justifyContent: "center",
            // alignContent: "center",
            // alignSelf: "center",
            // alignItems: "center",
            // display: "grid",
          }
        }
      >
        <Form.Label
          id="sign-text"
          class="mt-3"
          style={{
            fontSize: 40,
            textAlign: "start",
            fontWeight: "600",
            alignSelf: "flex-start",
          }}
        >
          Forgot Password?
        </Form.Label>
        <Toaster />

        <div style={{ display: "flex", alignSelf: "flex-start" }}>
          <Form.Label
            style={{
              marginTop: 30,
              color: "rgba(122,134,161,1)",
              fontSize: 14,

              fontWeight: "700",
            }}
          >
            Enter the email address you used when you joined and
          </Form.Label>
        </div>
        <Formik
          style={{ flex: 1 }}
          validationSchema={schema}
          onSubmit={(val) => {
            console.log("Enter in submit function", val);

            handleAction(val.email);
          }}
          initialValues={{
            email: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row style={{ marginTop: 20, marginBottom: 30 }}>
                <Col
                  id="input-col-email"
                  style={{
                    flex: 0.5,
                  }}
                >
                  <Form.Group
                    name="basic"
                    controlId="formBasicEmail"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Label
                      style={{
                        fontWeight: "bolder",
                        fontSize: 15,
                        // marginTop: 5),
                      }}
                    >
                      Your Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="input-email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // className={
                      //   errors.email && touched.email ? "input-error" : null
                      // }
                      style={{
                        width: width / 6,

                        flex: 1,
                        marginTop: 20,
                        height: "50px",
                        display: "flex",
                        borderRadius: 200,
                        // backgroundColor: "rgba( 245, 244, 245, 100%)",
                        border: "1px solid rgba(235,235,235,1)",
                      }}
                    />
                    {errors.email && touched.email && (
                      <Form.Label
                        style={{
                          position: "absolute",
                          color: "red",
                          fontSize: 8,
                          paddingTop: 5,
                          paddingLeft: 5,
                        }}
                        className="error"
                      >
                        {errors.email}
                      </Form.Label>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <div id="signIn-Div" style={{ marginTop: 30 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: 300,
                    borderRadius: 100,
                    marginRight: 30,
                    height: 50,
                    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                    backgroundImage: `linear-gradient(to right, #694AC9, #AF55A8,#E25E8E)`,
                  }}
                  variant="primary"
                  size="lg"
                >
                  {loading ? (
                    loader()
                  ) : (
                    <text
                      style={{
                        fontSize: 16,
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      Submit
                    </text>
                  )}
                </Button>
                <div
                  id="signIn-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Nav.Link
                    style={{ fontSize: 15, marginTop: 20 }}
                    as={Link}
                    to="/"
                  >
                    {"<"} Back to sign in?
                  </Nav.Link>
                </div>
              </div>
              {/* <Text
                style={{
                  fontWeight: "600",
                  marginLeft: 50,
                  color: "rgba(97,73,205,1)",
                  // opacity: 0.6,
                  fontSize: 14,
                }}
              >
                {" "}
                <Link className="anchor-custom" title="Forgot Password?" />
              </Text> */}
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  const renderLeftView = () => {
    return (
      // <div style={{ height: "100vh", width: "47%" }}>
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

        <div
          id="time-to-text"
          style={{
            position: "absolute",
            bottom: "5%",
            left: 50,
            // marginStart: 35,
          }}
        >
          <div>
            <Form.Label
              style={{
                fontSize: 30,
                color: "white",
                margin: 0,
                padding: 0,
                lineHeight: 0,
              }}
            >
              Oops! Don't worry!!
            </Form.Label>
          </div>
          <div>
            <Form.Label
              style={{
                color: "white",
                fontSize: 70,
                margin: 0,
                fontWeight: 500,
                padding: 0,
                lineHeight: 1,
              }}
            >
              We'll help
            </Form.Label>
          </div>
          <div>
            <Form.Label
              style={{
                color: "white",
                fontSize: 70,
                margin: 0,
                padding: 0,
                fontWeight: 500,

                lineHeight: 1,
              }}
            >
              you
            </Form.Label>
          </div>
        </div>
      </div>
      // </div>
    );
  };

  const renderCopyright = () => {
    return (
      <div style={{ position: "absolute", right: 30, bottom: 30 }}>
        <Form.Label
          style={{
            color: "#212121",
            fontSize: 14,
          }}
        >
          ©Copyright 2022. Made by e21 designs
        </Form.Label>
      </div>
    );
  };

  return (
    <>
      <Container class="container-fluid" style={{ maxWidth: "100%" }}>
        <Row style={{}}>
          <Col id="left-view" sm={6}>
            {renderLeftView()}
          </Col>
          <Col
            id="right-view"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {renderRightView()}
          </Col>
        </Row>
        {/* 
        <Row style={{ flex: 1 }}>
          <Col span={11} style={{ zIndex: 99 }}></Col>
          <Col span={13} style={{}}>
            {/* {renderCopyright()} */}
        {/* <img style={img} src={logo} alt="Logo" /> */}
      </Container>
    </>
  );
}

const peopleImg = {
  display: "flex",
  justifyContent: "center",
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

const bgImg = {
  backgroundImage: `url(${gradientImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};
