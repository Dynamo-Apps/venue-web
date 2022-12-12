import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Root() {
  const navigate = useNavigate();

  return (
    <Container
      class="d-flex justify-content-center vh-100"
      className="viewBack"
      id="viewBack"
    >
      <Button
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
      </Button>
    </Container>
  );
}
