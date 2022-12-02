import logo from "./logo.svg";
import Routes from "../src/routes/Routes";
import { Button, DatePicker, Space, version } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Routes />
    </ThemeProvider>
  );
}

export default App;
