import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideNav.css'

function SideNav() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body sideNav mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
            
              </Offcanvas.Header>
              <Offcanvas.Body className='sideNavBody'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link href={'/Login'} className='navLink'>
                    <h2>ACCOUNT</h2></Link>
                    <Link href={'/'} className='navLink'>
                    <h3>001</h3>
                    <h2>THE GAME</h2></Link>
                    <Link href={'/Players'} className='navLink'>
                    <h3>002</h3>
                    <h2>THE PLAYERS</h2></Link>
                    <Link href={'/Crowd'} className='navLink'>
                    <h3>003</h3>
                    <h2>THE CROWD</h2></Link>
                    <Link href={'/Oppurtunity'} className='navLink'>
                    <h3>004</h3>
                    <h2>THE OPPURTUNITY</h2></Link>
                    <Link href={'/Solution'} className='navLink'>
                    <h3>005</h3>
                    <h2>THE SOLUTION</h2></Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default SideNav;