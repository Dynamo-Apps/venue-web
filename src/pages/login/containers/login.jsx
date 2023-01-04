import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/person-image.png";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import loader from "../../../components/loading";

export default function Root() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const [swt, setSwt] = useState(true);
  const [validated, setValidated] = useState(false);

  const { height, width } = useWindowDimensions();
  const notifySuccess = () => toast("Success");

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    checkmark: yup.string(),
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.

        const user = result.user;

        toast("Success, signing in as " + user.displayName);

        navigate("/additional-registration");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log("googleLogin", error);
        // ...
      });
  };
  const handleAction = (id, email, password) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        // Signed in

        const user = userCredential.user;
        let verified = user.emailVerified;
        console.log("====================================");
        console.log(userCredential);
        console.log("====================================");

        if (verified) {
          toast("logged in, successfully...");
          navigate("/additional-registration");
        } else {
          toast("Please verify the email to continue...");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/user-not-found") {
          toast("No email found...");
        } else if (error.code === "auth/user-not-found") {
          toast("Wrong password...");
        } else if (error.code === "auth/wrong-password") {
          toast("Wrong password...");
        }
        console.log("errorMessage", errorMessage);
      })
      .finally(() => setLoading(false));
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          Sign In
        </Form.Label>
        <Row
          id="social-button-row-desktop"
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 20,
            justifyContent: "space-evenly",
            paddingBottom: 20,
          }}
        >
          <Col id="social-button-col-fb" style={{ marginBottom: 10 }}>
            <Button
              id="social-button-button-fb"
              variant="primary"
              size="lg"
              style={{
                width: 300,
                marginRight: 30,
                borderRadius: 100,
                height: 50,
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                backgroundImage: `linear-gradient(to right, #F9AB38, #F9914B,#F96E63)`,
              }}
            >
              <text
                id="social-text"
                style={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: "700",
                }}
              >
                with Facebook
              </text>
            </Button>
          </Col>

          <Col id="social-button-col-google">
            <Button
              id="social-button-button-google"
              variant="primary"
              size="lg"
              onClick={() => googleLogin()}
              style={{
                // width: width / 6,
                width: 300,
                borderRadius: 100,

                marginRight: 30,
                height: 50,
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                backgroundImage: `linear-gradient(to right, #F9AB38, #F9914B,#F96E63)`,
              }}
            >
              <text
                id="social-text"
                style={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: "700",
                }}
              >
                with Google
              </text>
            </Button>
          </Col>
        </Row>
        <div
          id="border-line"
          style={{
            width: width / 30,
            height: 1,
            backgroundColor: "lightgrey",
            alignSelf: "flex-start",
            marginTop: 30,
          }}
        />
        <div style={{ display: "flex", alignSelf: "flex-start" }}>
          <Form.Label
            style={{
              marginTop: 30,
              color: "rgba(122,134,161,1)",
              fontSize: 14,

              fontWeight: "700",
            }}
          >
            Or sign in using your email address
          </Form.Label>
        </div>
        <Formik
          style={{ flex: 1 }}
          validationSchema={schema}
          onSubmit={(val) => {
            console.log("Enter in submit function", val);

            handleAction(2, val.email, val.password);
          }}
          initialValues={{
            email: "",
            password: "",
            checkmark: "",
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
                <Col id="input-col-password" style={{ marginLeft: 30 }}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label
                      style={{
                        fontWeight: "bolder",
                        fontSize: 15,
                        // marginTop: 5),
                      }}
                    >
                      Your Password
                    </Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      id="input-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      size="large"
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
                      {errors.password && touched.password && errors.password}
                    </Form.Label>
                  </Form.Group>
                </Col>

                {/* <div
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    width: "100%",
                    backgroundColor: "#000",
                  }}
                > */}
              </Row>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{}} onClick={() => setSwt(!swt)}>
                  <Form.Check
                    checked={swt}
                    inline
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={`Remember me`}
                    style={{
                      color: "rgba(122,134,161,1)",
                      marginRight: 50,

                      fontSize: 15,
                    }}
                  />
                </div>
                <Nav.Link
                  style={{ fontSize: 15 }}
                  as={Link}
                  to="/forgot-password"
                >
                  Forgot Password?
                </Nav.Link>
              </div>
              <div
                id="signIn-Div"
                style={{ flexDirection: "row", display: "flex", marginTop: 30 }}
              >
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
                      Sign In
                    </text>
                  )}
                </Button>
                <div
                  id="signIn-row"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Form.Label
                    style={{
                      fontSize: 14,
                      marginRight: 10,
                    }}
                  >
                    New User?{" "}
                  </Form.Label>

                  <Nav.Link style={{ fontSize: 15 }} as={Link} to="/register">
                    Create an account
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
            style={{
              alignSelf: "center",
              position: "absolute",
              top: 50,
            }}
            preview={false}
            src={logo}
          />
        </div>
        <div style={peopleImg} id="person-view">
          <Image
            id="image-style"
            // width={900}
            style={{
              zIndex: 99,
              minHeight: "100px",
              objectFit: "contain",

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
            bottom: "10%",
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
              Time to create a
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
              long-lasting
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
              memory
            </Form.Label>
          </div>
        </div>
      </div>
      // </div>
    );
  };

  const renderCopyright = () => {
    return (
      <div style={{}}>
        <Form.Label
          style={{
            color: "#212121",
            position: "absolute",
            position: "absolute",
            right: 30,
            bottom: 30,
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
        <Toaster />

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
const mainContainer = {
  // flexDirection: "row",
  // backgroundColor: "#122",
  // height: "100vh",
};
// const personImg = {
//   backgroundImage: `url(${personImage})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   height: "100vh",
// };
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
