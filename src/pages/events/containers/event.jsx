import { Button, Container, Form, FormText, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../styles/event.module.css";
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

import "../styles/event.css";

import dashboardIcon from "../../../assets/images/dashboard-icon.png";

export default function Root() {
  const navigate = useNavigate();

  return (
    <Container
      class="container-fluid"
      className="viewBack"
      style={{
        backgroundColor: "red",
        width: "100%",
      }}
      id="viewBack"
    >
      <div>
        <text>asdasd</text>
      </div>
    </Container>
  );
}
