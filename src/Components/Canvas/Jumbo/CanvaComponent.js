import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class CanvaComponent extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Steven Zelenak</h1>
        <p>
          <Button variant="primary">Github</Button>
          <Button variant="primary">Linkden</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default CanvaComponent;
