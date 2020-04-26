import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import sources from '../data.json';

export default class ListView extends Component {
  static defaultProps = {
    offset: 0,
    limit: 50
  };

  constructor(props) {
    super(props);
    this.state = { sources: this.getSources(props) }
  }

  componentDidUpdate(props) {
    if (props.offset !== this.props.offset ||
        props.limit !== this.props.limit ||
        props.filters !== this.props.filters) {
      this.setState({ sources: this.getSources(props) });
    }
  }

  getSources(props = this.props) {
    return sources
      .filter(source => !!props.filters.category ? source.Service === props.filters.category : true)
      .slice(props.offset, props.offset + props.limit)
  }

  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <ListGroup bg="light">
          {this.state.sources.map(source => (
            <ListGroup.Item key={source.name}>
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