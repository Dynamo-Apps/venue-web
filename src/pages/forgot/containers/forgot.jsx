// import { Layout } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import gradientImage from "../../../assets/images/gradient-image.png";
// import logo from "../../../assets/images/logo.png";
// import personImage from "../../../assets/images/forgot.png";
// import { Image } from "antd";
// import useWindowDimensions from "../../../hooks/useWindowDimensions";
// import { Space, Typography, Button } from "antd";
// import { Divider, Row, Col, Card, Checkbox, Form, Input } from "antd";
// import { Anchor } from "antd";
// import "../../../styles/styles.css";
// import { useNavigate } from "react-router-dom";

// const { Text } = Typography;
// const { Link } = Anchor;

// export default function Root() {
//   const navigate = useNavigate();

//   const { height, width } = useWindowDimensions();

//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   const renderRightView = () => {
//     let className = "menu";

//     return (
//       <Layout
//         style={{
//           backgroundColor: "#FFFFFF",

//           height: "100vh",
//           width: "50%",
//           justifyContent: "center",
//           // paddingLeft: 100,
//         }}
//       >
//         <div
//           style={{
//             justifyContent: "center",
//             alignContent: "center",
//             alignSelf: "center",
//             alignItems: "center",
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 40,
//               textAlign: "start",
//               fontWeight: "600",
//               alignSelf: "flex-start",
//             }}
//           >
//             Forgot Password?
//           </Text>

//           <div style={{ display: "flex", alignSelf: "flex-start" }}>
//             <Text
//               style={{
//                 // marginTop: 30,
//                 color: "rgba(122,134,161,1)",
//                 fontSize: "14px",
//               }}
//             >
//               Enter the email address you used when you joined and
//             </Text>
//           </div>
//           <div style={{ display: "flex", alignSelf: "flex-start" }}>
//             <Text
//               style={{
//                 color: "rgba(122,134,161,1)",
//                 fontSize: "14px",
//               }}
//             >
//               we'll send you instructions to reset your password.
//             </Text>
//           </div>
//           <Form
//             name="basic"
//             labelCol={
//               {
//                 // span: 8,
//               }
//             }
//             wrapperCol={
//               {
//                 // span: 16,
//               }
//             }
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//           >
//             <Row style={{ marginTop: 15 }}>
//               <Col
//                 style={{
//                   flex: 1,
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bolder",
//                     fontSize: 15,

//                     // marginTop: 5),
//                   }}
//                 >
//                   Your Email
//                 </Text>
//                 <Form.Item
//                   name="Email"
//                   style={{}}
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input your Email!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     size="large"
//                     style={{
//                       width: 350,
//                       flex: 1,
//                       marginTop: 20,
//                       height: "50px",
//                       display: "flex",
//                       borderRadius: 200,
//                       // backgroundColor: "rgba( 245, 244, 245, 100%)",
//                       border: "1px solid rgba(235,235,235,1)",
//                     }}
//                   />
//                 </Form.Item>
//               </Col>

//               {/* <div
//                   style={{
//                     flexDirection: "row",
//                     flex: 1,
//                     width: "100%",
//                     backgroundColor: "#000",
//                   }}
//                 > */}
//             </Row>

