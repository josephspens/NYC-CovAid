import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Filters from '../Filters';
import ListView from '../ListView';
import MapView from '../MapView';
import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filters: {} }
  }

  render() {
    return (
      <div className="App">
        <Filters filterCategory={(category) => this.setState({ filters: { ...this.state.filters, category } })} />
        <Row>
          <Col><MapView filters={this.state.filters} /></Col>
          <Col><ListView filters={this.state.filters} /></Col>
        </Row>
      </div>
    );
  }
}
