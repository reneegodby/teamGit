import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Footer from "./components/site/Footer";
import Header from "./components/site/Header";
import NasaApi from "./components/site/Apps/NASA/NasaApi";
import TicketMasterApi from "./components/site/Apps/TicketMaster/TicketMasterApi";
import WeatherApi from "./components/site/Apps/Weather/WeatherApi";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  // This function gets the user’s current position and accepts 3 parameters; a success callback function, an error callback function, and a position options object. Only using the callback function.

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App">
      <Header />
      <hr />
      <div className="App">
        <div className="Coordinates">
          <p>{status}</p>
          {lat && <p>Latitude: {lat}-- </p>}
          {lon && <p>Longitude: {lon}</p>}
        </div>
      </div>
      <hr />
      <Container className="main">
        <Row>
          <Col  className='border'>
          <h3><WeatherApi lat={lat} lon={lon}/></h3>
          </Col>
          <Col className='border'>
          <h3><NasaApi lat={lat} lon={lon}/></h3>
          </Col>
          <Col  className='border'>
          <h3><TicketMasterApi lat={lat} lon={lon}/></h3>
          </Col>
        </Row>
      </Container>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
