import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import sources from '../data.json';

export default class ListView extends Component {
  static defaultProps = {
    offset: 0,
    limit: 20
  };

  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <ListGroup bg="light">
          {sources.slice(this.props.offset, this.props.offset + this.props.limit).map(source => (
            <ListGroup.Item key={source.name}>{source.Name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}