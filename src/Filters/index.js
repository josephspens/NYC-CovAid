import React from 'react';
import { Container, Navbar, Dropdown } from 'react-bootstrap';

export default function (props) {
  return (
    <Container style={{ paddingTop: 20 }}>
        <Navbar bg="light">
        <Dropdown>
          <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => props.filterCategory('Grocery Stores')}>Grocery Stores</Dropdown.Item>
            <Dropdown.Item onClick={() => props.filterCategory('Prepared Meals')}>Prepared Meals</Dropdown.Item>
            <Dropdown.Item onClick={() => props.filterCategory('Pharmacy')}>Pharmacy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Navbar>
    </Container>
  );
}
