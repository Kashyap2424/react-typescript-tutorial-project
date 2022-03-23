import * as React from "react";
import { Navbar, Container } from "react-bootstrap";

interface IHeadersProps {}

const Headers: React.FunctionComponent<IHeadersProps> = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React Type-Script Tutorial</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
