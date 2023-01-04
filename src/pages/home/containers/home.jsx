import {
  Button,
  Col,
  Container,
  Form,
  FormText,
  Image,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.css";
import { Tabs } from "antd";
import {
  AndroidOutlined,
  AppleOutlined,
  TableOutlined,
  CalendarOutlined,
  MessageOutlined,
  AppstoreOutlined,
  BellOutlined,
  UsergroupAddOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";
import CoverPhoto from "../../../assets/images/cover-photo.png";

import "../styles/home.css";
import Events from "../../events/containers/event.jsx";
import Dashboard from "../../dashboard/containers/dashboard.jsx";

import dashboardIcon from "../../../assets/images/dashboard-icon.png";
import { useState } from "react";

export default function Root() {
  const navigate = useNavigate();

  const [coverPhoto, setCoverPhoto] = useState(CoverPhoto);

  const renderLogoutButton = () => {
    return {
      /* <Button
    onClick={() => {
      navigate("/");
    }}
    id="social-button-button-fb"
    variant="primary"
    size="lg"
    style={{
      alignSelf: "center",
      width: 300,
      marginRight: 30,
      borderRadius: 100,
      height: 50,
      boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
      backgroundImage: `linear-gradient(to right, #F9AB38, #F9914B,#F96E63)`,
    }}
  >
    <Form.Label
      id="social-text"
      style={{
        fontSize: 16,
        color: "white",
        fontWeight: "700",
      }}
    >
      Log Out
    </Form.Label>
  </Button> */
    };
  };

  const renderTextTab = (id) => {
    if (id === 0) {
      return "Home";
    } else if (id === 1) {
      return "Events   ";
    } else if (id === 2) {
      return "Chat";
    } else {
      return "Friends";
    }
  };

  const handleChange = (e) => {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
    if (e.target.files.length) {
      setCoverPhoto(URL.createObjectURL(e.target.files[0]));
    }

    console.log("====================================");
    console.log(URL.createObjectURL(e.target.files[0]));
    console.log("====================================");
  };
  const renderUploadButton = () => {
    return (
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: 20,
          padding: 30,
          paddingTop: 15,
          paddingBottom: 15,
          position: "absolute",
          top: 200,
          left: 100,
        }}
      >
        <input
          type="file"
          style={{ display: "none" }}
          id="upload-cover"
          onChange={handleChange}
        />
        <Form.Label
          htmlFor="upload-cover"
          style={{
            color: "white",
          }}
        >
          + Change Cover Photo
        </Form.Label>
      </div>
    );
  };
  const renderInnerTabs = (id) => {
    console.log(id);
    if (id === 0) {
      return <Dashboard />;
    } else if (id === 1) {
      return <Events />;
    } else if (id === 2) {
      return "blue";
    } else {
      return "yellow";
    }
  };
  return (
    <Container
      class="container-fluid"
      className="viewBack"
      style={{
        backgroundColor: "#F8F9FA",
        width: "100vw",
        height: "100vh",
        maxWidth: "100%",
      }}
      id="viewBack"
    >
      <div
        style={{
          backgroundImage: `url(${coverPhoto})`,
          backgroundSize: "100%",
          height: "30vw",
          width: "100vw",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              alignItems: "center",
              verticalAlign: "center",
              display: "flex",
            }}
          >
            <Image
              id="logo-image"
              width={200}
              style={{ alignSelf: "center", paddingLeft: 50 }}
              preview={false}
              src={logo}
            />
          </div>

          <Tabs
            className={styles.tabs}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              // alignContent: "center",
              // justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
            defaultActiveKey="0"
            items={[
              AppstoreOutlined,
              CalendarOutlined,
              MessageOutlined,
              UsergroupAddOutlined,
            ].map((Icon, i) => {
              const id = String(i + 1);
              return {
                label: (
                  <div style={{ width: 100 }}>
                    <Icon />
                    {renderTextTab(i)}
                  </div>
                ),
                key: id,
                children: renderInnerTabs(i),
                // children: `Content of tab ${id}`,
              };
            })}
          />
          <Row
            style={{
              flexDirection: "row",
              display: "flex",
              padding: 20,
              paddingRight: 50,
            }}
          >
            <Col sm={4}>
              <SearchOutlined
                style={{ fontSize: "40px", color: "#7A86A1", marginRight: 50 }}
              />
            </Col>

            <Col sm={4}>
              <BellOutlined
                style={{ fontSize: "40px", color: "#7A86A1", marginRight: 50 }}
              />
            </Col>

            <Col sm={4}>
              <div
                style={{
                  backgroundColor: "red",
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                }}
              >
                {renderUploadButton()}
                <Image
                  id="logo-image"
                  width={40}
                  roundedCircle
                  style={{ alignSelf: "center" }}
                  preview={false}
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

{
  /* <div>
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
</div> */
}
