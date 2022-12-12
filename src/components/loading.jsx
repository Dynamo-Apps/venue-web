import Spinner from "react-bootstrap/Spinner";

function loader() {
  return (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
  );
}

export default loader;
