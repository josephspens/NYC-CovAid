import React, { Component } from 'react';
import { Container, Navbar, Dropdown, Button } from 'react-bootstrap';
import { without } from 'lodash';
import sources from '../data.json';

export default class Filters extends Component {
  static defaultProps = {
    filters: {
      services: [],
      zips: []
    }
  };

  constructor(props) {
    super(props);
    this.state = props.filters;
  }

  get services() {
    const services = Object.values(sources).reduce((memo, source) => [ ...memo, ...(source['Service'] || '').split(', ') ], []);
    return Array.from(new Set(services)).sort();
  }

  get zips() {
    return Object.keys(sources).filter(source => !isNaN(source)).sort();
  }

  render() {
    return (
      <Container style={{ padding: '10px 0' }}>
        <Navbar bg="light">
          <Dropdown style={{ marginRight: 10 }}>
            <Dropdown.Toggle variant="light">Zip Code Filter</Dropdown.Toggle>
            <Dropdown.Menu>
              {this.zips.map(zip => (
                <Dropdown.Item
                  key={zip}
                  active={this.state.zips.includes(zip)}
                  onClick={() => this.setState({
                    zips: this.state.zips.includes(zip)
                      ? without(this.state.zips, zip)
                      : [ ...this.state.zips, zip ]
                  })}
                >
                  {zip}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light">Category Filter</Dropdown.Toggle>
            <Dropdown.Menu>
              {this.services.map(service => (
                <Dropdown.Item
                  key={service}
                  active={this.state.services.includes(service)}
                  onClick={() => this.setState({
                    services: this.state.services.includes(service)
                      ? without(this.state.services, service)
                      : [ ...this.state.services, service ]
                  })}
                >
                  {service}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            variant="primary"
            onClick={() => this.props.updateFilters(this.state)}
          >
            Submit
          </Button>
        </Navbar>
      </Container>
    );
  }
}
