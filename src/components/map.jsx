import GoogleMapReact from "google-map-react";
import {
  PlusSquareFilled,
  RightOutlined,
  SendOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  UserOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";
import { GOOGLE_MAP_API_KEY } from "../helpers/constants";

const LocationPin = ({ text }) => (
  <div className="pin">
    <PlusSquareFilled className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);
const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
