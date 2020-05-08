import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Filters from '../Filters';
import ListView from '../ListView';
import MapView from '../MapView';
import sources from '../data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        services: [],
        zips: []
      },
      offset: 0,
      limit: 100,
      sources: []
    }
  }

  get sources() {
    return this.state.filters.zips
      .reduce((memo, zip) => [ ...memo, ...sources[zip] ], [])
      .filter(source =>
        this.state.filters.services.length === 0 ||
        this.state.filters.services.includes(source.Service))
      .slice(this.state.offset, this.state.offset + this.state.limit)
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Row>
          <Col>
            <Filters
              filters={this.state.filters}
              updateFilters={(filters) => this.setState({
                filters,
                sources: this.sources
              })}
            />
          </Col>
        </Row>
        <Row>
          <Col><MapView zips={this.state.filters.zips} /></Col>
          <Col><ListView sources={this.state.sources} /></Col>
        </Row>
      </div>
    );
  }
}
