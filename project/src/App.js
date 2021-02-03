import React from 'react';
import img from './4.png';
import vid from './video/v1.mp4';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl,Card} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/*nav*/}
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
<h1 className="title">First Application JSX</h1>
{/*img*/}
<Card>
    <Card.Img variant="top" src="3.png" />
    <Card.Body>
      <Card.Text>
        Public Img
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
     Src Img
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom"  src={img} alt="img" />
  </Card>
  <h2 className="title">This is My video</h2>
  {/*video*/}
  <video src={vid} width="320" height="240" controls="controls" autoplay="true" />
</div>
  );
}

export default App;
