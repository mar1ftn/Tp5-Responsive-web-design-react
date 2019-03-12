import React, { Component } from 'react';
import Album from '../component/Album';
import {Container, Col, Row} from 'reactstrap';



export default class AlbumGrid extends Component {
  render() {
    return (
      <div >
      <Row>
      <Col xl="10" lg="9" md="9" sm="8" xs="8">
      <h2>Top Album</h2>
      </Col>
      <Col xl="2" lg="3" md="3" sm="4" xs="4">
      <div>
        <a class="station" href="#">
          Start Station
        </a>
      </div>
      </Col>
      </Row>
      <section id="albums" >
      <Row>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_01.png"
          nom="Native (Deluxe)"
          artist="OneRepublic"
          song={17}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_02.png"
          nom="Wax Wings"
          artist="Joshua Radin"
          song={11}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_03.png"
          nom="Wax Modern Vampires"
          artist="Vampire Weekend"
          song={12}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_04.png"
          nom="Night Visions"
          artist="Imagine Dragons"
          song={11}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_05.png"
          nom="Trouble Will Find Me"
          artist="The National"
          song={13}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_06.png"
          nom="Native (Deluxe)"
          artist="OneRepublic"
          song={17}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_07.png"
          nom="Wax Wings"
          artist="Joshua Radin"
          song={11}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_08.png"
          nom="Modern Vampires of th..."
          artist="Vampire Weekend"
          song={12}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_09.png"
          nom="Night Visions"
          artist="Imagine Dragons"
          song={11}
        />
      </Col>
      <Col  xs="6" sm="6" md="3" lg="3" xl="2">
        <Album
          image="img/album/album_10.png"
          nom="Trouble Will Find Me"
          artist="The National"
          song={13}
        />
      </Col>
      </Row>
      </section>
    </div>
    );
  }
}
