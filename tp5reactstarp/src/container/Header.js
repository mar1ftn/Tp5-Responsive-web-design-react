import React, { Component } from 'react';
import logo from '../img/logo.png';
import {Container, Col, Row} from 'reactstrap';


class Header extends Component {
  render() {
    return (
      <header> 
      <div class="wrapper">
      <Row>
        <Col lg="2">
        <div class=" logo-search ">
          <img class="pull-left" src={logo} alt="logo" />
        </div>
        </Col>
        <Col lg="7" className="d-none d-lg-block">
        <form method="POST" action="index.html">
          <input type="search" required class=" search" />
          <input
            type="submit"
            name="submit"
            value="Rechercher"
            class=" submit"
          />
        </form>
        </Col>
        <Col lg="3">
        <div class="user ">
          <a href="#" >Luke Chesser</a>
        </div>
        </Col>
        </Row>
      </div>
    
    </header>
    );
  }
}

export default Header;
