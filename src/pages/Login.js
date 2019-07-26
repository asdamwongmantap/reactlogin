import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, 
    CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from "axios/index";

class Login extends Component {

  state = {
    title: '',
    lastname: ''

  };

  postDataHandler = () => {
      const data = {
          title: this.state.title,
          lastname: this.state.lastname
      };
      // const Firstname = data.firstname;
      axios.post("http://localhost:5001/api/v1/todos/login", data)
      // axios.post("https://rest-api-example-go.herokuapp.com/people", data)
          .then(response => {
              console.log(response);
              if (response.data.statusaja === "sesuai"){
                alert("data sesuai");
                // Link.push("/content");
                // location.href = "/content";
                window.location = "/content"
              }else{
                alert("data tidak sesuai");
                // location.href = "/indesc";
                // "/content"
                // window.location = "/index"
                window.location.reload();
              }
              // alert(response.data.statusaja);
              // window.location.reload();
          });

  };

  render() {
    return (
      <div className="app flex-row align-items-center" style={{ marginTop: '120px' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.postDataHandler}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/content">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
