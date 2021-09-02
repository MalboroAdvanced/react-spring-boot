import React, { Component } from "react";
import userservices from "../services/UserServices";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";

export default class UserComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    userservices.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <NavbarBrand href="#home">TecnoTab</NavbarBrand>
          <Nav className="mr-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            ></FormControl>
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <h1 className="text-center">Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
