import { Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import gradientImage from "../../../assets/images/gradient-image.png";
import logo from "../../../assets/images/logo.png";
import personImage from "../../../assets/images/forgot.png";
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
            Forgot Password?
          </Text>

          <div style={{ display: "flex", alignSelf: "flex-start" }}>
            <Text
              style={{
                // marginTop: 30,
                color: "rgba(122,134,161,1)",
                fontSize: "14px",
              }}
            >
              Enter the email address you used when you joined and
            </Text>
          </div>
          <div style={{ display: "flex", alignSelf: "flex-start" }}>
            <Text
              style={{
                color: "rgba(122,134,161,1)",
                fontSize: "14px",
              }}
            >
              we'll send you instructions to reset your password.
            </Text>
          </div>
          <Form
            name="basic"
            labelCol={
              {
                // span: 8,
              }
            }
            wrapperCol={
              {
                // span: 16,
              }
            }
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row style={{ marginTop: 15 }}>
              <Col
                style={{
                  flex: 1,
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
                      width: 350,
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
              wrapperCol={
                {
                  // offset: 8,
                  // span: 16,
                }
              }
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: 350,
                  marginRight: 30,
                  height: 50,
                  boxShadow:'5px 15px 35px 0 rgba(97,73,205,0.35)',

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
                  Submit
                </Text>
              </Button>
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <Link
                  href={"/"}
                  className="anchor-custom"
                  title="< Back to sign in"
                />
              </div>
            </Form.Item>
          </Form>
        </div>
      </Layout>
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
              width={width / 2.1}
              preview={false}
              style={{ marginBottom: 50, marginLeft: 30 }}
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
              Oops! Don't worry!!
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
              We'll help
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
              you
            </Typography.Title>
          </div>
        </div>
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
