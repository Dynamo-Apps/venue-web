import { Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/person-image.png";
import { Image } from "antd";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Space, Typography, Button } from "antd";
import { Divider, Row, Col, Card, Checkbox, Form, Input } from "antd";
import { Anchor } from "antd";
import "../../../styles/styles.css";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const { Link } = Anchor;

export default function Root() {
  const navigate = useNavigate();

  const { height, width } = useWindowDimensions();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const renderRightView = () => {
    let className = "menu";

    return (
      <Layout
        style={{
          backgroundColor: "#FFFFFF",

          height: "100vh",
          width: "50%",
          justifyContent: "center",
          // paddingLeft: 100,
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              textAlign: "start",
              fontWeight: "600",
              alignSelf: "flex-start",
            }}
          >
            Sign In
          </Text>
          <div
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-evenly",
              paddingBottom: 20,
            }}
          >
            <Space>
              <Button
                style={{
                  width: 300,
                  marginRight: 30,
                  height: 50,
                  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                  backgroundImage: `linear-gradient(to right, #F9AB38, #F9914B,#F96E63)`,
                }}
                type="primary"
                block
                shape="round"
                size="large"
              >
                <Text
                  style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Sign in with Facebook
                </Text>
              </Button>
            </Space>
            <Button
              style={{
                width: 300,
                marginRight: 30,
                height: 50,
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                backgroundImage: `linear-gradient(to right, #F9AB38, #F9914B,#F96E63)`,
              }}
              block
              shape="round"
              size="large"
            >
              <Text
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                with Google
              </Text>
            </Button>
          </div>
          <div
            style={{
              width: "10%",
              height: 1,
              backgroundColor: "lightgrey",
              alignSelf: "flex-start",
              marginTop: 30,
            }}
          />
          <div style={{ display: "flex", alignSelf: "flex-start" }}>
            <Text
              style={{
                marginTop: 30,
                color: "grey",
                color: "rgba(122,134,161,1)",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Or sign in using your email address
            </Text>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row style={{ marginTop: 20 }}>
              <Col
                style={{
                  flex: 0.5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bolder",
                    fontSize: 15,

                    // marginTop: 5),
                  }}
                >
                  Your Email
                </Text>
                <Form.Item
                  name="Email"
                  style={{}}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    style={{
                      width: 299,
                      flex: 1,
                      marginTop: 20,
                      height: "50px",
                      display: "flex",
                      borderRadius: 200,
                      // backgroundColor: "rgba( 245, 244, 245, 100%)",
                      border: "1px solid rgba(235,235,235,1)",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: 30 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    // marginTop: 5),
                  }}
                >
                  Your Password
                </Text>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    style={{
                      marginTop: 20,
                      width: 299,
                      flex: 1,
                      display: "flex",
                      borderRadius: 200,
                      height: "50px",
                      // backgroundColor: "rgba( 245, 244, 245, 100%)",
                      border: "1px solid rgba(235,235,235,1)",
                    }}
                  />
                </Form.Item>
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
            <Form.Item
              name="remember"
              valuePropName="checked"
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  style={{ color: "rgba(122,134,161,1)", marginRight: 20 }}
                >
                  Remember me
                </Checkbox>

                <Link
                  className="anchor-custom"
                  title="Forgot Password?"
                  href="/forgot-password"
                />
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
            </Form.Item>
            <Form.Item
              style={{ marginTop: 50 }}
              wrapperCol={
                {
                  // offset: 8,
                  // span: 16,
                }
              }
            >
              <div style={{ flexDirection: "row", display: "flex" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: 300,
                    marginRight: 30,
                    height: 50,
                    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                    backgroundImage: `linear-gradient(to right, #694AC9, #AF55A8,#E25E8E)`,
                  }}
                  block
                  shape="round"
                  size="large"
                >
                  <Text
                    style={{
                      textAlign: "center",
                      verticalAlign: "middle",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Sign In
                  </Text>
                </Button>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      marginRight: 10,
                    }}
                  >
                    New User?{" "}
                  </Text>
                  <Link
                    href={"/register"}
                    className="anchor-custom"
                    title=" Create an account"
                  />
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    );
  };

  const renderLeftView = () => {
    return (
      <div style={{ height: "100vh", width: "47%" }}>
        <div style={bgImg}>
          <div style={logoImg}>
            <Image
              width={100}
              style={{ alignSelf: "center", position: "absolute", top: 50 }}
              preview={false}
              src={logo}
            />
          </div>
          <div style={peopleImg}>
            <Image
              width={width / 2}
              preview={false}
              style={{ marginBottom: 50 }}
              src={personImage}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: 50,
              // marginStart: 35,
            }}
          >
            <Text
              level={5}
              style={{
                color: "white",
                fontSize: 30,
                margin: 0,
                padding: 0,
                lineHeight: 0,
              }}
            >
              Time to create a
            </Text>
            <Typography.Title
              level={1}
              style={{
                color: "white",
                fontSize: 70,
                margin: 0,
                padding: 0,
                lineHeight: 1,
              }}
            >
              long-lasting
            </Typography.Title>
            <Typography.Title
              level={1}
              style={{
                color: "white",
                fontSize: 70,
                margin: 0,
                padding: 0,
                lineHeight: 1,
              }}
            >
              memory
            </Typography.Title>
          </div>
        </div>
      </div>
    );
  };

  const renderCopyright = () => {
    return (
      <div style={{ position: "absolute", right: 30, bottom: 30 }}>
        <Text
          style={{
            color: "#212121",
            fontSize: 14,
          }}
        >
          ©Copyright 2022. Made by e21 designs
        </Text>
      </div>
    );
  };

  return (
    <>
      <Layout style={mainContainer}>
        {renderLeftView()}
        {renderRightView()}
        {renderCopyright()}

        {/* <img style={img} src={logo} alt="Logo" /> */}
      </Layout>
    </>
  );
}

const textView = {};
const peopleImg = {
  position: "absolute",

  height: "90vh",
  display: "flex",
  alignSelf: "center",
  alignContent: "center",
  alignItems: "center",
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
};
const mainContainer = {
  flexDirection: "row",
  backgroundColor: "#122",
  height: "100vh",
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
