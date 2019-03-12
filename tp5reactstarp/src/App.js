import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import {Container, Col, Row} from 'reactstrap';




import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col lg="12" ><Header /></Col>
      </Row>
      <Row>
        <Col lg="2" className="d-none d-lg-block"><SideMenu /></Col>
        <Col lg="10">
        <Row>
          <main>
            <Col><Artist /></Col>
            <Col><AlbumGrid /></Col>
          </main> 
        </Row>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default App;