//             <Form.Item
//               wrapperCol={
//                 {
//                   // offset: 8,
//                   // span: 16,
//                 }
//               }
//             >
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{
//                   width: 350,
//                   marginRight: 30,
//                   height: 50,
//                   boxShadow:'5px 15px 35px 0 rgba(97,73,205,0.35)',

//                   backgroundImage: `linear-gradient(to right, #694AC9, #AF55A8,#E25E8E)`,
//                 }}
//                 block
//                 shape="round"
//                 size="large"
//               >
//                 <Text
//                   style={{
//                     textAlign: "center",
//                     verticalAlign: "middle",
//                     color: "white",
//                     fontWeight: "700",
//                   }}
//                 >
//                   Submit
//                 </Text>
//               </Button>
//               <div
//                 style={{
//                   display: "flex",
//                   marginTop: 20,
//                   alignItems: "center",
//                 }}
//               >
//                 <Link
//                   href={"/"}
//                   className="anchor-custom"
//                   title="< Back to sign in"
//                 />
//               </div>
//             </Form.Item>
//           </Form>
//         </div>
//       </Layout>
//     );
//   };
//   const renderCopyright = () => {
//     return (
//       <div style={{ position: "absolute", right: 30, bottom: 30 }}>
//         <Text
//           style={{
//             color: "#212121",
//             fontSize: 14,
//           }}
//         >
//           ©Copyright 2022. Made by e21 designs
//         </Text>
//       </div>
//     );
//   };
//   const renderLeftView = () => {
//     return (
//       <div style={{ height: "100vh", width: "47%" }}>
//         <div style={bgImg}>
//           <div style={logoImg}>
//             <Image
//               width={100}
//               style={{ alignSelf: "center", position: "absolute", top: 50 }}
//               preview={false}
//               src={logo}
//             />
//           </div>
//           <div style={peopleImg}>
//             <Image
//               width={width / 2.1}
//               preview={false}
//               style={{ marginBottom: 50, marginLeft: 30 }}
//               src={personImage}
//             />
//           </div>

//           <div
//             style={{
//               position: "absolute",
//               bottom: "5%",
//               left: 50,
//               // marginStart: 35,
//             }}
//           >
//             <Text
//               level={5}
//               style={{
//                 color: "white",
//                 fontSize: 30,
//                 margin: 0,
//                 padding: 0,
//                 lineHeight: 0,
//               }}
//             >
//               Oops! Don't worry!!
//             </Text>
//             <Typography.Title
//               level={1}
//               style={{
//                 color: "white",
//                 fontSize: 70,
//                 margin: 0,
//                 padding: 0,
//                 lineHeight: 1,
//               }}
//             >
//               We'll help
//             </Typography.Title>
//             <Typography.Title
//               level={1}
//               style={{
//                 color: "white",
//                 fontSize: 70,
//                 margin: 0,
//                 padding: 0,
//                 lineHeight: 1,
//               }}
//             >
//               you
//             </Typography.Title>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Layout style={mainContainer}>
//         {renderLeftView()}
//         {renderRightView()}
//         {renderCopyright()}

//         {/* <img style={img} src={logo} alt="Logo" /> */}
//       </Layout>
//     </>
//   );
// }

// const textView = {};
// const peopleImg = {
//   position: "absolute",

//   height: "90vh",
//   display: "flex",
//   alignSelf: "center",
//   alignContent: "center",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const logoImg = {
//   // paddingTop: 50,
//   paddingLeft: 50,

//   flex: 1,
//   display: "flex",
//   alignSelf: "flex-start",
//   alignContent: "flex-start",
//   alignItems: "flex-start",
//   justifyContent: "flex-start",
// };
// const mainContainer = {
//   flexDirection: "row",
//   backgroundColor: "#122",
//   height: "100vh",
// };
// // const personImg = {
// //   backgroundImage: `url(${personImage})`,
// //   backgroundPosition: "center",
// //   backgroundSize: "cover",
// //   backgroundRepeat: "no-repeat",
// //   height: "100vh",
// // };
// const logoImage = {
//   backgroundImage: `url(${logo})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   height: "100vh",
// };

// const logoStyle = {
//   backgroundColor: "#000",
// };
// const bgImg = {
//   backgroundImage: `url(${gradientImage})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   height: "100vh",
// };

import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/forgot.png";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "../styles/forgot.css";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";

export default function Root() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const { height, width } = useWindowDimensions();

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
          class='mt-3'
          style={{
            fontSize: 40,
            textAlign: "start",
            fontWeight: "600",
            alignSelf: "flex-start",
          }}
        >
          Forgot Password?
        </Form.Label>

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
          onSubmit={console.log}
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
                  <Form.Label
                    style={{
                      fontSize: 16,
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Submit
                  </Form.Label>
                </Button>
                <div
                  id="signIn-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Alert.Link
                    style={{ fontSize: 15, marginTop: 20 }}
                    href="/"
                  >
                    {"<"} Back to sign in?
                  </Alert.Link>
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
