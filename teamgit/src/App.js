// import React, {Component} from "react";
// import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import NasaApi  from './components/site/Apps/NASA/NasaApi';

function App() {
  return (
    <div className="App">
      <Header />
      <hr/>
      <Container className='main'>
        <Row>
          <Col>
          <h2>Weather API</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col>
          <h2>NASA API</h2>
          <NasaApi />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col>
          <h2>Ticketmaster API</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
        
      </Container>

      <hr/>
      <Footer />
    </div>
  );
}

export default App;
