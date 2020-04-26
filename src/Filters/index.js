import React from 'react';
import { Container, Navbar, Dropdown } from 'react-bootstrap';
import sources from '../data.json';

const services = new Set();
sources.forEach(source => source.Service.split(', ').forEach(service => services.add(service)));

export default function (props) {
  return (
    <Container style={{ paddingTop: 20 }}>
        <Navbar bg="light">
        <Dropdown>
          <Dropdown.Toggle>Category Filter</Dropdown.Toggle>
          <Dropdown.Menu>
            {Array.from(services).sort().map(service => (
              <Dropdown.Item key={service} onClick={() => props.filterCategory(service)}>{service}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        </Navbar>
    </Container>
  );
}
