import 'bootstrap';
import { Link, Outlet} from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Avatar, AvatarGroup} from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/dist/rsuite.min.css';


function Navbarr() {


  return (
    <>
    {/* LINK A NAV BAR:   https://rsuitejs.com/components/navbar/     */}
    <Navbar>
    <Nav>
      <Nav.Item as={Link} to="/home" icon={<HomeIcon />}>Inicio</Nav.Item>
      <Nav.Item as={Link} to="/creaciones">Mis creaciones</Nav.Item>
      <Nav.Item as={Link} to="/favs">Favoritos</Nav.Item>
      {/* <Nav.Menu title="About"> */}
        <Nav.Item as={Link} to="/infoPersonal">Informacion personal</Nav.Item>
        {/* <Nav.Item>Team</Nav.Item>s
         <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu> */}
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<Avatar src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />}>
        Nadine Lewit
      </Nav.Item>
    </Nav>
  </Navbar>

  <Outlet/>
      {/* <NavbarReact expand="lg" className="bg-body-tertiary">
        <Container>
          <NavbarReact.Brand as={Link} to="/">Destacados</NavbarReact.Brand>
          <NavbarReact.Toggle aria-controls="basic-navbar-nav" />
          <NavbarReact.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/creaciones">Mis creaciones</Nav.Link>
              <Nav.Link as={Link} to="/favs">Favoritos</Nav.Link>
              <Nav.Link as={Link} to="/infoPersonal">Informacion personal</Nav.Link>
            </Nav>
          </NavbarReact.Collapse>
         
        </Container>
        <Outlet/>
      </NavbarReact> */}
    </>
  );
}

export default Navbarr;