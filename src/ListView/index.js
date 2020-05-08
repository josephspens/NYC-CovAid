import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

export default class ListView extends Component {
  static defaultProps = {
    sources: []
  };

  render() {
    return (
      <Container>
        <ListGroup bg="light">
          {this.props.sources.map(source => (
            <ListGroup.Item key={source.id}>
              <div><a href={source.Website}>{source.Name}</a></div>
              <div>{source.Service}</div>
              <div>{source['Phone Number']}</div>
              <div>{source.Notes}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}