import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  FormText,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../styles/dashboard.module.css";

import logo from "../../../assets/images/logo.png";
import CoverPhoto from "../../../assets/images/cover-photo.png";
import ProfilePhoto from "../../../assets/images/profile-photo.png";
import FlatList from "flatlist-react";

import "../styles/dashboard.css";

import {
  PlusSquareFilled,
  RightOutlined,
  SendOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  UserOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";
import dashboardIcon from "../../../assets/images/dashboard-icon.png";
import LocationIcon from "../../../assets/images/location-icon.png";
import FollowersIcon from "../../../assets/images/followers-icon.png";
import FollowingIcon from "../../../assets/images/following-icon.png";
import CommentsIcon from "../../../assets/images/comments-icon.png";
import LikesIcon from "../../../assets/images/likes-icon.png";
import LocationEventIcon from "../../../assets/images/location-event-icon.png";

import PerformerIcon from "../../../assets/images/performer-icon.png";
import DashboardIcon from "../../../assets/images/dashboard-icon2.png";
import GalleryIcon from "../../../assets/images/gallery-icon.png";

import AboutLocation from "../../../assets/images/aboutus-location.png";
import AboutGlobe from "../../../assets/images/aboutus-globe.png";
import AboutJoined from "../../../assets/images/aboutus-joined.png";
import InformationImage from "../../../assets/images/information-image.png";

import MoreIcon from "../../../assets/images/more-icon.png";

import Media1 from "../../../assets/images/media1.png";

import Media2 from "../../../assets/images/media2.png";

import SearchGrayIcon from "../../../assets/images/search-gray-icon.png";

import { Input, Progress, Tabs } from "antd";
import { useState } from "react";

export default function Root() {
  const navigate = useNavigate();

  const [onYourMindText, setOnYourMindText] = useState("");

  const [onlineFriend, setOnlineFriend] = useState([
    {
      name: "Tony",
      timeAgo: "",
      picture: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Allison Burgers",
      timeAgo: "",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Felix Norman",
      timeAgo: "15 min",
      picture: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      name: "John Dow",
      timeAgo: "1 Hour",
      picture: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Lucas Hunt",
      timeAgo: "11 min",
      picture: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      name: "Danny Morr",
      timeAgo: "11 min",
      picture: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      name: "Jason Cooper",
      timeAgo: "14 mints",
      picture: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Jesus Cooper",
      timeAgo: "5 hours",
      picture: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      name: "Joshua Hunt",
      timeAgo: "",
      picture: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Jimmy Maxwell",
      timeAgo: "",
      picture: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ]);

  const [onlinePages, setOnlinePages] = useState([
    {
      name: "Tony",
      timeAgo: "",
      picture: "https://randomuser.me/api/portraits/men/88.jpg",
    },
    {
      name: "Allison Burgers",
      timeAgo: "",
      picture: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      name: "Felix Norman",
      timeAgo: "15 min",
      picture: "https://randomuser.me/api/portraits/men/66.jpg",
    },
    {
      name: "John Dow",
      timeAgo: "1 Hour",
      picture: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ]);

  const renderOnlineFriends = (person, idx) => {
    return (
      <ListGroup.Item
        key={idx}
        as="li"
        style={{
          padding: 25,
          paddingBottom: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          border: "0px solid gray",
          marginLeft: 10,
        }}
        className="d-flex justify-content-between align-items-center"
      >
        <Row className="fw-bold" style={{ flex: 1, display: "flex" }}>
          <Col style={{ flex: 0.2, display: "flex", alignItems: "center" }}>
            <Image
              roundedCircle
              width={40}
              style={{ marginRight: 18 }}
              src={person.picture}
            />
          </Col>
          <Col style={{ flex: 0.8, display: "flex", alignItems: "center" }}>
            <Form.Label
              style={{
                color: "#92929D",
                textAlign: "left",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {person.name}
            </Form.Label>
          </Col>
          <Col style={{ flex: 0.2, display: "flex", alignItems: "center" }}>
            {person.timeAgo == "" ? (
              <div
                style={{
                  height: 10,
                  width: 10,
                  marginLeft: 10,
                  borderRadius: 10,
                  backgroundColor: "#82C43C",
                }}
              ></div>
            ) : (
              <Form.Label
                style={{
                  color: "#92929D",

                  textAlign: "right",
                  fontSize: 10,
                  // flex: 0.2,
                  fontWeight: 300,
                }}
              >
                {person.timeAgo}
              </Form.Label>
            )}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  const renderTextTab = (id) => {
    if (id === 0) {
      return <text style={TabFont}>Make Post</text>;
    } else if (id === 1) {
      return <text style={TabFont}>Photo or Video Album</text>;
    } else {
      return <text style={TabFont}>Live Videos</text>;
    }
  };

  const renderWhatsOnYourMind = () => {
    return (
      <Row
        style={{
          display: "flex",
          width: "-webkit-fill-available",
          paddingTop: 30,
        }}
      >
        <Col style={{ flex: 0.1 }}>
          <Image width={60} style={{}} src={ProfilePhoto} />
        </Col>

        <Col
          style={{
            flex: 0.7,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <textarea
            rows={2}
            style={{
              color: "#92929D",
              borderWidth: 0,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: 300,
              width: "-webkit-fill-available",
            }}
            type="textarea"
            placeholder="What's on your mind?"
          />
        </Col>

        <Col style={{ flex: 0.2 }}>
          <SendOutlined
            onClick={() => setOnYourMindText("")}
            style={{
              color: "#92929D",
              fontSize: 30,
            }}
          />
        </Col>
      </Row>
    );
  };
  const renderInnerTabs = (id) => {
    console.log(id);
    if (id === 0) {
      return renderWhatsOnYourMind();
    } else if (id === 1) {
      return null;
    } else if (id === 2) {
      return "blue";
    } else {
      return "yellow";
    }
  };

  const renderMiddleInformation = () => {
    return (
      <div
        style={{
          marginTop: 30,
          borderRadius: 20,

          backgroundColor: "#FFF",
          boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
        }}
      >
        <Row class="flex-row" style={{ flex: 0.5, display: "flex" }}>
          <Col
            style={{
              flex: 1,
              padding: 70,
              paddingTop: 100,
              paddingBottom: 100,
              paddingRight: 30,
            }}
          >
            <Row>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 7.2,
                  color: "#222",
                }}
              >
                WHY US?
              </Form.Label>
            </Row>

            <Row>
              <Form.Label
                style={{
                  textAlign: "left",
                  fontSize: 44,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: -1.1,
                  color: "#222",
                }}
              >
                WE VALUE QUALITY OVER QUANTITY
              </Form.Label>
            </Row>
            <Row>
              <Form.Label
                style={{
                  textAlign: "left",

                  fontSize: 18,
                  lineHeight: 1.5,
                  fontWeight: 300,
                  color: "#888",
                }}
              >
                We work with people who are as dedicated to their craft as we
                are to ours. And, we do everything. We work with people who are
                as dedicated to their craft as we are to ours. And, we do
                everything.
              </Form.Label>
            </Row>

            <Row>
              <div
                style={{
                  backgroundColor: "black",
                  height: 60,
                  marginTop: 20,
                  width: 200,
                  justifyContent: "space-around",
                  alignItems: "center",
                  display: "flex",
                  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                }}
              >
                <Form.Label style={{ color: "white" }}>OUR SITE</Form.Label>
                <RightOutlined
                  style={{
                    fontSize: 18,
                    color: "white",
                  }}
                />
              </div>
            </Row>
          </Col>

          <Col style={{ flex: 1 }}>
            <Image
              width={"100%"}
              height={"100%"}
              style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
              src={InformationImage}
            />
          </Col>
        </Row>

        <Row
          class="flex-row"
          style={{
            display: "flex",
            marginTop: 30,
            paddingLeft: 70,
            paddingRight: 70,
          }}
        >
          <Row
            class="flex-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Form.Label
              style={{
                textAlign: "left",
                fontSize: 30,
                color: "#000",
              }}
            >
              Location
            </Form.Label>

            <Form.Label
              style={{
                textAlign: "left",
                fontSize: 16,
                fontWeight: "300",
                color: "#92929D",
              }}
            >
              + add more locations
            </Form.Label>
          </Row>

          <Row
            class="display-flex flex-row"
            style={{ flex: "display", marginTop: 30, marginBottom: 30 }}
          >
            <Col
              style={{
                width: 300,
                padding: 40,
                margin: 30,
                marginLeft: 0,
                display: "flex",
                alignItems: "center",
                boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
              }}
            >
              <Form.Label
                style={{
                  fontSize: 18,
                  fontWeight: "300",

                  color: "#141821",
                  alignSelf: "center",
                }}
              >
                1995 Mathews Street New York City, NYC
              </Form.Label>
            </Col>
            <Col
              style={{
                width: 300,
                padding: 40,
                margin: 30,
                display: "flex",
                alignItems: "center",
                boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
              }}
            >
              <Form.Label
                style={{
                  fontSize: 18,
                  fontWeight: "300",
                  color: "#141821",
                  alignSelf: "center",
                }}
              >
                1995 Mathews Street New York City, NYC
              </Form.Label>
            </Col>
            <Col
              style={{
                width: 300,
                padding: 40,
                margin: 20,
                marginRight: 0,

                display: "flex",
                alignItems: "center",
                boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
              }}
            >
              <Form.Label
                style={{
                  fontSize: 18,
                  fontWeight: "300",
                  color: "#141821",
                  alignSelf: "center",
                }}
              >
                1995 Mathews Street New York City, NYC
              </Form.Label>
            </Col>
          </Row>
        </Row>
      </div>
    );
  };
  const renderMiddle = () => {
    return (
      <div
        style={{
          padding: 30,
          marginTop: 30,
          borderRadius: 20,
          backgroundColor: "#FFF",
          boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
        }}
      >
        <Tabs
          className={{}}
          style={{
            // alignContent: "center",
            // justifyContent: "center",
            alignItems: "flex-start",
            // flex: 1,
          }}
          defaultActiveKey="0"
          items={[CheckCircleFilled, UserOutlined, CloseCircleFilled].map(
            (Icon, i) => {
              const id = String(i + 1);
              return {
                label: <div style={{}}>{renderTextTab(i)}</div>,
                key: id,
                children: renderInnerTabs(i),
              };
            }
          )}
        />
      </div>
    );
  };
  const renderChat = () => {
    return (
      <div
        style={{
          marginTop: 40,
          borderRadius: 20,
          backgroundColor: "#FFF",
          boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
        }}
      >
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            style={{
              padding: 25,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderWidth: 0,
              borderColor: "#EEEFF3",
              borderBottom: "2px solid #EEEFF3",

              borderBottomWidth: 1,
            }}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <Image
                  width={20}
                  style={{ marginRight: 18, paddingBottom: 5 }}
                  src={SearchGrayIcon}
                />
                {/* <Form.Label
                  style={{
                    color: "#92929D",

                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Search...
                </Form.Label> */}
                <input
                  style={{
                    color: "#92929D",
                    borderWidth: 0,
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            style={{
              padding: 25,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderWidth: 0,
              borderColor: "#EEEFF3",
              borderBottom: "2px solid #EEEFF3",

              borderBottomWidth: 1,
            }}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <Form.Label
                  style={{
                    color: "#92929D",

                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Your Pages
                </Form.Label>
              </div>
            </div>
          </ListGroup.Item>

          <FlatList
            list={onlinePages}
            renderItem={renderOnlineFriends}
            renderWhenEmpty={() => <div>List is empty!</div>}
            // sortBy={["firstName", { key: "lastName", descending: true }]}
            // groupBy={(person) =>
            //   person.info.age > 18 ? "Over 18" : "Under 18"
            // }
          />
          <ListGroup.Item
            as="li"
            style={{
              padding: 25,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderWidth: 0,
              borderColor: "#EEEFF3",
              borderBottom: "0px solid #EEEFF3",

              borderBottomWidth: 1,
            }}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <Form.Label
                  style={{
                    color: "#92929D",

                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  FRIENDS
                </Form.Label>
              </div>
            </div>
          </ListGroup.Item>

          <FlatList
            list={onlineFriend}
            renderItem={renderOnlineFriends}
            renderWhenEmpty={() => <div>List is empty!</div>}
            // sortBy={["firstName", { key: "lastName", descending: true }]}
            // groupBy={(person) =>
            //   person.info.age > 18 ? "Over 18" : "Under 18"
            // }
          />
        </ListGroup>
      </div>
    );
  };
  return (
    <Container
      // class="container-fluid"
      // className="viewBack"
      style={{
        width: "100%",
        maxWidth: "100%",
        height: 500,
      }}
      // id="viewBack"
    >
      <div
        style={{
          backgroundColor: "#FFF",
          padding: 20,
          paddingLeft: 0,
          height: "9rem",
          paddingTop: 25,
          marginTop: 400,
          marginLeft: 200,
          marginRight: 200,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col>
            <Image
              id="logo-image"
              width={200}
              height={200}
              style={{
                boxShadow: "3.99px 22.65px 29px 0 rgba(105,95,151,0.2)",

                borderRadius: 200,
                position: "absolute",
                display: "flex",
                top: -80,
                marginLeft: 150,
              }}
              preview={false}
              src={ProfilePhoto}
            />
          </Col>

          <Col>
            <Row style={{ marginLeft: 30 }}>
              <div>
                <Form.Label
                  style={{
                    color: "#7A86A1",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: -0.56,
                    display: "flex",
                  }}
                >
                  Hard Rock Cafe
                </Form.Label>
              </div>
              <div
                style={{
                  width: 150,
                  backgroundColor: "#F6EFFF",
                  fontSize: 12,
                  letterSpacing: -0.12,
                  padding: 8,
                  borderRadius: 20,
                }}
              >
                <Image
                  id="logo-image"
                  width={10}
                  style={{ marginRight: 5 }}
                  preview={false}
                  src={LocationIcon}
                />
                <Form.Label style={{}}>Staples Center L.A</Form.Label>
              </div>
            </Row>
          </Col>

          <Col style={{ flexDirection: "row", display: "flex" }}>
            <Button
              id="social-button-button-google"
              variant="primary"
              size="lg"
              onClick={() => alert("asd")}
              style={{
                // width: width / 6,
                width: 171,
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
                + Create Event
              </text>
            </Button>
            <Button
              id="social-button-button-google"
              variant="primary"
              size="lg"
              onClick={() => alert("asd")}
              style={{
                // width: width / 6,
                width: 171,
                borderRadius: 100,

                marginRight: 30,
                height: 50,
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.8)",
                backgroundColor: `white`,
              }}
            >
              <text
                id="social-text"
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#7A86A1",
                }}
              >
                + Invite Artists
              </text>
            </Button>
          </Col>

          <Col style={{ paddingRight: 50 }}>
            <Row>
              <Col>
                <Image
                  id="logo-image"
                  width={60}
                  height={60}
                  style={{ marginBottom: 10 }}
                  preview={false}
                  src={FollowingIcon}
                />
                <div style={{}}>
                  <Form.Label
                    style={{
                      color: "#141821",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    15k
                  </Form.Label>
                </div>
                <div style={{}}>
                  <Form.Label
                    style={{
                      fontSize: 14,
                      color: "#858997",

                      fontWeight: 400,
                    }}
                  >
                    Following
                  </Form.Label>
                </div>
              </Col>
              <Col>
                <Image
                  id="logo-image"
                  width={60}
                  height={60}
                  style={{ marginBottom: 10 }}
                  preview={false}
                  src={FollowersIcon}
                />
                <div style={{}}>
                  <Form.Label
                    style={{
                      color: "#141821",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    15k
                  </Form.Label>
                </div>
                <div style={{}}>
                  <Form.Label
                    style={{
                      fontSize: 14,
                      color: "#858997",

                      fontWeight: 400,
                    }}
                  >
                    Following
                  </Form.Label>
                </div>
              </Col>
              <Col>
                <Image
                  id="logo-image"
                  width={60}
                  height={60}
                  style={{ marginBottom: 10 }}
                  preview={false}
                  src={LikesIcon}
                />
                <div style={{}}>
                  <Form.Label
                    style={{
                      color: "#141821",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    1k
                  </Form.Label>
                </div>
                <div style={{}}>
                  <Form.Label
                    style={{
                      fontSize: 14,
                      color: "#858997",
                      fontWeight: 400,
                    }}
                  >
                    Followers
                  </Form.Label>
                </div>
              </Col>
              <Col>
                <Image
                  id="logo-image"
                  width={60}
                  height={60}
                  style={{ marginBottom: 10 }}
                  preview={false}
                  src={CommentsIcon}
                />
                <div style={{}}>
                  <Form.Label
                    style={{
                      color: "#141821",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    13.5k
                  </Form.Label>
                </div>
                <div style={{}}>
                  <Form.Label
                    style={{
                      fontSize: 14,
                      color: "#858997",

                      fontWeight: 400,
                    }}
                  >
                    Comments
                  </Form.Label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Row style={{ flex: 1 }}>
        <Col style={{ flex: 0.2, paddingLeft: 50, paddingRight: 50 }}>
          <div
            style={{
              height: 98.02,
              width: 369,
              padding: 30,
              marginTop: 30,
              borderRadius: 20,
              backgroundColor: "#FFF",
              boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
            }}
          >
            <div>
              <Row>
                <Form.Label
                  style={{
                    color: "#858997",
                    fontSize: 16,
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  Complete your profile
                </Form.Label>

                <Col>
                  <Progress
                    strokeColor={"#AD6BE0"}
                    percent={22}
                    status="active"
                  />
                </Col>
              </Row>
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              borderRadius: 20,
              backgroundColor: "#FFF",
              boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
            }}
          >
            <ListGroup as="ol">
              <ListGroup.Item
                as="li"
                style={{
                  padding: 25,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: 0,
                  borderColor: "#EEEFF3",

                  borderBottomWidth: 1,
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <PlusSquareFilled
                      style={{
                        marginRight: 20,
                        fontSize: 16,
                        color: "#858997",
                      }}
                    />
                    <Form.Label
                      style={{
                        color: "#858997",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Our Timeline
                    </Form.Label>
                  </div>
                </div>
                <RightOutlined />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                style={{
                  padding: 25,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: 0,
                  borderColor: "#EEEFF3",

                  borderBottomWidth: 1,
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <UserOutlined
                      style={{
                        marginRight: 20,
                        fontSize: 16,
                        color: "#858997",
                      }}
                    />
                    <Form.Label
                      style={{
                        color: "#858997",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Our Profile
                    </Form.Label>
                  </div>
                </div>
                <RightOutlined />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                style={{
                  padding: 25,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderColor: "#EEEFF3",
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <Image
                      id="logo-image"
                      width={20}
                      style={{ marginRight: 18 }}
                      src={LocationEventIcon}
                    />
                    <Form.Label
                      style={{
                        color: "#858997",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Our Events
                    </Form.Label>
                  </div>
                </div>
                <RightOutlined />
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                style={{
                  padding: 25,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderColor: "#EEEFF3",
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <Image
                      id="logo-image"
                      width={20}
                      style={{ marginRight: 18 }}
                      src={GalleryIcon}
                    />
                    <Form.Label
                      style={{
                        color: "#858997",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Our Gallery
                    </Form.Label>
                  </div>
                </div>
                <RightOutlined />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                style={{
                  padding: 25,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: 0,
                  borderColor: "#EEEFF3",

                  borderBottomWidth: 1,
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <Image
                      id="logo-image"
                      width={20}
                      style={{ marginRight: 18 }}
                      src={PerformerIcon}
                    />
                    <Form.Label
                      style={{
                        color: "#858997",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Our Performers
                    </Form.Label>
                  </div>
                </div>
                <RightOutlined />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                style={{
                  padding: 25,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderWidth: 0,
                  borderColor: "#EEEFF3",
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,

                  borderBottomWidth: 1,
                }}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <Image
                      id="logo-image"
                      width={20}
                      style={{ marginRight: 18 }}
                      src={DashboardIcon}
                    />
                    <Form.Label
                      style={{
                        color: "#858997",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Dashboard
                    </Form.Label>
                  </div>
                </div>
                <RightOutlined />
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div
            style={{
              marginTop: 40,

              borderRadius: 20,
              backgroundColor: "#FFF",
              boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
              paddingBottom: 10,
            }}
          >
            <Card
              style={{
                borderWidth: 0,
                backgroundColor: "#FFF",
                borderRadius: 20,
              }}
            >
              <Card.Header
                as="h6"
                style={{
                  fontWeight: 500,
                  borderRadius: 20,
                  textAlign: "left",
                  backgroundColor: "#FFF",
                  padding: 20,
                  borderWidth: 1,
                  borderColor: "#F1F1F5",
                }}
              >
                <Row>
                  <Col>
                    <Form.Label>About Us</Form.Label>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Image
                      id="logo-image"
                      width={30}
                      style={{ marginLeft: 20 }}
                      src={MoreIcon}
                    />
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Text
                  style={{
                    textAlign: "left",
                    fontWeight: 500,
                    borderWidth: 1,
                    borderColor: "red",
                  }}
                >
                  “Pushing pixels and experiences in digital products for
                  Sebostudio”
                </Card.Text>

                <Row
                  style={{
                    flex: 1,
                    marginTop: 15,
                  }}
                >
                  <Col style={{ flex: 0.1 }}>
                    <Image
                      id="logo-image"
                      width={20}
                      preview={false}
                      src={AboutLocation}
                    />
                  </Col>
                  <Col style={{ flex: 0.9, marginLeft: 10 }}>
                    <Form.Label
                      style={{
                        textAlign: "left",
                        alignSelf: "flex-start",
                        display: "flex",
                        fontWeight: 500,
                      }}
                    >
                      San Francisco
                    </Form.Label>
                  </Col>
                </Row>
                <Row style={{ flex: 1, marginTop: 15 }}>
                  <Col style={{ flex: 0.1 }}>
                    <Image
                      id="logo-image"
                      width={20}
                      preview={false}
                      src={AboutGlobe}
                    />
                  </Col>
                  <Col style={{ flex: 0.9, marginLeft: 10 }}>
                    <Form.Label
                      style={{
                        textAlign: "left",
                        alignSelf: "flex-start",
                        display: "flex",
                        fontWeight: 500,
                      }}
                    >
                      Hardrockcafe.com
                    </Form.Label>
                  </Col>
                </Row>

                <Row style={{ flex: 1, marginTop: 15 }}>
                  <Col style={{ flex: 0.1 }}>
                    <Image
                      id="logo-image"
                      width={20}
                      preview={false}
                      src={AboutJoined}
                    />
                  </Col>
                  <Col style={{ flex: 0.9, marginLeft: 10 }}>
                    <Form.Label
                      style={{
                        textAlign: "left",
                        alignSelf: "flex-start",
                        display: "flex",
                        fontWeight: 500,
                      }}
                    >
                      Joined June 2012
                    </Form.Label>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>

          <div
            style={{
              marginTop: 40,

              borderRadius: 20,
              backgroundColor: "#FFF",
              boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
              paddingBottom: 10,
            }}
          >
            <Card
              style={{
                borderWidth: 0,
                backgroundColor: "#FFF",
                borderRadius: 20,
              }}
            >
              <Card.Header
                as="h6"
                style={{
                  fontWeight: 500,
                  borderRadius: 20,
                  textAlign: "left",
                  backgroundColor: "#FFF",
                  padding: 20,
                  borderWidth: 1,
                  borderColor: "#F1F1F5",
                }}
              >
                <Row style={{ flex: 1 }}>
                  <Col style={{ flex: 0.6 }}>
                    <Form.Label>Performer Requests</Form.Label>
                  </Col>
                  <Col style={{ flex: 0.4 }}>
                    <Row>
                      <Col
                        style={{
                          boxSizing: "border-box",
                          height: 24,
                          width: 60,
                          display: "flex",
                          borderRadius: 30,
                          border: "1px solid #00CD98",
                          backgroundColor: "#D9F2EC",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Form.Label
                          style={{
                            fontSize: 10,
                            alignSelf: "center",
                            display: "flex",
                            fontWeight: 400,
                            justifyContent: "center",
                            color: "#858997",
                          }}
                        >
                          + Invite
                        </Form.Label>
                      </Col>

                      <Col
                        style={{
                          display: "flex",

                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          id="logo-image"
                          width={30}
                          style={{ marginLeft: 20 }}
                          src={MoreIcon}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row
                  style={{
                    flex: 1,
                    marginTop: 15,
                  }}
                >
                  <Col style={{ flex: 0.1 }}>
                    <div
                      style={{
                        backgroundColor: "#858997",
                        width: 40,
                        marginRight: 10,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: 40,
                      }}
                    >
                      {/* <Image
                        id="logo-image"
                        width={20}
                        preview={false}
                        src={AboutLocation}
                      /> */}
                      <UserOutlined
                        style={{
                          fontSize: 20,
                          alignSelf: "center",
                          color: "white",
                        }}
                      />
                    </div>
                  </Col>
                  <Col
                    style={{
                      flex: 0.9,
                      display: "grid",
                      alignContent: "center",
                    }}
                  >
                    <Row>
                      <Col>
                        <Form.Label
                          style={{
                            textAlign: "left",
                            alignSelf: "flex-start",
                            display: "flex",
                            fontWeight: 400,
                            color: "#141821",
                          }}
                        >
                          Mile Knudsen
                        </Form.Label>
                        <Form.Label
                          style={{
                            textAlign: "left",
                            alignSelf: "flex-start",
                            display: "flex",
                            fontWeight: 500,
                            fontSize: 10,
                            color: "#858997",
                          }}
                        >
                          Linz, Austria
                        </Form.Label>
                      </Col>

                      <Col>
                        <CloseCircleFilled
                          style={{
                            width: 30,
                            height: 30,
                            fontSize: 30,
                            backgroundColor: "red",
                            borderRadius: 20,
                            color: "#FEC4B0",
                          }}
                        />
                        <CheckCircleFilled
                          style={{
                            width: 30,
                            marginLeft: 10,
                            height: 30,
                            fontSize: 30,
                            backgroundColor: "#00CD98",
                            borderRadius: 20,
                            color: "#D9F2EC",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row
                  style={{
                    flex: 1,
                    marginTop: 15,
                  }}
                >
                  <Col style={{ flex: 0.1 }}>
                    <div
                      style={{
                        backgroundColor: "#858997",
                        width: 40,
                        marginRight: 10,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: 40,
                      }}
                    >
                      {/* <Image
                        id="logo-image"
                        width={20}
                        preview={false}
                        src={AboutLocation}
                      /> */}
                      <UserOutlined
                        style={{
                          fontSize: 20,
                          alignSelf: "center",
                          color: "white",
                        }}
                      />
                    </div>
                  </Col>
                  <Col
                    style={{
                      flex: 0.9,
                      display: "grid",
                      alignContent: "center",
                    }}
                  >
                    <Row>
                      <Col>
                        <Form.Label
                          style={{
                            textAlign: "left",
                            alignSelf: "flex-start",
                            display: "flex",
                            fontWeight: 400,
                            color: "#141821",
                          }}
                        >
                          Yvonme Schultz
                        </Form.Label>
                        <Form.Label
                          style={{
                            textAlign: "left",
                            alignSelf: "flex-start",
                            display: "flex",
                            fontWeight: 500,
                            fontSize: 10,
                            color: "#858997",
                          }}
                        >
                          Berlin, Germany
                        </Form.Label>
                      </Col>

                      <Col>
                        <CloseCircleFilled
                          style={{
                            width: 30,
                            height: 30,
                            fontSize: 30,
                            backgroundColor: "red",
                            borderRadius: 20,
                            color: "#FEC4B0",
                          }}
                        />
                        <CheckCircleFilled
                          style={{
                            width: 30,
                            marginLeft: 10,
                            height: 30,
                            fontSize: 30,
                            backgroundColor: "#00CD98",
                            borderRadius: 20,
                            color: "#D9F2EC",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row
                  style={{
                    flex: 1,
                    marginTop: 15,
                  }}
                >
                  <Col style={{ flex: 0.1 }}>
                    <div
                      style={{
                        backgroundColor: "#858997",
                        width: 40,
                        marginRight: 10,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: 40,
                      }}
                    >
                      {/* <Image
                        id="logo-image"
                        width={20}
                        preview={false}
                        src={AboutLocation}
                      /> */}
                      <UserOutlined
                        style={{
                          fontSize: 20,
                          alignSelf: "center",
                          color: "white",
                        }}
                      />
                    </div>
                  </Col>
                  <Col
                    style={{
                      flex: 0.9,
                      display: "grid",
                      alignContent: "center",
                    }}
                  >
                    <Row>
                      <Col>
                        <Form.Label
                          style={{
                            textAlign: "left",
                            alignSelf: "flex-start",
                            display: "flex",
                            fontWeight: 400,
                            color: "#141821",
                          }}
                        >
                          Emily Martin
                        </Form.Label>
                        <Form.Label
                          style={{
                            textAlign: "left",
                            alignSelf: "flex-start",
                            display: "flex",
                            fontWeight: 500,
                            fontSize: 10,
                            color: "#858997",
                          }}
                        >
                          Belgrade, Serbia
                        </Form.Label>
                      </Col>

                      <Col>
                        <CloseCircleFilled
                          style={{
                            width: 30,
                            height: 30,
                            fontSize: 30,
                            backgroundColor: "red",
                            borderRadius: 20,
                            color: "#FEC4B0",
                          }}
                        />
                        <CheckCircleFilled
                          style={{
                            width: 30,
                            marginLeft: 10,
                            height: 30,
                            fontSize: 30,
                            backgroundColor: "#00CD98",
                            borderRadius: 20,
                            color: "#D9F2EC",
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>

          <div
            style={{
              marginTop: 40,

              borderRadius: 20,
              backgroundColor: "#FFF",
              boxShadow: "0 10px 30px 0 rgba(209,213,223,0.5)",
              paddingBottom: 15,
              marginBottom: 50,
            }}
          >
            <Card
              style={{
                borderWidth: 0,
                backgroundColor: "#FFF",
                borderRadius: 20,
              }}
            >
              <Card.Header
                as="h6"
                style={{
                  fontWeight: 500,
                  borderRadius: 20,
                  textAlign: "left",
                  backgroundColor: "#FFF",
                  padding: 20,
                  borderWidth: 1,
                  borderColor: "#F1F1F5",
                }}
              >
                <Row>
                  <Col>
                    <Form.Label>Our Media</Form.Label>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Image
                      id="logo-image"
                      width={30}
                      style={{ marginLeft: 20 }}
                      src={MoreIcon}
                    />
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm>
                    <Image
                      id="logo-image"
                      width={100}
                      height={100}
                      style={{ borderRadius: 20 }}
                      src={Media1}
                    />
                  </Col>
                  <Col sm>
                    <Image
                      id="logo-image"
                      width={100}
                      height={100}
                      style={{ borderRadius: 20 }}
                      src={Media2}
                    />
                  </Col>
                  <Col sm>
                    <Image
                      id="logo-image"
                      width={100}
                      height={100}
                      style={{ borderRadius: 20 }}
                      src={Media2}
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: 15 }}>
                  <Col sm>
                    <Image
                      id="logo-image"
                      width={100}
                      height={100}
                      style={{ borderRadius: 20 }}
                      src={Media2}
                    />
                  </Col>
                  <Col sm>
                    <Image
                      id="logo-image"
                      width={100}
                      height={100}
                      style={{ borderRadius: 20 }}
                      src={Media2}
                    />
                  </Col>
                  <Col sm>
                    <Image
                      id="logo-image"
                      width={100}
                      height={100}
                      style={{ borderRadius: 20 }}
                      src={Media1}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col style={{ flex: 0.6, paddingRight: 50 }}>
          {renderMiddle()}

          {renderMiddleInformation()}
        </Col>
        <Col style={{ flex: 0.2 }}>
          <div
            style={{
              marginRight: 20,
            }}
          >
            {renderChat()}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const TabFont = {
  fontWeight: "400",
};
