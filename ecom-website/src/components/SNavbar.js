import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink } from "react-router-dom";
import useState from "react";
import axios from "axios";
import "./Snavbar.css"
import React from "react";
function SNavBar(props) {
  
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar1">
        <Container className="Container" fluid>
          <Navbar.Brand href="/">
            <h4>E-Commerce Store</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search"
                aria-label="Search"
              />
              <Button
                style={{ borderRadius: "0px 10px 10px 0px" }}
                variant="primary"
              >
                Search
              </Button>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0 Nav1"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <span className="rr p-1">
                  <HomeIcon className="mb-1" sx={{ fontSize: "19px" }} />
                  Home
                </span>
              </Nav.Link>
              <Nav.Link>
                <span onClick={props.clickss} className="rr p-1">
                  Show Ads
                </span>
              </Nav.Link>
              <div className="login ">
                <Nav.Link href="login">
                  <span className="rr p-1">
                    <PersonIcon className="mb-1" sx={{ fontSize: "19px" }} />
                    Login
                  </span>
                </Nav.Link>
                <span className="rr p-2">|</span>
                <Nav.Link href="signup">
                  <span className="rr p-2">SignUp</span>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}

export default SNavBar;
